import * as THREE from 'three';

// Remove React-specific code, use this file as the animation entry point

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let stars: THREE.Mesh[] = [], velocities: THREE.Vector3[] = [];
const STAR_COUNT = 5000;

let followingStar: THREE.Mesh | null = null;
let followingStarIndex: number | null = null;
let isFollowing = true;
let zoomDuration = 1200; // Much faster zoom
let finalOffset = 1; // Much closer
let followStartTime: number | null = null;

// Create a subtle white-tint color ramp function for the shader
const subtleWhiteTintRamp = `
  vec3 subtleWhiteTint(float t, float shift) {
    // shift: 0 to 1, controls tint
    // 0-0.33: blue-white, 0.33-0.66: yellow-white, 0.66-1: pink-white
    vec3 white = vec3(1.0);
    vec3 tint;
    if (shift < 0.33) {
      // blue-white
      tint = vec3(0.8, 0.87, 1.0);
    } else if (shift < 0.66) {
      // yellow-white
      tint = vec3(1.0, 0.97, 0.8);
    } else {
      // pink-white
      tint = vec3(1.0, 0.85, 0.95);
    }
    // Blend white and tint, more tint at the edge, but always subtle
    float tintAmount = 0.08 + 0.12 * t; // 8% at center, up to 20% at edge
    return mix(white, tint, tintAmount);
  }
`;

init();

animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create stars
  for (let i = 0; i < STAR_COUNT; i++) {
    // Use a small plane for each star
    const geometry = new THREE.PlaneGeometry(2.2, 2.2); // Smaller, flat
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        glowStrength: { value: 2.2 },
        colorShift: { value: Math.random() },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv - 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float glowStrength;
        uniform float colorShift;
        ${subtleWhiteTintRamp}
        void main() {
          float dist = length(vUv) * 2.0;
          float core = smoothstep(0.35, 0.18, dist); // sharper core
          float glow = exp(-dist * glowStrength) * 1.1;
          float t = clamp(dist, 0.0, 1.0);
          vec3 color = subtleWhiteTint(t, colorShift);
          // Blend core and glow more smoothly
          float blend = smoothstep(0.0, 0.7, 1.0 - dist);
          vec3 finalColor = mix(color * glow, color, blend);
          float alpha = max(core, glow * 0.7);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `
    });
    const star = new THREE.Mesh(geometry, material);
    // Start at center
    star.position.set(0, 0, 0);
    scene.add(star);
    stars.push(star);
    // Give each star a random velocity vector
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = 1 + Math.random() * 2;
    velocities.push(new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.sin(phi) * Math.sin(theta) * speed,
      Math.cos(phi) * speed
    ));
  }

  // Find the fastest star moving toward the camera (high z, low x/y)
  const minZ = 0.5; // Require a minimum z velocity
  let bestIndex = -1;
  let bestZ = minZ;
  for (let i = 0; i < velocities.length; i++) {
    const v = velocities[i];
    if (v.z > bestZ && Math.abs(v.x) < 0.5 && Math.abs(v.y) < 0.5) {
      bestZ = v.z;
      bestIndex = i;
    }
  }
  if (bestIndex !== -1) {
    followingStarIndex = bestIndex;
  } else {
    // fallback: pick any star with v.z > 0
    for (let i = 0; i < velocities.length; i++) {
      if (velocities[i].z > 0) {
        followingStarIndex = i;
        break;
      }
    }
    if (followingStarIndex === null) {
      followingStarIndex = 0; // fallback to first star
    }
  }
  followingStar = stars[followingStarIndex];

  followStartTime = performance.now();

  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  // Animate stars outward
  for (let i = 0; i < stars.length; i++) {
    stars[i].position.add(velocities[i]);
  }

  // Camera logic
  if (isFollowing && followingStar && followingStarIndex !== null && followStartTime !== null) {
    let elapsed = Math.min(performance.now() - followStartTime, zoomDuration);
    let t = elapsed / zoomDuration;
    let minOffset = finalOffset;
    let minLerp = 0.002;
    let maxLerp = 0.25; // Much faster approach
    let xyLerp = minLerp + (maxLerp - minLerp) * t;
    xyLerp = Math.min(xyLerp, 0.08); // Clamp to prevent abrupt snap
    camera.position.x += (followingStar.position.x - camera.position.x) * xyLerp;
    camera.position.y += (followingStar.position.y - camera.position.y) * xyLerp;
    let lerp = xyLerp;
    let cameraZ = camera.position.z;
    let starZ = followingStar.position.z;
    let starVZ = velocities[followingStarIndex].z;
    let epsilon = 0.01;
    let targetZ = starZ + minOffset;
    // Estimate frames to reach within epsilon of the offset
    let n = Math.log(epsilon / Math.abs(targetZ - cameraZ)) / Math.log(1 - lerp);
    if (!isFinite(n) || n < 0) n = 0; // fallback for edge cases
    const maxPredictionFrames = 15; // Much shorter prediction horizon
    n = Math.min(n, maxPredictionFrames);
    let predictedStarZ = starZ + starVZ * n;
    let predictiveTargetZ = predictedStarZ + minOffset;
    camera.position.z += (predictiveTargetZ - camera.position.z) * lerp;
    camera.lookAt(followingStar.position);
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

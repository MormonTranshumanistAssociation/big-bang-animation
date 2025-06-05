import * as THREE from 'three';

// Remove React-specific code, use this file as the animation entry point

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let starMeshes: THREE.Mesh[] = [], starVelocities: THREE.Vector3[] = [];
const TOTAL_STAR_COUNT = 5000;

let starToFollow: THREE.Mesh | null = null;
let starToFollowIndex: number | null = null;
let shouldFollowStar = true;
let cameraZoomDurationMs = 1200; // Duration for camera to zoom in (ms)
let cameraFinalOffsetZ = 10; // Zoom in as close as possible
let cameraFollowStartTime: number | null = null;
let animationStartTime: number | null = null;
let initialLookTarget: THREE.Vector3 | null = null;

// Delay before starting camera zoom (ms)
const CAMERA_ZOOM_DELAY_MS = 2000;

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

// --- PLANET & MOON SYSTEM ---
let planetMesh: THREE.Mesh, moonMesh: THREE.Mesh;
let planetDistanceFromStar = 4.5; // much closer to the star, inside the blast radius
let moonDistanceFromPlanet = 4.5; // closer to the planet
let moonOrbitSpeed = 0.08; // radians per second, very slow
let moonOrbitAngle = 0;
let starLight: THREE.PointLight;
let ambientLight: THREE.AmbientLight;
let fillLight: THREE.DirectionalLight;

// Explosion speed controls
const STAR_SPEED_MIN = 0.2;
const STAR_SPEED_MAX = 0.4;

// Easing functions for even slower ease-in
function easeInCubic(t: number): number {
  return t * t * t;
}
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function customEase(t: number): number {
  // Slow ease-in, then ease out
  if (t < 0.6) {
    // Even slower start
    return 0.5 * easeInCubic(t / 0.6);
  } else {
    // Normal ease out
    return 0.5 + 0.5 * easeOutCubic((t - 0.6) / 0.4);
  }
}

function createPlanetarySystem() {
  // Earth-like planet
  const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const planetMaterial = new THREE.MeshPhongMaterial({
    color: 0x3a6ea5, // blue-ish
    specular: 0x222222,
    shininess: 30,
    flatShading: false
  });
  planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
  scene.add(planetMesh);

  // Moon
  const moonGeometry = new THREE.SphereGeometry(0.13, 24, 24);
  const moonMaterial = new THREE.MeshPhongMaterial({
    color: 0xbababa,
    specular: 0x111111,
    shininess: 10
  });
  moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
  scene.add(moonMesh);

  // Light source at the star
  starLight = new THREE.PointLight(0xffffff, 10, 0, 2.2); // even brighter
  scene.add(starLight);

  // Ambient light for soft fill
  ambientLight = new THREE.AmbientLight(0xffffff, 0.22);
  scene.add(ambientLight);

  // Directional fill light from above and side
  fillLight = new THREE.DirectionalLight(0xffffff, 0.55);
  fillLight.position.set(20, 30, 40);
  scene.add(fillLight);
}

init();

animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 2000); // extremely narrow FOV for maximum planet size
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create stars
  for (let i = 0; i < TOTAL_STAR_COUNT; i++) {
    // Use a small plane for each star
    const starGeometry = new THREE.PlaneGeometry(2.2, 2.2); // Smaller, flat
    const starMaterial = new THREE.ShaderMaterial({
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
          float core = smoothstep(0.22, 0.10, dist); // much sharper core
          float glow = exp(-dist * (glowStrength * 1.5)) * 0.8; // tighter, less diffuse
          float t = clamp(dist, 0.0, 1.0);
          vec3 color = subtleWhiteTint(t, colorShift);
          // Blend core and glow more tightly
          float blend = smoothstep(0.0, 0.45, 1.0 - dist);
          vec3 finalColor = mix(color * glow, color, blend);
          float alpha = max(core, glow * 0.5);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `
    });
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    // Start at center
    starMesh.position.set(0, 0, 0);
    scene.add(starMesh);
    starMeshes.push(starMesh);
    // Give each star a random velocity vector (spherical coordinates)
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = STAR_SPEED_MIN + Math.random() * (STAR_SPEED_MAX - STAR_SPEED_MIN);
    starVelocities.push(new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.sin(phi) * Math.sin(theta) * speed,
      Math.cos(phi) * speed
    ));
  }

  // Find a star with moderate speed, moving toward the camera (z > 0), and not too high x/y velocity
  let candidateIndices: number[] = [];
  for (let i = 0; i < starVelocities.length; i++) {
    const v = starVelocities[i];
    if (v.z > 0.15 && Math.abs(v.x) < 0.25 && Math.abs(v.y) < 0.25) {
      candidateIndices.push(i);
    }
  }
  if (candidateIndices.length > 0) {
    // Pick a random candidate from the middle of the speed range
    candidateIndices.sort((a, b) => starVelocities[a].length() - starVelocities[b].length());
    const mid = Math.floor(candidateIndices.length / 2);
    starToFollowIndex = candidateIndices[mid];
  } else {
    // fallback: pick any star with v.z > 0
    for (let i = 0; i < starVelocities.length; i++) {
      if (starVelocities[i].z > 0) {
        starToFollowIndex = i;
        break;
      }
    }
    if (starToFollowIndex === null) {
      starToFollowIndex = 0; // fallback to first star
    }
  }
  starToFollow = starMeshes[starToFollowIndex];

  animationStartTime = performance.now();
  cameraFollowStartTime = null; // Will be set after delay

  createPlanetarySystem();

  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  // Animate stars outward
  for (let i = 0; i < starMeshes.length; i++) {
    starMeshes[i].position.add(starVelocities[i]);
  }

  // --- PLANET & MOON SYSTEM ---
  if (starToFollow && starToFollowIndex !== null) {
    // Place planet at a fixed offset from the star, along the star's velocity direction
    const starPos = starToFollow.position;
    const starVel = starVelocities[starToFollowIndex].clone().normalize();
    // Offset planet slightly to the side so the star's light isn't directly behind it
    const sideOffset = new THREE.Vector3().crossVectors(starVel, new THREE.Vector3(0, 0, 1)).normalize().multiplyScalar(3);
    const planetPos = starPos.clone().add(starVel.clone().multiplyScalar(planetDistanceFromStar)).add(sideOffset);
    planetMesh.position.copy(planetPos);

    // --- Moon orbit plane logic ---
    // The moon's orbit plane is perpendicular to the star's velocity cross the global Z axis
    // This makes the moon's orbit parallel to the planet's orbital plane
    const orbitNormal = new THREE.Vector3().crossVectors(starVel, new THREE.Vector3(0, 0, 1)).normalize();
    // Find two orthogonal vectors in the orbit plane
    let moonOrbitX = new THREE.Vector3().crossVectors(orbitNormal, starVel).normalize();
    let moonOrbitY = new THREE.Vector3().crossVectors(orbitNormal, moonOrbitX).normalize();
    // Parametric equation for the moon's position in the orbit plane
    moonOrbitAngle += moonOrbitSpeed * (1/60); // assuming ~60fps
    const moonOffset = moonOrbitX.clone().multiplyScalar(Math.cos(moonOrbitAngle) * moonDistanceFromPlanet)
      .add(moonOrbitY.clone().multiplyScalar(Math.sin(moonOrbitAngle) * moonDistanceFromPlanet));
    const moonPos = planetPos.clone().add(moonOffset);
    moonMesh.position.copy(moonPos);

    // Move the light to the star's position
    starLight.position.copy(starPos);
  }

  // --- CAMERA LOGIC: follow the planet, keep star in view ---
  // Wait for the explosion delay before starting zoom
  if (shouldFollowStar && planetMesh && starToFollow && starToFollowIndex !== null) {
    if (cameraFollowStartTime === null && animationStartTime !== null) {
      if (performance.now() - animationStartTime >= CAMERA_ZOOM_DELAY_MS) {
        cameraFollowStartTime = performance.now();
        // Store the camera's current lookAt target as the initial look target for smooth interpolation
        // Calculate the current lookAt target based on camera direction and distance to planet
        const planetPos = planetMesh.position.clone();
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir);
        // Project from camera position in its current direction to the distance of the planet
        const camToPlanet = planetPos.clone().sub(camera.position);
        const projLength = camToPlanet.dot(camDir);
        initialLookTarget = camera.position.clone().add(camDir.multiplyScalar(projLength));
      }
    }
  }
  if (shouldFollowStar && planetMesh && starToFollow && starToFollowIndex !== null && cameraFollowStartTime !== null && initialLookTarget) {
    let elapsedMs = Math.min(performance.now() - cameraFollowStartTime, cameraZoomDurationMs);
    let t = elapsedMs / cameraZoomDurationMs;
    t = customEase(t); // apply slower ease-in and smooth ease-out
    let minOffsetZ = cameraFinalOffsetZ;
    let minLerp = 0.002;
    let maxLerp = 0.25;
    let xyLerp = minLerp + (maxLerp - minLerp) * t;
    xyLerp = Math.min(xyLerp, 0.08);
    // Camera moves toward the planet, but offset so the star is still visible
    // Offset: camera looks at planet, but is positioned slightly behind the star, so both are in view
    const starPos = starToFollow.position;
    const planetPos = planetMesh.position;
    // Gradually interpolate lookAt from the initial look target to the planet
    let lookTargetLerpT = Math.min(elapsedMs / 500, 1); // lock look target within 500ms
    let lookTarget = initialLookTarget.clone().lerp(planetPos, lookTargetLerpT);
    // Camera position: between star and planet, but closer to planet
    let camTargetPos = starPos.clone().lerp(planetPos, 1.18); // 1.18 puts camera just beyond the planet
    // Smoothly interpolate camera position
    camera.position.x += (camTargetPos.x - camera.position.x) * xyLerp;
    camera.position.y += (camTargetPos.y - camera.position.y) * xyLerp;
    // Z logic: predict planet's Z like before
    let lerp = xyLerp;
    let cameraZ = camera.position.z;
    let planetZ = planetPos.z;
    let planetVelZ = starVelocities[starToFollowIndex].z; // planet moves with star
    let epsilon = 0.01;
    let targetZ = planetZ + minOffsetZ;
    let nFramesToEpsilon = Math.log(epsilon / Math.abs(targetZ - cameraZ)) / Math.log(1 - lerp);
    if (!isFinite(nFramesToEpsilon) || nFramesToEpsilon < 0) nFramesToEpsilon = 0;
    const maxPredictionFrames = 15;
    nFramesToEpsilon = Math.min(nFramesToEpsilon, maxPredictionFrames);
    let predictedPlanetZ = planetZ + planetVelZ * nFramesToEpsilon;
    let predictiveTargetZ = predictedPlanetZ + minOffsetZ;
    camera.position.z += (predictiveTargetZ - camera.position.z) * lerp;
    camera.lookAt(lookTarget);
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

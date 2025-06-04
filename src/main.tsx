import * as THREE from 'three';

// Remove React-specific code, use this file as the animation entry point

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let stars: THREE.Mesh[] = [], velocities: THREE.Vector3[] = [];
const STAR_COUNT = 5000;

let followingStar: THREE.Mesh | null = null;
let followingStarIndex: number | null = null;
let isFollowing = true;
let zoomDuration = 1200; // Much faster zoom
let initialOffset = 80;
let finalOffset = 1; // Much closer
const buffer = 3;   // Smaller buffer for closer approach
let followStartTime: number | null = null;

// Solar system
let planets: { mesh: THREE.Mesh, orbitRadius: number, orbitSpeed: number, angle: number, isEarthLike: boolean }[] = [];
let solarSystemCreated = false;
let earthLikePlanet: THREE.Mesh | null = null;
let planetFollowStartTime: number | null = null;
let isFollowingPlanet = false;

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
    const geometry = new THREE.SphereGeometry(1.5, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
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
    if (v.z > bestZ && Math.abs(v.x) < 0.2 && Math.abs(v.y) < 0.2) {
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

  // Add a PointLight at the star's position to illuminate planets
  const starLight = new THREE.PointLight(0xffffff, 2, 0);
  starLight.position.copy(followingStar.position);
  scene.add(starLight);

  followStartTime = performance.now();

  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  // Animate stars outward
  for (let i = 0; i < stars.length; i++) {
    stars[i].position.add(velocities[i]);
  }

  // Camera logic for star
  if (isFollowing && followingStar && followingStarIndex !== null && followStartTime !== null && !isFollowingPlanet) {
    let elapsed = Math.min(performance.now() - followStartTime, zoomDuration);
    let t = elapsed / zoomDuration;
    let minOffset = finalOffset;
    let offset = Math.max(initialOffset + (finalOffset - initialOffset) * t + buffer, minOffset);
    let minLerp = 0.002;
    let maxLerp = 0.15;
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
    let n = Math.log(epsilon / Math.abs(targetZ - cameraZ)) / Math.log(1 - lerp);
    if (!isFinite(n) || n < 0) n = 0;
    const maxPredictionFrames = 30;
    n = Math.min(n, maxPredictionFrames);
    let predictedStarZ = starZ + starVZ * n;
    let predictiveTargetZ = predictedStarZ + minOffset;
    camera.position.z += (predictiveTargetZ - camera.position.z) * lerp;
    camera.lookAt(followingStar.position);

    // When camera is close enough to the star, create the solar system
    if (!solarSystemCreated && Math.abs(camera.position.z - (followingStar.position.z + minOffset)) < 0.1) {
      createSolarSystem();
      solarSystemCreated = true;
      setTimeout(() => {
        isFollowingPlanet = true;
        planetFollowStartTime = performance.now();
      }, 1000); // 1s pause before zooming to planet
    }
  }

  // Animate planet orbits
  if (solarSystemCreated) {
    for (let planet of planets) {
      planet.angle += planet.orbitSpeed;
      planet.mesh.position.x = followingStar!.position.x + Math.cos(planet.angle) * planet.orbitRadius;
      planet.mesh.position.y = followingStar!.position.y + Math.sin(planet.angle) * planet.orbitRadius;
      planet.mesh.position.z = followingStar!.position.z;
    }
  }

  // Camera logic for earth-like planet
  if (isFollowingPlanet && earthLikePlanet && planetFollowStartTime !== null) {
    let planetZoomDuration = 1800; // ms
    let planetInitialOffset = 10;
    let planetFinalOffset = 1;
    let planetBuffer = 0.5;
    let elapsed = Math.min(performance.now() - planetFollowStartTime, planetZoomDuration);
    let t = elapsed / planetZoomDuration;
    let minOffset = planetFinalOffset;
    let offset = Math.max(planetInitialOffset + (planetFinalOffset - planetInitialOffset) * t + planetBuffer, minOffset);
    let minLerp = 0.002;
    let maxLerp = 0.15;
    let xyLerp = minLerp + (maxLerp - minLerp) * t;
    xyLerp = Math.min(xyLerp, 0.08);
    camera.position.x += (earthLikePlanet.position.x - camera.position.x) * xyLerp;
    camera.position.y += (earthLikePlanet.position.y - camera.position.y) * xyLerp;
    let lerp = xyLerp;
    let cameraZ = camera.position.z;
    let planetZ = earthLikePlanet.position.z;
    let planetVZ = 0; // Planets orbit in x/y only
    let epsilon = 0.01;
    let targetZ = planetZ + minOffset;
    let n = Math.log(epsilon / Math.abs(targetZ - cameraZ)) / Math.log(1 - lerp);
    if (!isFinite(n) || n < 0) n = 0;
    const maxPredictionFrames = 30;
    n = Math.min(n, maxPredictionFrames);
    let predictedPlanetZ = planetZ + planetVZ * n;
    let predictiveTargetZ = predictedPlanetZ + minOffset;
    camera.position.z += (predictiveTargetZ - camera.position.z) * lerp;
    camera.lookAt(earthLikePlanet.position);
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function createSolarSystem() {
  // Remove old planets if any
  for (let p of planets) scene.remove(p.mesh);
  planets = [];
  earthLikePlanet = null;

  const starRadius = 1.5; // matches SphereGeometry radius
  const numPlanets = Math.floor(5 + Math.random() * 4); // 5-8 planets
  let usedRadii: number[] = [];
  for (let i = 0; i < numPlanets; i++) {
    // Diameter: 1/10 to 1/100 of star
    const diameter = starRadius * (Math.random() * 0.09 + 0.01);
    const radius = diameter / 2;
    // Orbit radius: at least 3x star radius, plus spacing
    let orbitRadius = starRadius * 3 + i * starRadius * 2 + Math.random() * starRadius * 2;
    // Orbit speed: 1/100 of star's speed
    const starSpeed = velocities[followingStarIndex!].length();
    const orbitSpeed = (starSpeed / 100) * (Math.random() * 0.5 + 0.75) * (Math.random() < 0.5 ? 1 : -1); // random direction
    const angle = Math.random() * Math.PI * 2;
    const isEarthLike = i === 0 || (i === numPlanets - 1 ? false : Math.random() < 0.2);
    const geometry = new THREE.SphereGeometry(radius, 16, 16);
    const material = new THREE.MeshLambertMaterial({ color: isEarthLike ? 0x3399ff : 0xaaaaaa });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      followingStar!.position.x + Math.cos(angle) * orbitRadius,
      followingStar!.position.y + Math.sin(angle) * orbitRadius,
      followingStar!.position.z
    );
    scene.add(mesh);
    planets.push({ mesh, orbitRadius, orbitSpeed, angle, isEarthLike });
    if (isEarthLike && !earthLikePlanet) earthLikePlanet = mesh;
  }
}

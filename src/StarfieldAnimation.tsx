import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

const TOTAL_STAR_COUNT = 5000;
const CAMERA_ZOOM_DELAY_MS = 1000;

function easeInCubic(t: number): number {
	return t * t * t;
}
function easeOutCubic(t: number): number {
	return 1 - (1 - t) ** 3;
}
function customEase(t: number): number {
	if (t < 0.6) {
		return 0.5 * easeInCubic(t / 0.6);
	}
	return 0.5 + 0.5 * easeOutCubic((t - 0.6) / 0.4);
}

const subtleWhiteTintRamp = `
  vec3 subtleWhiteTint(float t, float shift) {
    vec3 white = vec3(1.0);
    vec3 tint;
    if (shift < 0.33) {
      tint = vec3(0.8, 0.87, 1.0);
    } else if (shift < 0.66) {
      tint = vec3(1.0, 0.97, 0.8);
    } else {
      tint = vec3(1.0, 0.85, 0.95);
    }
    float tintAmount = 0.08 + 0.12 * t;
    return mix(white, tint, tintAmount);
  }
`;

export default function StarfieldAnimation({
	onExportFrames,
}: { onExportFrames?: (cb: () => Promise<void>) => void }) {
	const mountRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const animationFrameIdRef = useRef<number | null>(null);

	useEffect(() => {
		let scene: THREE.Scene;
		let camera: THREE.PerspectiveCamera;
		let renderer: THREE.WebGLRenderer;
		const starMeshes: THREE.Mesh[] = [];
		const starVelocities: THREE.Vector3[] = [];
		let starToFollow: THREE.Mesh | null = null;
		let starToFollowIndex: number | null = null;
		const shouldFollowStar = true;
		const cameraZoomDurationMs = 4000;
		const cameraFinalOffsetZ = 10;
		let cameraFollowStartTime: number | null = null;
		let animationStartTime: number | null = null;
		let initialLookTarget: THREE.Vector3 | null = null;
		let planetFinalDestination: THREE.Vector3 | null = null;
		let starInitialVelocity: THREE.Vector3 | null = null;
		let landingStartCameraPos: THREE.Vector3 | null = null;
		let landingTargetPos: THREE.Vector3 | null = null;
		let landingStartLookTarget: THREE.Vector3 | null = null;
		let landingStarted = false;
		let planetMesh: THREE.Mesh<
			THREE.BufferGeometry,
			THREE.Material | THREE.Material[]
		> | null = null;
		let moonMesh: THREE.Mesh<
			THREE.BufferGeometry,
			THREE.Material | THREE.Material[]
		> | null = null;
		let starLight: THREE.PointLight | null = null;
		let ambientLight: THREE.AmbientLight | undefined = undefined;
		let fillLight: THREE.DirectionalLight | undefined = undefined;
		const planetDistanceFromStar = 4.5;
		const moonDistanceFromPlanet = 0.4;
		const moonOrbitSpeed = 0.08;
		let moonOrbitAngle = 0;
		const STAR_SPEED_MIN = 0.2;
		const STAR_SPEED_MAX = 0.4;

		function createPlanetarySystem() {
			const planetGeometry = new THREE.SphereGeometry(0.05, 32, 32);
			const planetMaterial = new THREE.MeshPhongMaterial({
				color: 0x3a6ea5,
				specular: 0x222222,
				shininess: 30,
				flatShading: false,
			});
			planetMesh = new THREE.Mesh(planetGeometry, planetMaterial) as THREE.Mesh<
				THREE.BufferGeometry,
				THREE.Material | THREE.Material[]
			>;
			scene.add(planetMesh);

			const moonGeometry = new THREE.SphereGeometry(0.013, 24, 24);
			const moonMaterial = new THREE.MeshPhongMaterial({
				color: 0xbababa,
				specular: 0x111111,
				shininess: 10,
			});
			moonMesh = new THREE.Mesh(moonGeometry, moonMaterial) as THREE.Mesh<
				THREE.BufferGeometry,
				THREE.Material | THREE.Material[]
			>;
			scene.add(moonMesh);

			starLight = new THREE.PointLight(0xffffff, 10, 0, 2.2);
			scene.add(starLight);
			ambientLight = new THREE.AmbientLight(0xffffff, 0.22);
			scene.add(ambientLight);
			fillLight = new THREE.DirectionalLight(0xffffff, 0.55);
			fillLight.position.set(20, 30, 40);
			scene.add(fillLight);
		}

		function init(width: number, height: number) {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(10, width / height, 0.1, 2000);
			camera.position.z = 400;
			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(width, height);
			rendererRef.current = renderer;
			if (mountRef.current) {
				mountRef.current.appendChild(renderer.domElement);
			}
			for (let i = 0; i < TOTAL_STAR_COUNT; i++) {
				const starGeometry = new THREE.PlaneGeometry(1.5, 1.5);
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
              float core = smoothstep(0.13, 0.07, dist);
              float glow = exp(-dist * (glowStrength * 1.7)) * 0.7;
              float t = clamp(dist, 0.0, 1.0);
              vec3 color = subtleWhiteTint(t, colorShift);
              float blend = smoothstep(0.0, 0.45, 1.0 - dist);
              vec3 finalColor = mix(color * glow, color, blend);
              float alpha = max(core, glow * 0.5);
              gl_FragColor = vec4(finalColor, alpha);
            }
          `,
				});
				const starMesh = new THREE.Mesh(starGeometry, starMaterial);
				starMesh.position.set(0, 0, 0);
				scene.add(starMesh);
				starMeshes.push(starMesh);
				const theta = Math.random() * 2 * Math.PI;
				const phi = Math.acos(2 * Math.random() - 1);
				const speed =
					STAR_SPEED_MIN + Math.random() * (STAR_SPEED_MAX - STAR_SPEED_MIN);
				starVelocities.push(
					new THREE.Vector3(
						Math.sin(phi) * Math.cos(theta) * speed,
						Math.sin(phi) * Math.sin(theta) * speed,
						Math.cos(phi) * speed,
					),
				);
			}
			const candidateIndices: number[] = [];
			for (let i = 0; i < starVelocities.length; i++) {
				const v = starVelocities[i];
				if (v.z > 0.15 && Math.abs(v.x) < 0.25 && Math.abs(v.y) < 0.25) {
					candidateIndices.push(i);
				}
			}
			if (candidateIndices.length > 0) {
				candidateIndices.sort(
					(a, b) => starVelocities[a].length() - starVelocities[b].length(),
				);
				const mid = Math.floor(candidateIndices.length / 2);
				starToFollowIndex = candidateIndices[mid];
			} else {
				for (let i = 0; i < starVelocities.length; i++) {
					if (starVelocities[i].z > 0) {
						starToFollowIndex = i;
						break;
					}
				}
				if (starToFollowIndex === null) {
					starToFollowIndex = 0;
				}
			}
			if (starToFollowIndex !== null && starMeshes[starToFollowIndex]) {
				starToFollow = starMeshes[starToFollowIndex];
				starInitialVelocity = starVelocities[starToFollowIndex]
					.clone()
					.normalize();
				const sideOffset = new THREE.Vector3()
					.crossVectors(starInitialVelocity, new THREE.Vector3(0, 0, 1))
					.normalize()
					.multiplyScalar(3);
				planetFinalDestination = starInitialVelocity
					.clone()
					.multiplyScalar(planetDistanceFromStar)
					.add(sideOffset);
			}
			animationStartTime = performance.now();
			cameraFollowStartTime = null;
			createPlanetarySystem();
		}

		function animate() {
			animationFrameIdRef.current = requestAnimationFrame(animate);
			renderFrame(performance.now());
		}

		function renderFrame(now: number) {
			for (let i = 0; i < starMeshes.length; i++) {
				starMeshes[i].position.add(starVelocities[i]);
			}
			if (
				starToFollow &&
				starToFollowIndex !== null &&
				planetMesh &&
				moonMesh &&
				starLight
			) {
				let planetT = 0;
				if (animationStartTime !== null) {
					const elapsedMs = now - animationStartTime;
					planetT = Math.min(elapsedMs / cameraZoomDurationMs, 1);
					planetT = customEase(planetT);
				}
				if (planetFinalDestination && planetMesh !== null) {
					const planetPos = new THREE.Vector3(0, 0, 0).lerp(
						planetFinalDestination,
						planetT,
					);
					const mesh = planetMesh as THREE.Mesh<
						THREE.BufferGeometry,
						THREE.Material | THREE.Material[]
					>;
					mesh.position.copy(planetPos);
				}
				if (starInitialVelocity && planetMesh !== null && moonMesh !== null) {
					const orbitNormal = new THREE.Vector3()
						.crossVectors(starInitialVelocity, new THREE.Vector3(0, 0, 1))
						.normalize();
					const moonOrbitX = new THREE.Vector3()
						.crossVectors(orbitNormal, starInitialVelocity)
						.normalize();
					const moonOrbitY = new THREE.Vector3()
						.crossVectors(orbitNormal, moonOrbitX)
						.normalize();
					moonOrbitAngle += moonOrbitSpeed * (1 / 60);
					const moonOffset = moonOrbitX
						.clone()
						.multiplyScalar(Math.cos(moonOrbitAngle) * moonDistanceFromPlanet)
						.add(
							moonOrbitY
								.clone()
								.multiplyScalar(
									Math.sin(moonOrbitAngle) * moonDistanceFromPlanet,
								),
						);
					const moonPos = (
						planetMesh as THREE.Mesh<
							THREE.BufferGeometry,
							THREE.Material | THREE.Material[]
						>
					).position
						.clone()
						.add(moonOffset);
					if (moonMesh !== null) {
						const mesh = moonMesh as THREE.Mesh<
							THREE.BufferGeometry,
							THREE.Material | THREE.Material[]
						>;
						mesh.position.copy(moonPos);
					}
				}
				if (
					starLight !== null &&
					(starLight as THREE.PointLight)?.position &&
					starToFollow &&
					"position" in starToFollow
				) {
					(starLight as THREE.PointLight).position.copy(
						(starToFollow as THREE.Mesh).position,
					);
				}
			}
			if (
				shouldFollowStar &&
				planetMesh &&
				starToFollow &&
				starToFollowIndex !== null
			) {
				if (cameraFollowStartTime === null && animationStartTime !== null) {
					if (now - animationStartTime >= CAMERA_ZOOM_DELAY_MS) {
						cameraFollowStartTime = now;
						const planetPos = (
							planetMesh as THREE.Mesh<
								THREE.BufferGeometry,
								THREE.Material | THREE.Material[]
							>
						).position.clone();
						const camDir = new THREE.Vector3();
						camera.getWorldDirection(camDir);
						const camToPlanet = planetPos.clone().sub(camera.position);
						const projLength = camToPlanet.dot(camDir);
						initialLookTarget = camera.position
							.clone()
							.add(camDir.multiplyScalar(projLength));
					}
				}
			}
			if (
				shouldFollowStar &&
				planetMesh &&
				starToFollow &&
				starToFollowIndex !== null &&
				cameraFollowStartTime !== null &&
				initialLookTarget
			) {
				const elapsedMs = Math.min(
					now - cameraFollowStartTime,
					cameraZoomDurationMs,
				);
				let t = elapsedMs / cameraZoomDurationMs;
				t = t ** 4;
				const minOffsetZ = cameraFinalOffsetZ;
				const minLerp = 0.002;
				const maxLerp = 0.25;
				let xyLerp = minLerp + (maxLerp - minLerp) * t;
				xyLerp = Math.min(xyLerp, 0.08);
				const starPos = starToFollow.position;
				const planetPos = (
					planetMesh as THREE.Mesh<
						THREE.BufferGeometry,
						THREE.Material | THREE.Material[]
					>
				).position;
				const lookTarget = initialLookTarget.clone().lerp(planetPos, xyLerp);
				const camTargetPos = starPos.clone().lerp(planetPos, 1.18);
				const landingDurationMs = 1500;
				const landingStartMs = cameraZoomDurationMs - landingDurationMs;
				if (elapsedMs >= landingStartMs) {
					let landingT = (elapsedMs - landingStartMs) / landingDurationMs;
					landingT = Math.min(Math.max(landingT, 0), 1);
					landingT = 1 - (1 - landingT) ** 10;
					const planetRadius = 0.5;
					const landingOffset = planetRadius * 0.7;
					if (!landingStarted) {
						landingStartCameraPos = camera.position.clone();
						const landingDir = planetPos
							.clone()
							.sub(camera.position)
							.normalize();
						landingTargetPos = landingDir;
						const camDir = new THREE.Vector3();
						camera.getWorldDirection(camDir);
						landingStartLookTarget = camera.position.clone().add(camDir);
						landingStarted = true;
					}
					if (landingStartCameraPos && landingTargetPos) {
						if (landingT < 1) {
							const currentLandingTarget = planetPos
								.clone()
								.sub(landingTargetPos.clone().multiplyScalar(landingOffset));
							camera.position.copy(
								landingStartCameraPos
									.clone()
									.lerp(currentLandingTarget, landingT),
							);
							if (landingStartLookTarget) {
								const easedLookTarget = landingStartLookTarget
									.clone()
									.lerp(planetPos, landingT);
								camera.lookAt(easedLookTarget);
							} else {
								camera.lookAt(planetPos);
							}
						} else {
							const currentLandingTarget = planetPos
								.clone()
								.sub(landingTargetPos.clone().multiplyScalar(landingOffset));
							camera.position.copy(currentLandingTarget);
							camera.lookAt(planetPos);
						}
					}
				} else {
					landingStarted = false;
					camera.position.x += (camTargetPos.x - camera.position.x) * xyLerp;
					camera.position.y += (camTargetPos.y - camera.position.y) * xyLerp;
					const lerp = xyLerp;
					const cameraZ = camera.position.z;
					const planetZ = planetPos.z;
					const planetVelZ = starVelocities[starToFollowIndex].z;
					const epsilon = 0.01;
					const targetZ = planetZ + minOffsetZ;
					let nFramesToEpsilon =
						Math.log(epsilon / Math.abs(targetZ - cameraZ)) /
						Math.log(1 - lerp);
					if (!Number.isFinite(nFramesToEpsilon) || nFramesToEpsilon < 0)
						nFramesToEpsilon = 0;
					const maxPredictionFrames = 15;
					nFramesToEpsilon = Math.min(nFramesToEpsilon, maxPredictionFrames);
					const predictedPlanetZ = planetZ + planetVelZ * nFramesToEpsilon;
					const predictiveTargetZ = predictedPlanetZ + minOffsetZ;
					camera.position.z += (predictiveTargetZ - camera.position.z) * lerp;
					camera.lookAt(lookTarget);
				}
			}
			renderer.render(scene, camera);
		}

		function handleResize() {
			if (!renderer || !camera || !mountRef.current) return;
			const width = mountRef.current.clientWidth;
			const height = mountRef.current.clientHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		}

		if (mountRef.current) {
			const width = mountRef.current.clientWidth;
			const height = mountRef.current.clientHeight;
			init(width, height);
			animate();
			window.addEventListener("resize", handleResize);
		}
		return () => {
			if (animationFrameIdRef.current) {
				cancelAnimationFrame(animationFrameIdRef.current);
			}
			window.removeEventListener("resize", handleResize);
			if (rendererRef.current && mountRef.current) {
				mountRef.current.removeChild(rendererRef.current.domElement);
			}
			rendererRef.current?.dispose();
		};
	}, []);

	// Memoize handleExportFrames so it is stable for parent
	const handleExportFrames = useCallback(async () => {
		// Always export at 1920x1080 (1080p)
		const width = 1920;
		const height = 1080;
		// Set up a new Three.js scene, camera, etc. (duplicate logic from init)
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(10, width / height, 0.1, 2000);
		camera.position.z = 400;
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			preserveDrawingBuffer: true,
		});
		renderer.setSize(width, height);
		// Declare all animation state for export logic
		const starMeshes: THREE.Mesh<
			THREE.BufferGeometry,
			THREE.Material | THREE.Material[]
		>[] = [];
		const starVelocities: THREE.Vector3[] = [];
		let starToFollow: THREE.Mesh<
			THREE.BufferGeometry,
			THREE.Material | THREE.Material[]
		> | null = null;
		let starToFollowIndex: number | null = null;
		const cameraZoomDurationMs = 4000;
		const cameraFinalOffsetZ = 10;
		let cameraFollowStartTime: number | null = null;
		let animationStartTime: number | null = null;
		const initialLookTarget: THREE.Vector3 | null = null;
		let planetFinalDestination: THREE.Vector3 | null = null;
		let starInitialVelocity: THREE.Vector3 | null = null;
		let landingStartCameraPos: THREE.Vector3 | null = null;
		let landingTargetPos: THREE.Vector3 | null = null;
		let landingStartLookTarget: THREE.Vector3 | null = null;
		let landingStarted = false;
		let planetMesh: THREE.Mesh<
			THREE.BufferGeometry,
			THREE.Material | THREE.Material[]
		> | null = null;
		let moonMesh: THREE.Mesh<
			THREE.BufferGeometry,
			THREE.Material | THREE.Material[]
		> | null = null;
		let starLight: THREE.PointLight | null = null;
		let ambientLight: THREE.AmbientLight | undefined = undefined;
		let fillLight: THREE.DirectionalLight | undefined = undefined;
		const planetDistanceFromStar = 4.5;
		const moonDistanceFromPlanet = 0.4;
		const moonOrbitSpeed = 0.08;
		let moonOrbitAngle = 0;
		const STAR_SPEED_MIN = 0.2;
		const STAR_SPEED_MAX = 0.4;
		// --- Setup system ---
		function createPlanetarySystem() {
			const planetGeometry = new THREE.SphereGeometry(0.05, 32, 32);
			const planetMaterial = new THREE.MeshPhongMaterial({
				color: 0x3a6ea5,
				specular: 0x222222,
				shininess: 30,
				flatShading: false,
			});
			planetMesh = new THREE.Mesh(planetGeometry, planetMaterial) as THREE.Mesh<
				THREE.BufferGeometry,
				THREE.Material | THREE.Material[]
			>;
			scene.add(planetMesh);
			const moonGeometry = new THREE.SphereGeometry(0.013, 24, 24);
			const moonMaterial = new THREE.MeshPhongMaterial({
				color: 0xbababa,
				specular: 0x111111,
				shininess: 10,
			});
			moonMesh = new THREE.Mesh(moonGeometry, moonMaterial) as THREE.Mesh<
				THREE.BufferGeometry,
				THREE.Material | THREE.Material[]
			>;
			scene.add(moonMesh);
			starLight = new THREE.PointLight(0xffffff, 10, 0, 2.2);
			scene.add(starLight);
			ambientLight = new THREE.AmbientLight(0xffffff, 0.22);
			scene.add(ambientLight);
			fillLight = new THREE.DirectionalLight(0xffffff, 0.55);
			fillLight.position.set(20, 30, 40);
			scene.add(fillLight);
		}
		// --- Create stars ---
		for (let i = 0; i < TOTAL_STAR_COUNT; i++) {
			const starGeometry = new THREE.PlaneGeometry(1.5, 1.5);
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
            float core = smoothstep(0.13, 0.07, dist);
            float glow = exp(-dist * (glowStrength * 1.7)) * 0.7;
            float t = clamp(dist, 0.0, 1.0);
            vec3 color = subtleWhiteTint(t, colorShift);
            float blend = smoothstep(0.0, 0.45, 1.0 - dist);
            vec3 finalColor = mix(color * glow, color, blend);
            float alpha = max(core, glow * 0.5);
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
			});
			const starMesh = new THREE.Mesh(starGeometry, starMaterial);
			starMesh.position.set(0, 0, 0);
			scene.add(starMesh);
			starMeshes.push(starMesh);
			const theta = Math.random() * 2 * Math.PI;
			const phi = Math.acos(2 * Math.random() - 1);
			const speed =
				STAR_SPEED_MIN + Math.random() * (STAR_SPEED_MAX - STAR_SPEED_MIN);
			starVelocities.push(
				new THREE.Vector3(
					Math.sin(phi) * Math.cos(theta) * speed,
					Math.sin(phi) * Math.sin(theta) * speed,
					Math.cos(phi) * speed,
				),
			);
		}
		// --- Find star to follow ---
		const candidateIndices: number[] = [];
		for (let i = 0; i < starVelocities.length; i++) {
			const v = starVelocities[i];
			if (v.z > 0.15 && Math.abs(v.x) < 0.25 && Math.abs(v.y) < 0.25) {
				candidateIndices.push(i);
			}
		}
		if (candidateIndices.length > 0) {
			candidateIndices.sort(
				(a, b) => starVelocities[a].length() - starVelocities[b].length(),
			);
			const mid = Math.floor(candidateIndices.length / 2);
			starToFollowIndex = candidateIndices[mid];
		} else {
			for (let i = 0; i < starVelocities.length; i++) {
				if (starVelocities[i].z > 0) {
					starToFollowIndex = i;
					break;
				}
			}
			if (starToFollowIndex === null) {
				starToFollowIndex = 0;
			}
		}
		if (starToFollowIndex !== null && starMeshes[starToFollowIndex]) {
			starToFollow = starMeshes[starToFollowIndex];
			starInitialVelocity = starVelocities[starToFollowIndex]
				.clone()
				.normalize();
			const sideOffset = new THREE.Vector3()
				.crossVectors(starInitialVelocity, new THREE.Vector3(0, 0, 1))
				.normalize()
				.multiplyScalar(3);
			planetFinalDestination = starInitialVelocity
				.clone()
				.multiplyScalar(planetDistanceFromStar)
				.add(sideOffset);
		}
		animationStartTime = 0;
		cameraFollowStartTime = null;
		createPlanetarySystem();
		// --- Frame-by-frame rendering ---
		const zip = new JSZip();
		const durationMs = cameraZoomDurationMs + 500; // a little extra for landing
		const fps = 60;
		const totalFrames = Math.ceil((durationMs / 1000) * fps);
		moonOrbitAngle = 0; // Reset moon orbit angle for export
		for (let frame = 0; frame < totalFrames; frame++) {
			const now = frame * (1000 / fps);
			// --- Animate stars outward ---
			for (let i = 0; i < starMeshes.length; i++) {
				starMeshes[i].position.add(starVelocities[i]);
			}
			// --- PLANET & MOON SYSTEM ---
			if (
				starToFollow &&
				starToFollowIndex !== null &&
				planetMesh &&
				moonMesh &&
				starLight
			) {
				let planetT = 0;
				if (animationStartTime !== null) {
					const elapsedMs = now - animationStartTime;
					planetT = Math.min(elapsedMs / cameraZoomDurationMs, 1);
					planetT = customEase(planetT);
				}
				if (planetFinalDestination && planetMesh !== null) {
					const planetPos = new THREE.Vector3(0, 0, 0).lerp(
						planetFinalDestination,
						planetT,
					);
					const mesh = planetMesh as THREE.Mesh<
						THREE.BufferGeometry,
						THREE.Material | THREE.Material[]
					>;
					mesh.position.copy(planetPos);
				}
				if (starInitialVelocity && planetMesh !== null && moonMesh !== null) {
					const orbitNormal = new THREE.Vector3()
						.crossVectors(starInitialVelocity, new THREE.Vector3(0, 0, 1))
						.normalize();
					const moonOrbitX = new THREE.Vector3()
						.crossVectors(orbitNormal, starInitialVelocity)
						.normalize();
					const moonOrbitY = new THREE.Vector3()
						.crossVectors(orbitNormal, moonOrbitX)
						.normalize();
					moonOrbitAngle += moonOrbitSpeed * (1 / 60);
					const moonOffset = moonOrbitX
						.clone()
						.multiplyScalar(Math.cos(moonOrbitAngle) * moonDistanceFromPlanet)
						.add(
							moonOrbitY
								.clone()
								.multiplyScalar(
									Math.sin(moonOrbitAngle) * moonDistanceFromPlanet,
								),
						);
					const moonPos = (
						planetMesh as THREE.Mesh<
							THREE.BufferGeometry,
							THREE.Material | THREE.Material[]
						>
					).position
						.clone()
						.add(moonOffset);
					if (moonMesh !== null) {
						const mesh = moonMesh as THREE.Mesh<
							THREE.BufferGeometry,
							THREE.Material | THREE.Material[]
						>;
						mesh.position.copy(moonPos);
					}
				}
				if (
					starLight !== null &&
					(starLight as THREE.PointLight)?.position &&
					starToFollow &&
					"position" in starToFollow
				) {
					(starLight as THREE.PointLight).position.copy(
						(starToFollow as THREE.Mesh).position,
					);
				}
			}
			// --- CAMERA LOGIC ---
			if (
				starToFollow &&
				starToFollowIndex !== null &&
				planetMesh &&
				cameraFollowStartTime !== null &&
				initialLookTarget
			) {
				const elapsedMs = Math.min(
					now - cameraFollowStartTime,
					cameraZoomDurationMs,
				);
				let t = elapsedMs / cameraZoomDurationMs;
				t = t ** 4;
				const minOffsetZ = cameraFinalOffsetZ;
				const minLerp = 0.002;
				const maxLerp = 0.25;
				let xyLerp = minLerp + (maxLerp - minLerp) * t;
				xyLerp = Math.min(xyLerp, 0.08);
				const starPos = starToFollow.position;
				const planetPos = (
					planetMesh as THREE.Mesh<
						THREE.BufferGeometry,
						THREE.Material | THREE.Material[]
					>
				).position;
				const lookTarget = initialLookTarget.clone().lerp(planetPos, xyLerp);
				const camTargetPos = starPos.clone().lerp(planetPos, 1.18);
				const landingDurationMs = 1500;
				const landingStartMs = cameraZoomDurationMs - landingDurationMs;
				if (elapsedMs >= landingStartMs) {
					let landingT = (elapsedMs - landingStartMs) / landingDurationMs;
					landingT = Math.min(Math.max(landingT, 0), 1);
					landingT = 1 - (1 - landingT) ** 10;
					const planetRadius = 0.5;
					const landingOffset = planetRadius * 0.7;
					if (!landingStarted) {
						landingStartCameraPos = camera.position.clone();
						const landingDir = planetPos
							.clone()
							.sub(camera.position)
							.normalize();
						landingTargetPos = landingDir;
						const camDir = new THREE.Vector3();
						camera.getWorldDirection(camDir);
						landingStartLookTarget = camera.position.clone().add(camDir);
						landingStarted = true;
					}
					if (landingStartCameraPos && landingTargetPos) {
						if (landingT < 1) {
							const currentLandingTarget = planetPos
								.clone()
								.sub(landingTargetPos.clone().multiplyScalar(landingOffset));
							camera.position.copy(
								landingStartCameraPos
									.clone()
									.lerp(currentLandingTarget, landingT),
							);
							if (landingStartLookTarget) {
								const easedLookTarget = landingStartLookTarget
									.clone()
									.lerp(planetPos, landingT);
								camera.lookAt(easedLookTarget);
							} else {
								camera.lookAt(planetPos);
							}
						} else {
							const currentLandingTarget = planetPos
								.clone()
								.sub(landingTargetPos.clone().multiplyScalar(landingOffset));
							camera.position.copy(currentLandingTarget);
							camera.lookAt(planetPos);
						}
					}
				}
				landingStarted = false;
				camera.position.x += (camTargetPos.x - camera.position.x) * xyLerp;
				camera.position.y += (camTargetPos.y - camera.position.y) * xyLerp;
				const lerp = xyLerp;
				const cameraZ = camera.position.z;
				const planetZ = planetPos.z;
				const planetVelZ = starVelocities[starToFollowIndex].z;
				const epsilon = 0.01;
				const targetZ = planetZ + minOffsetZ;
				let nFramesToEpsilon =
					Math.log(epsilon / Math.abs(targetZ - cameraZ)) / Math.log(1 - lerp);
				if (!Number.isFinite(nFramesToEpsilon) || nFramesToEpsilon < 0)
					nFramesToEpsilon = 0;
				const maxPredictionFrames = 15;
				nFramesToEpsilon = Math.min(nFramesToEpsilon, maxPredictionFrames);
				const predictedPlanetZ = planetZ + planetVelZ * nFramesToEpsilon;
				const predictiveTargetZ = predictedPlanetZ + minOffsetZ;
				camera.position.z += (predictiveTargetZ - camera.position.z) * lerp;
				camera.lookAt(lookTarget);
			}
			renderer.render(scene, camera);
			// --- Save frame as PNG ---
			const dataUrl = renderer.domElement.toDataURL("image/png");
			// Convert dataURL to Blob
			const res = await fetch(dataUrl);
			const blob = await res.blob();
			zip.file(`frame_${String(frame + 1).padStart(4, "0")}.png`, blob);
		}
		const zipBlob = await zip.generateAsync({ type: "blob" });
		saveAs(zipBlob, "starfield_frames.zip");
	}, []);

	useEffect(() => {
		if (onExportFrames) {
			onExportFrames(handleExportFrames);
		}
		// Only update when the callback changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [onExportFrames, handleExportFrames]);

	return (
		<div
			ref={mountRef}
			style={{ width: "100%", height: "100%", minHeight: 400 }}
		/>
	);
}

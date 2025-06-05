// Abstraction for starfield animation logic, shared by both the web component and export routine
import * as THREE from "three";

export interface StarfieldCoreOptions {
	width: number;
	height: number;
	renderer: THREE.WebGLRenderer;
	scene?: THREE.Scene;
	camera?: THREE.PerspectiveCamera;
	onFrame?: (frame: number, now: number) => void;
	forExport?: boolean;
}

export class StarfieldCore {
	public scene: THREE.Scene;
	public camera: THREE.PerspectiveCamera;
	public renderer: THREE.WebGLRenderer;
	public starMeshes: THREE.Mesh[] = [];
	public starVelocities: THREE.Vector3[] = [];
	public starToFollow: THREE.Mesh | null = null;
	public starToFollowIndex: number | null = null;
	public planetMesh: THREE.Mesh | null = null;
	public moonMesh: THREE.Mesh | null = null;
	public starLight: THREE.PointLight | null = null;
	public ambientLight: THREE.AmbientLight | undefined = undefined;
	public fillLight: THREE.DirectionalLight | undefined = undefined;
	public planetFinalDestination: THREE.Vector3 | null = null;
	public starInitialVelocity: THREE.Vector3 | null = null;
	public moonOrbitAngle = 0;
	public animationStartTime: number | null = null;
	public cameraFollowStartTime: number | null = null;
	public initialLookTarget: THREE.Vector3 | null = null;
	public landingStartCameraPos: THREE.Vector3 | null = null;
	public landingTargetPos: THREE.Vector3 | null = null;
	public landingStartLookTarget: THREE.Vector3 | null = null;
	public landingStarted = false;
	public readonly TOTAL_STAR_COUNT = 5000;
	public readonly CAMERA_ZOOM_DELAY_MS = 1000;
	public readonly cameraZoomDurationMs = 4000;
	public readonly cameraFinalOffsetZ = 10;
	public readonly planetDistanceFromStar = 4.5;
	public readonly moonDistanceFromPlanet = 0.4;
	public readonly moonOrbitSpeed = 0.08;
	public readonly STAR_SPEED_MIN = 0.2;
	public readonly STAR_SPEED_MAX = 0.4;
	public readonly subtleWhiteTintRamp: string;
	public readonly customEase: (t: number) => number;
	public readonly easeInCubic: (t: number) => number;
	public readonly easeOutCubic: (t: number) => number;
	public shouldFollowStar = true;
	public forExport = false;
	public onFrame?: (frame: number, now: number) => void;

	constructor(options: StarfieldCoreOptions) {
		this.scene = options.scene || new THREE.Scene();
		this.camera =
			options.camera ||
			new THREE.PerspectiveCamera(
				10,
				options.width / options.height,
				0.1,
				2000,
			);
		this.camera.position.z = 400;
		this.renderer = options.renderer;
		this.renderer.setSize(options.width, options.height);
		this.forExport = !!options.forExport;
		this.onFrame = options.onFrame;
		this.subtleWhiteTintRamp = `
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
		this.easeInCubic = (t: number) => t * t * t;
		this.easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
		this.customEase = (t: number) => {
			if (t < 0.6) {
				return 0.5 * this.easeInCubic(t / 0.6);
			}
			return 0.5 + 0.5 * this.easeOutCubic((t - 0.6) / 0.4);
		};
		this.init();
	}

	private createPlanetarySystem() {
		const planetGeometry = new THREE.SphereGeometry(0.05, 32, 32);
		const planetMaterial = new THREE.MeshPhongMaterial({
			color: 0x3a6ea5,
			specular: 0x222222,
			shininess: 30,
			flatShading: false,
		});
		this.planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
		this.scene.add(this.planetMesh);
		const moonGeometry = new THREE.SphereGeometry(0.013, 24, 24);
		const moonMaterial = new THREE.MeshPhongMaterial({
			color: 0xbababa,
			specular: 0x111111,
			shininess: 10,
		});
		this.moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
		this.scene.add(this.moonMesh);
		this.starLight = new THREE.PointLight(0xffffff, 10, 0, 2.2);
		this.scene.add(this.starLight);
		this.ambientLight = new THREE.AmbientLight(0xffffff, 0.22);
		this.scene.add(this.ambientLight);
		this.fillLight = new THREE.DirectionalLight(0xffffff, 0.55);
		this.fillLight.position.set(20, 30, 40);
		this.scene.add(this.fillLight);
	}

	private init() {
		// Create stars
		for (let i = 0; i < this.TOTAL_STAR_COUNT; i++) {
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
          ${this.subtleWhiteTintRamp}
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
			this.scene.add(starMesh);
			this.starMeshes.push(starMesh);
			const theta = Math.random() * 2 * Math.PI;
			const phi = Math.acos(2 * Math.random() - 1);
			const speed =
				this.STAR_SPEED_MIN +
				Math.random() * (this.STAR_SPEED_MAX - this.STAR_SPEED_MIN);
			this.starVelocities.push(
				new THREE.Vector3(
					Math.sin(phi) * Math.cos(theta) * speed,
					Math.sin(phi) * Math.sin(theta) * speed,
					Math.cos(phi) * speed,
				),
			);
		}
		// Find star to follow
		const candidateIndices: number[] = [];
		for (let i = 0; i < this.starVelocities.length; i++) {
			const v = this.starVelocities[i];
			if (v.z > 0.15 && Math.abs(v.x) < 0.25 && Math.abs(v.y) < 0.25) {
				candidateIndices.push(i);
			}
		}
		if (candidateIndices.length > 0) {
			candidateIndices.sort(
				(a, b) =>
					this.starVelocities[a].length() - this.starVelocities[b].length(),
			);
			const mid = Math.floor(candidateIndices.length / 2);
			this.starToFollowIndex = candidateIndices[mid];
		} else {
			for (let i = 0; i < this.starVelocities.length; i++) {
				if (this.starVelocities[i].z > 0) {
					this.starToFollowIndex = i;
					break;
				}
			}
			if (this.starToFollowIndex === null) {
				this.starToFollowIndex = 0;
			}
		}
		if (
			this.starToFollowIndex !== null &&
			this.starMeshes[this.starToFollowIndex]
		) {
			this.starToFollow = this.starMeshes[this.starToFollowIndex];
			this.starInitialVelocity = this.starVelocities[this.starToFollowIndex]
				.clone()
				.normalize();
			const sideOffset = new THREE.Vector3()
				.crossVectors(this.starInitialVelocity, new THREE.Vector3(0, 0, 1))
				.normalize()
				.multiplyScalar(3);
			this.planetFinalDestination = this.starInitialVelocity
				.clone()
				.multiplyScalar(this.planetDistanceFromStar)
				.add(sideOffset);
		}
		this.animationStartTime = this.forExport ? 0 : performance.now();
		this.cameraFollowStartTime = null;
		this.createPlanetarySystem();
	}

	public stepFrame(now: number) {
		// --- Animate stars outward ---
		for (let i = 0; i < this.starMeshes.length; i++) {
			this.starMeshes[i].position.add(this.starVelocities[i]);
		}
		// --- PLANET & MOON SYSTEM ---
		if (
			this.starToFollow &&
			this.starToFollowIndex !== null &&
			this.planetMesh &&
			this.moonMesh &&
			this.starLight
		) {
			let planetT = 0;
			if (this.animationStartTime !== null) {
				const elapsedMs = now - this.animationStartTime;
				planetT = Math.min(elapsedMs / this.cameraZoomDurationMs, 1);
				planetT = this.customEase(planetT);
			}
			if (this.planetFinalDestination && this.planetMesh !== null) {
				const planetPos = new THREE.Vector3(0, 0, 0).lerp(
					this.planetFinalDestination,
					planetT,
				);
				(
					this.planetMesh as THREE.Mesh<
						THREE.BufferGeometry,
						THREE.Material | THREE.Material[]
					>
				).position.copy(planetPos);
			}
			if (
				this.starInitialVelocity &&
				this.planetMesh !== null &&
				this.moonMesh !== null
			) {
				const orbitNormal = new THREE.Vector3()
					.crossVectors(this.starInitialVelocity, new THREE.Vector3(0, 0, 1))
					.normalize();
				const moonOrbitX = new THREE.Vector3()
					.crossVectors(orbitNormal, this.starInitialVelocity)
					.normalize();
				const moonOrbitY = new THREE.Vector3()
					.crossVectors(orbitNormal, moonOrbitX)
					.normalize();
				this.moonOrbitAngle += this.moonOrbitSpeed * (1 / 60);
				const moonOffset = moonOrbitX
					.clone()
					.multiplyScalar(
						Math.cos(this.moonOrbitAngle) * this.moonDistanceFromPlanet,
					)
					.add(
						moonOrbitY
							.clone()
							.multiplyScalar(
								Math.sin(this.moonOrbitAngle) * this.moonDistanceFromPlanet,
							),
					);
				const moonPos = (
					this.planetMesh as THREE.Mesh<
						THREE.BufferGeometry,
						THREE.Material | THREE.Material[]
					>
				).position
					.clone()
					.add(moonOffset);
				if (this.moonMesh !== null) {
					(
						this.moonMesh as THREE.Mesh<
							THREE.BufferGeometry,
							THREE.Material | THREE.Material[]
						>
					).position.copy(moonPos);
				}
			}
			if (
				this.starLight !== null &&
				(this.starLight as THREE.PointLight)?.position &&
				this.starToFollow &&
				"position" in this.starToFollow
			) {
				(this.starLight as THREE.PointLight).position.copy(
					(this.starToFollow as THREE.Mesh).position,
				);
			}
		}
		// --- CAMERA LOGIC ---
		if (
			this.shouldFollowStar &&
			this.planetMesh &&
			this.starToFollow &&
			this.starToFollowIndex !== null
		) {
			if (
				this.cameraFollowStartTime === null &&
				this.animationStartTime !== null
			) {
				if (now - this.animationStartTime >= this.CAMERA_ZOOM_DELAY_MS) {
					this.cameraFollowStartTime = now;
					const planetPos = (
						this.planetMesh as THREE.Mesh<
							THREE.BufferGeometry,
							THREE.Material | THREE.Material[]
						>
					).position.clone();
					const camDir = new THREE.Vector3();
					this.camera.getWorldDirection(camDir);
					const camToPlanet = planetPos.clone().sub(this.camera.position);
					const projLength = camToPlanet.dot(camDir);
					this.initialLookTarget = this.camera.position
						.clone()
						.add(camDir.multiplyScalar(projLength));
				}
			}
		}
		if (
			this.shouldFollowStar &&
			this.planetMesh &&
			this.starToFollow &&
			this.starToFollowIndex !== null &&
			this.cameraFollowStartTime !== null &&
			this.initialLookTarget
		) {
			const elapsedMs = Math.min(
				now - this.cameraFollowStartTime,
				this.cameraZoomDurationMs,
			);
			let t = elapsedMs / this.cameraZoomDurationMs;
			t = t ** 4;
			const minOffsetZ = this.cameraFinalOffsetZ;
			const minLerp = 0.002;
			const maxLerp = 0.25;
			let xyLerp = minLerp + (maxLerp - minLerp) * t;
			xyLerp = Math.min(xyLerp, 0.08);
			const starPos = this.starToFollow.position;
			const planetPos = (
				this.planetMesh as THREE.Mesh<
					THREE.BufferGeometry,
					THREE.Material | THREE.Material[]
				>
			).position;
			const lookTarget = this.initialLookTarget.clone().lerp(planetPos, xyLerp);
			const camTargetPos = starPos.clone().lerp(planetPos, 1.18);
			const landingDurationMs = 1500;
			const landingStartMs = this.cameraZoomDurationMs - landingDurationMs;
			if (elapsedMs >= landingStartMs) {
				let landingT = (elapsedMs - landingStartMs) / landingDurationMs;
				landingT = Math.min(Math.max(landingT, 0), 1);
				landingT = 1 - (1 - landingT) ** 10;
				const planetRadius = 0.5;
				const landingOffset = planetRadius * 0.7;
				if (!this.landingStarted) {
					this.landingStartCameraPos = this.camera.position.clone();
					const landingDir = planetPos
						.clone()
						.sub(this.camera.position)
						.normalize();
					this.landingTargetPos = landingDir;
					const camDir = new THREE.Vector3();
					this.camera.getWorldDirection(camDir);
					this.landingStartLookTarget = this.camera.position
						.clone()
						.add(camDir);
					this.landingStarted = true;
				}
				if (this.landingStartCameraPos && this.landingTargetPos) {
					if (landingT < 1) {
						const currentLandingTarget = planetPos
							.clone()
							.sub(this.landingTargetPos.clone().multiplyScalar(landingOffset));
						this.camera.position.copy(
							this.landingStartCameraPos
								.clone()
								.lerp(currentLandingTarget, landingT),
						);
						if (this.landingStartLookTarget) {
							const easedLookTarget = this.landingStartLookTarget
								.clone()
								.lerp(planetPos, landingT);
							this.camera.lookAt(easedLookTarget);
						} else {
							this.camera.lookAt(planetPos);
						}
					} else {
						const currentLandingTarget = planetPos
							.clone()
							.sub(this.landingTargetPos.clone().multiplyScalar(landingOffset));
						this.camera.position.copy(currentLandingTarget);
						this.camera.lookAt(planetPos);
					}
				}
			} else {
				this.landingStarted = false;
				this.camera.position.x +=
					(camTargetPos.x - this.camera.position.x) * xyLerp;
				this.camera.position.y +=
					(camTargetPos.y - this.camera.position.y) * xyLerp;
				const lerp = xyLerp;
				const cameraZ = this.camera.position.z;
				const planetZ = planetPos.z;
				const planetVelZ = this.starVelocities[this.starToFollowIndex].z;
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
				this.camera.position.z +=
					(predictiveTargetZ - this.camera.position.z) * lerp;
				this.camera.lookAt(lookTarget);
			}
		}
		this.renderer.render(this.scene, this.camera);
	}
}

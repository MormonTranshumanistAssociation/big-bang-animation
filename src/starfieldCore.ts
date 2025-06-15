// Abstraction for starfield animation logic, shared by both the web component and export routine
import * as THREE from "three";

type GalaxyType =
	| "spiral"
	| "elliptical"
	| "seyfert"
	| "lenticular"
	| "irregular";
interface GalaxyParams {
	type: GalaxyType;
	size: number;
	spread: number;
	orientation: number;
	armCount?: number; // for spiral
	armTwist?: number; // for spiral
	bulge?: number; // for spiral
	axisRatio?: number; // for elliptical, lenticular
	fuzziness?: number; // for elliptical, seyfert
	coreStrength?: number; // for seyfert
	irregularSeed?: number; // for irregular
	colorShift: number;
	galaxyColor: [number, number, number];
	material: THREE.ShaderMaterial;
}

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
	public readonly TOTAL_STAR_COUNT = 10000;
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
	public shouldFollowStar = false;
	public forExport = false;
	public onFrame?: (frame: number, now: number) => void;
	public galaxyParams: (GalaxyParams | null)[] = [];
	private spiralGalaxyShader: { vertexShader: string; fragmentShader: string };
	private ellipticalGalaxyShader: {
		vertexShader: string;
		fragmentShader: string;
	};
	private seyfertGalaxyShader: { vertexShader: string; fragmentShader: string };
	private lenticularGalaxyShader: {
		vertexShader: string;
		fragmentShader: string;
	};
	private irregularGalaxyShader: {
		vertexShader: string;
		fragmentShader: string;
	};

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
		this.spiralGalaxyShader = {
			vertexShader: `
				varying vec2 vUv;
				void main() {
					vUv = uv - 0.5;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,
			fragmentShader: `
				varying vec2 vUv;
				uniform float size;
				uniform float spread;
				uniform float orientation;
				uniform float armCount;
				uniform float armTwist;
				uniform float bulge;
				uniform float colorShift;
				uniform vec3 galaxyColor;
				${this.subtleWhiteTintRamp}
				void main() {
					float s = sin(orientation);
					float c = cos(orientation);
					vec2 uvRot = vec2(c * vUv.x - s * vUv.y, s * vUv.x + c * vUv.y);
					float angle = atan(uvRot.y, uvRot.x);
					float radius = length(uvRot) * 4.0 / size;
					float arms = pow(abs(sin(angle * armCount + radius * armTwist)), 1.5);
					float spiral = exp(-radius * spread) * (0.7 + 0.5 * arms);
					float core = smoothstep(0.18, 0.05, radius);
					float bulgeGlow = exp(-radius * bulge);
					float t = clamp(radius, 0.0, 1.0);
					vec3 rampColor = subtleWhiteTint(t, colorShift);
					vec3 color = mix(galaxyColor, rampColor, 0.5);
					float alpha = max(core, max(bulgeGlow * 0.7, spiral * 0.8));
					float fade = pow(smoothstep(0.7, 0.3, radius), 1.5);
					float mask = 1.0 - smoothstep(0.35, 0.5, length(vUv));
					alpha *= fade * mask;
					gl_FragColor = vec4(color, alpha * 0.9);
				}
			`,
		};
		this.ellipticalGalaxyShader = {
			vertexShader: this.spiralGalaxyShader.vertexShader,
			fragmentShader: `
				varying vec2 vUv;
				uniform float size;
				uniform float axisRatio;
				uniform float orientation;
				uniform float fuzziness;
				uniform float colorShift;
				uniform vec3 galaxyColor;
				${this.subtleWhiteTintRamp}
				void main() {
					float s = sin(orientation);
					float c = cos(orientation);
					vec2 uvRot = vec2(c * vUv.x - s * vUv.y, s * vUv.x + c * vUv.y);
					float ellipse = length(vec2(uvRot.x / axisRatio, uvRot.y)) * 4.0 / size;
					float core = smoothstep(0.18, 0.05, ellipse);
					float halo = exp(-ellipse * fuzziness);
					float t = clamp(ellipse, 0.0, 1.0);
					vec3 rampColor = subtleWhiteTint(t, colorShift);
					vec3 color = mix(galaxyColor, rampColor, 0.5);
					float alpha = max(core, halo * 0.7);
					float fade = pow(smoothstep(0.7, 0.3, ellipse), 1.5);
					float mask = 1.0 - smoothstep(0.35, 0.5, length(vUv));
					alpha *= fade * mask;
					gl_FragColor = vec4(color, alpha * 0.9);
				}
			`,
		};
		this.seyfertGalaxyShader = {
			vertexShader: this.ellipticalGalaxyShader.vertexShader,
			fragmentShader: `
				varying vec2 vUv;
				uniform float size;
				uniform float axisRatio;
				uniform float orientation;
				uniform float coreStrength;
				uniform float fuzziness;
				uniform float colorShift;
				uniform vec3 galaxyColor;
				${this.subtleWhiteTintRamp}
				void main() {
					float s = sin(orientation);
					float c = cos(orientation);
					vec2 uvRot = vec2(c * vUv.x - s * vUv.y, s * vUv.x + c * vUv.y);
					float ellipse = length(vec2(uvRot.x / axisRatio, uvRot.y)) * 4.0 / size;
					float core = exp(-ellipse * coreStrength);
					float disk = exp(-ellipse * fuzziness);
					float t = clamp(ellipse, 0.0, 1.0);
					vec3 rampColor = subtleWhiteTint(t, colorShift);
					vec3 color = mix(galaxyColor, rampColor, 0.5);
					float alpha = max(core, disk * 0.5);
					float fade = pow(smoothstep(0.7, 0.3, ellipse), 1.5);
					float mask = 1.0 - smoothstep(0.35, 0.5, length(vUv));
					alpha *= fade * mask;
					gl_FragColor = vec4(color, alpha * 0.9);
				}
			`,
		};
		this.lenticularGalaxyShader = {
			vertexShader: this.ellipticalGalaxyShader.vertexShader,
			fragmentShader: `
				varying vec2 vUv;
				uniform float size;
				uniform float axisRatio;
				uniform float orientation;
				uniform float colorShift;
				uniform vec3 galaxyColor;
				${this.subtleWhiteTintRamp}
				void main() {
					float s = sin(orientation);
					float c = cos(orientation);
					vec2 uvRot = vec2(c * vUv.x - s * vUv.y, s * vUv.x + c * vUv.y);
					float disk = length(vec2(uvRot.x / axisRatio, uvRot.y)) * 4.0 / size;
					float diskFade = exp(-disk * 3.5);
					float t = clamp(disk, 0.0, 1.0);
					vec3 rampColor = subtleWhiteTint(t, colorShift);
					vec3 color = mix(galaxyColor, rampColor, 0.5);
					float alpha = diskFade;
					float fade = pow(smoothstep(0.7, 0.3, disk), 1.5);
					float mask = 1.0 - smoothstep(0.35, 0.5, length(vUv));
					alpha *= fade * mask;
					gl_FragColor = vec4(color, alpha * 0.9);
				}
			`,
		};
		this.irregularGalaxyShader = {
			vertexShader: `
				varying vec2 vUv;
				void main() {
					vUv = uv - 0.5;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,
			fragmentShader: `
				varying vec2 vUv;
				uniform float size;
				uniform float orientation;
				uniform float irregularSeed;
				uniform float colorShift;
				uniform vec3 galaxyColor;
				${this.subtleWhiteTintRamp}
				float hash(vec2 p) {
					return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
				}
				void main() {
					float s = sin(orientation);
					float c = cos(orientation);
					vec2 uvRot = vec2(c * vUv.x - s * vUv.y, s * vUv.x + c * vUv.y);
					float r = length(uvRot) * 4.0 / size;
					float n = hash(uvRot * 7.0 + irregularSeed);
					float blob = exp(-r * (2.0 + n * 3.0)) * (0.7 + n * 0.5);
					float t = clamp(r, 0.0, 1.0);
					vec3 rampColor = subtleWhiteTint(t, colorShift);
					vec3 color = mix(galaxyColor, rampColor, 0.5);
					float alpha = blob;
					float fade = pow(smoothstep(0.7, 0.3, r), 1.5);
					float mask = 1.0 - smoothstep(0.35, 0.5, length(vUv));
					alpha *= fade * mask;
					gl_FragColor = vec4(color, alpha * 0.9);
				}
			`,
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
		const galaxyTypes: GalaxyType[] = [
			"spiral",
			"elliptical",
			"seyfert",
			"lenticular",
			"irregular",
		];
		for (let i = 0; i < this.TOTAL_STAR_COUNT; i++) {
			const starGeometry = new THREE.PlaneGeometry(1.5, 1.5);
			const theta = Math.random() * 2 * Math.PI;
			const phi = Math.acos(2 * Math.random() - 1);
			const speed =
				this.STAR_SPEED_MIN +
				Math.random() * (this.STAR_SPEED_MAX - this.STAR_SPEED_MIN);
			const velocity = new THREE.Vector3(
				Math.sin(phi) * Math.cos(theta) * speed,
				Math.sin(phi) * Math.sin(theta) * speed,
				Math.cos(phi) * speed,
			);
			this.starVelocities.push(velocity);
			// Always assign a random galaxy type
			const type: GalaxyType =
				galaxyTypes[Math.floor(Math.random() * galaxyTypes.length)];
			const size = 2.5 + Math.random() * 4.5;
			const spread = 1.0 + Math.random() * 3.0;
			const orientation = Math.random() * Math.PI * 2;
			const colorShift = Math.random();
			const galaxyColor = this.pickGalaxyColor(type);
			if (type === "spiral") {
				const armCount = 2 + Math.floor(Math.random() * 4);
				const armTwist = 2.0 + Math.random() * 6.0;
				const bulge = 1.0 + Math.random() * 2.5;
				const material = new THREE.ShaderMaterial({
					transparent: true,
					depthWrite: false,
					uniforms: {
						size: { value: size },
						spread: { value: spread },
						orientation: { value: orientation },
						armCount: { value: armCount },
						armTwist: { value: armTwist },
						bulge: { value: bulge },
						colorShift: { value: colorShift },
						galaxyColor: { value: new THREE.Color(...galaxyColor) },
					},
					vertexShader: this.spiralGalaxyShader.vertexShader,
					fragmentShader: this.spiralGalaxyShader.fragmentShader,
				});
				this.galaxyParams.push({
					type,
					size,
					spread,
					orientation,
					armCount,
					armTwist,
					bulge,
					colorShift,
					galaxyColor,
					material,
				});
				const mesh = new THREE.Mesh(starGeometry, material);
				mesh.position.set(0, 0, 0);
				this.scene.add(mesh);
				this.starMeshes.push(mesh);
			} else if (type === "elliptical") {
				const axisRatio = 0.2 + Math.random() * 0.7;
				const fuzziness = 1.5 + Math.random() * 2.5;
				const material = new THREE.ShaderMaterial({
					transparent: true,
					depthWrite: false,
					uniforms: {
						size: { value: size },
						axisRatio: { value: axisRatio },
						orientation: { value: orientation },
						fuzziness: { value: fuzziness },
						colorShift: { value: colorShift },
						galaxyColor: { value: new THREE.Color(...galaxyColor) },
					},
					vertexShader: this.ellipticalGalaxyShader.vertexShader,
					fragmentShader: this.ellipticalGalaxyShader.fragmentShader,
				});
				this.galaxyParams.push({
					type,
					size,
					spread,
					orientation,
					axisRatio,
					fuzziness,
					colorShift,
					galaxyColor,
					material,
				});
				const mesh = new THREE.Mesh(starGeometry, material);
				mesh.position.set(0, 0, 0);
				this.scene.add(mesh);
				this.starMeshes.push(mesh);
			} else if (type === "seyfert") {
				const axisRatio = 0.5 + Math.random() * 0.4;
				const coreStrength = 4.0 + Math.random() * 4.0;
				const fuzziness = 1.5 + Math.random() * 2.0;
				const material = new THREE.ShaderMaterial({
					transparent: true,
					depthWrite: false,
					uniforms: {
						size: { value: size },
						axisRatio: { value: axisRatio },
						orientation: { value: orientation },
						coreStrength: { value: coreStrength },
						fuzziness: { value: fuzziness },
						colorShift: { value: colorShift },
						galaxyColor: { value: new THREE.Color(...galaxyColor) },
					},
					vertexShader: this.seyfertGalaxyShader.vertexShader,
					fragmentShader: this.seyfertGalaxyShader.fragmentShader,
				});
				this.galaxyParams.push({
					type,
					size,
					spread,
					orientation,
					axisRatio,
					coreStrength,
					fuzziness,
					colorShift,
					galaxyColor,
					material,
				});
				const mesh = new THREE.Mesh(starGeometry, material);
				mesh.position.set(0, 0, 0);
				this.scene.add(mesh);
				this.starMeshes.push(mesh);
			} else if (type === "lenticular") {
				const axisRatio = 0.15 + Math.random() * 0.25;
				const material = new THREE.ShaderMaterial({
					transparent: true,
					depthWrite: false,
					uniforms: {
						size: { value: size },
						axisRatio: { value: axisRatio },
						orientation: { value: orientation },
						colorShift: { value: colorShift },
						galaxyColor: { value: new THREE.Color(...galaxyColor) },
					},
					vertexShader: this.lenticularGalaxyShader.vertexShader,
					fragmentShader: this.lenticularGalaxyShader.fragmentShader,
				});
				this.galaxyParams.push({
					type,
					size,
					spread,
					orientation,
					axisRatio,
					colorShift,
					galaxyColor,
					material,
				});
				const mesh = new THREE.Mesh(starGeometry, material);
				mesh.position.set(0, 0, 0);
				this.scene.add(mesh);
				this.starMeshes.push(mesh);
			} else if (type === "irregular") {
				const irregularSeed = Math.random() * 1000.0;
				const material = new THREE.ShaderMaterial({
					transparent: true,
					depthWrite: false,
					uniforms: {
						size: { value: size },
						orientation: { value: orientation },
						irregularSeed: { value: irregularSeed },
						colorShift: { value: colorShift },
						galaxyColor: { value: new THREE.Color(...galaxyColor) },
					},
					vertexShader: this.irregularGalaxyShader.vertexShader,
					fragmentShader: this.irregularGalaxyShader.fragmentShader,
				});
				this.galaxyParams.push({
					type,
					size,
					spread,
					orientation,
					irregularSeed,
					colorShift,
					galaxyColor,
					material,
				});
				const mesh = new THREE.Mesh(starGeometry, material);
				mesh.position.set(0, 0, 0);
				this.scene.add(mesh);
				this.starMeshes.push(mesh);
			}
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
		this.renderer.render(this.scene, this.camera);
	}

	private pickGalaxyColor(type: GalaxyType): [number, number, number] {
		if (type === "spiral") {
			// Blue, white, or yellowish
			const palette: [number, number, number][] = [
				[0.7, 0.8, 1.0], // blue-white
				[1.0, 0.95, 0.7], // yellow-white
				[1.0, 1.0, 1.0], // white
				[0.8, 0.9, 1.0], // pale blue
			];
			return palette[Math.floor(Math.random() * palette.length)];
		}
		if (type === "elliptical") {
			// Yellow/orange
			const palette: [number, number, number][] = [
				[1.0, 0.9, 0.7],
				[1.0, 0.85, 0.6],
				[1.0, 0.8, 0.5],
			];
			return palette[Math.floor(Math.random() * palette.length)];
		}
		if (type === "seyfert") {
			// Blue, yellow, or white
			const palette: [number, number, number][] = [
				[0.7, 0.8, 1.0],
				[1.0, 0.95, 0.7],
				[1.0, 1.0, 1.0],
			];
			return palette[Math.floor(Math.random() * palette.length)];
		}
		if (type === "lenticular") {
			// White/yellow
			const palette: [number, number, number][] = [
				[1.0, 0.95, 0.7],
				[1.0, 1.0, 1.0],
			];
			return palette[Math.floor(Math.random() * palette.length)];
		}
		// Irregular: blue, pink, or mixed
		const palette: [number, number, number][] = [
			[0.7, 0.8, 1.0], // blue
			[1.0, 0.7, 0.9], // pink
			[0.9, 1.0, 1.0], // pale blue-white
			[1.0, 0.9, 0.7], // yellowish
		];
		return palette[Math.floor(Math.random() * palette.length)];
	}
}

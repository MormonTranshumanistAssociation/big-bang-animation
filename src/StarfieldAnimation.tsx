import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { StarfieldCore } from "./starfieldCore";

export default function StarfieldAnimation({
	onExportFrames,
}: { onExportFrames?: (cb: () => Promise<void>) => void }) {
	const mountRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const animationFrameIdRef = useRef<number | null>(null);

	useEffect(() => {
		let core: StarfieldCore | null = null;
		let renderer: THREE.WebGLRenderer;
		let camera: THREE.PerspectiveCamera;
		const localMountRef = mountRef.current;

		function handleResize() {
			if (!renderer || !camera || !localMountRef) return;
			const width = localMountRef.clientWidth;
			const height = localMountRef.clientHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		}

		function renderFrame(now: number) {
			if (!core) return;
			core.stepFrame(now);
		}

		if (localMountRef) {
			const width = localMountRef.clientWidth;
			const height = localMountRef.clientHeight;
			renderer = new THREE.WebGLRenderer({ antialias: true });
			rendererRef.current = renderer;
			core = new StarfieldCore({ width, height, renderer });
			camera = core.camera;
			localMountRef.appendChild(renderer.domElement);
			function animate() {
				animationFrameIdRef.current = requestAnimationFrame(animate);
				renderFrame(performance.now());
			}
			animate();
			window.addEventListener("resize", handleResize);
		}
		return () => {
			if (animationFrameIdRef.current) {
				cancelAnimationFrame(animationFrameIdRef.current);
			}
			window.removeEventListener("resize", handleResize);
			if (rendererRef.current && localMountRef) {
				localMountRef.removeChild(rendererRef.current.domElement);
			}
			rendererRef.current?.dispose();
		};
	}, []);

	// Memoize handleExportFrames so it is stable for parent
	const handleExportFrames = useCallback(async () => {
		const width = 1920;
		const height = 1080;
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			preserveDrawingBuffer: true,
		});
		renderer.setSize(width, height);
		const core = new StarfieldCore({
			width,
			height,
			renderer,
			forExport: true,
		});
		const zip = new JSZip();
		const durationMs = core.cameraZoomDurationMs + 500;
		const fps = 60;
		const totalFrames = Math.ceil((durationMs / 1000) * fps);
		core.moonOrbitAngle = 0;
		for (let frame = 0; frame < totalFrames; frame++) {
			const now = frame * (1000 / fps);
			core.stepFrame(now);
			const dataUrl = core.renderer.domElement.toDataURL("image/png");
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
	}, [onExportFrames, handleExportFrames]);

	return (
		<div
			ref={mountRef}
			style={{ width: "100%", height: "100%", minHeight: 400 }}
		/>
	);
}

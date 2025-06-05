import { useState } from "react";
import StarfieldAnimation from "./StarfieldAnimation";

function App() {
	const [restartKey, setRestartKey] = useState(0);
	const [exportFrames, setExportFrames] = useState<
		null | (() => Promise<void>)
	>(null);
	const [exporting, setExporting] = useState(false);

	const handleSetExportFrames = (cb: () => Promise<void>) => {
		setExportFrames(() => cb);
	};

	const handleExportFrames = async () => {
		if (exportFrames) {
			setExporting(true);
			try {
				await exportFrames();
			} finally {
				setExporting(false);
			}
		}
	};

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#181a1b",
			}}
		>
			<div style={{ display: "flex", gap: 16, margin: "32px 0 24px 0" }}>
				<button
					onClick={() => setRestartKey((k) => k + 1)}
					style={{
						padding: "0.7em 2.2em",
						fontSize: "1.2em",
						fontWeight: 600,
						borderRadius: 8,
						border: "1px solid #333",
						background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
						color: "#fff",
						boxShadow: "0 2px 8px #0004",
						cursor: "pointer",
						letterSpacing: 1,
					}}
					type="button"
				>
					Restart Animation
				</button>
				<button
					onClick={handleExportFrames}
					disabled={exporting}
					style={{
						padding: "0.7em 2.2em",
						fontSize: "1.2em",
						fontWeight: 600,
						borderRadius: 8,
						border: "1px solid #333",
						background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
						color: "#fff",
						boxShadow: "0 2px 8px #0004",
						cursor: exporting ? "not-allowed" : "pointer",
						letterSpacing: 1,
						opacity: exporting ? 0.6 : 1,
					}}
					type="button"
				>
					{exporting ? (
						<span style={{ display: "flex", alignItems: "center", gap: 8 }}>
							<span
								className="spinner"
								style={{
									width: 18,
									height: 18,
									border: "3px solid #fff",
									borderTop: "3px solid #888",
									borderRadius: "50%",
									display: "inline-block",
									animation: "spin 1s linear infinite",
								}}
							/>
							Exporting...
						</span>
					) : (
						"Export Frames (ZIP)"
					)}
				</button>
			</div>
			<div
				style={{
					width: "70vw",
					maxWidth: 1100,
					aspectRatio: "16 / 9",
					background: "#111",
					borderRadius: 16,
					overflow: "hidden",
					boxShadow: "0 4px 32px #000a",
					border: "1px solid #222",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<StarfieldAnimation
					key={restartKey}
					onExportFrames={handleSetExportFrames}
				/>
			</div>
			<style>{`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`}</style>
		</div>
	);
}

export default App;

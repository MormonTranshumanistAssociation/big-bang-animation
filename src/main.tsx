// Animation logic moved to StarfieldAnimation.tsx React component.

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<App />);
} else {
	throw new Error('Root element with id "root" not found');
}

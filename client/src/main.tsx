import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initImageProtection } from "./lib/imageProtection";

// Set the document title
document.title = "Davidson Media Co";

// Initialize image protection when the app loads
document.addEventListener('DOMContentLoaded', () => {
  initImageProtection();
});

// Create React root and render App
createRoot(document.getElementById("root")!).render(<App />);

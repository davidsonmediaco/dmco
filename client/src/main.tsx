import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initImageProtection } from "./lib/imageProtection";

// Set the document title
document.title = "Davidson Media Co";

// Create custom stylesheet to block all save buttons
const createBlockingStyle = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Block 3rd party save image buttons */
    [data-pin-href], 
    [class*="pin"], 
    [class*="save"], 
    [class*="download"],
    [aria-label*="save"],
    [aria-label*="Save"],
    [aria-label*="Pin"],
    [aria-label*="pin"],
    [aria-label*="collect"],
    [aria-label*="Collect"] {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Disable any 3rd party save scripts
const disableSaveFeatures = () => {
  // Prevent Pinterest save button integration
  (window as any).pinnit = false;
  (window as any).pinit_load = false;
  (window as any).PIN_DISABLE = true;
  (window as any).PIN_DO_NOT_TRACK = true;
  (window as any).PIN_UNAUTH = true;
  (window as any).PIN_ENV = 'test';
  (window as any).PIN_BUTTON_PRESENT = false;
  
  // Remove any save buttons
  const removeButtons = () => {
    document.querySelectorAll(
      '[data-pin-href], [class*="pin-it"], [class*="save-"], [class*="download-"], [aria-label*="save"], [aria-label*="Pin"]'
    ).forEach(el => {
      el.remove();
    });
  };
  
  // Initial removal
  removeButtons();
  
  // Keep checking for newly added buttons
  setInterval(removeButtons, 200);
};

// Initialize all protections when the app loads
document.addEventListener('DOMContentLoaded', () => {
  createBlockingStyle();
  initImageProtection();
  
  // Need to wait a bit for external scripts to try to inject buttons
  setTimeout(disableSaveFeatures, 100);
});

// Create React root and render App
createRoot(document.getElementById("root")!).render(<App />);

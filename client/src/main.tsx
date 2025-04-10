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
  
  // Direct approach to find and remove save buttons
  setTimeout(() => {
    // Find all black buttons over images by using more specific selectors
    const blackButtons = document.querySelectorAll('button.image-save, div.image-save, button.save-button, [role="button"][style*="background:black"], [style*="background-color:black"][role="button"]');
    
    // Log what we found
    console.log('Found potential save buttons:', blackButtons.length);
    
    // Force remove them
    blackButtons.forEach(button => {
      console.log('Removing button:', button);
      button.remove();
    });
    
    // Check all elements with z-index greater than 10
    document.querySelectorAll('*').forEach((element) => {
      const el = element as HTMLElement;
      if (!el.tagName) return; // Skip non-elements
      
      const style = window.getComputedStyle(el);
      const zIndex = parseInt(style.zIndex);
      
      // If it's a high z-index element on top of images, it might be our save button
      if (!isNaN(zIndex) && zIndex > 10) {
        const rect = el.getBoundingClientRect();
        // If it's small like a button and visible
        if (rect.width > 0 && rect.width < 100 && rect.height > 0 && rect.height < 100 && 
            style.display !== 'none' && style.visibility !== 'hidden') {
          console.log('Found potential overlay button:', el);
          // Hide it completely
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        }
      }
      
      // Specifically check for black background elements - these could be the save buttons
      const bgColor = style.backgroundColor;
      if (bgColor === 'rgb(0, 0, 0)' || bgColor === '#000000' || bgColor === 'black') {
        // If the element is small and could be a button
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.width < 60 && rect.height > 0 && rect.height < 60) {
          console.log('Found black button element:', el);
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.remove();
        }
      }
    });
  }, 1000);
});

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById("root")!).render(<App />);

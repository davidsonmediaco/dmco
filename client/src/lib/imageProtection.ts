// JavaScript functions to prevent image downloading/saving

// Prevent right-clicking on images
export function preventImageContextMenu() {
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
}

// Prevent drag-and-drop of images
export function preventImageDragging() {
  document.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
}

// Function to remove Pinterest-like save buttons or any browser extension buttons
function removeSaveButtons() {
  // Find and remove elements that might be save buttons
  const removeButtons = () => {
    // Target common selectors used by Pinterest and other extensions
    const buttonSelectors = [
      // Pinterest save button
      '[data-pin-log]',
      '.pinterest-save-button',
      '[data-pin-href]',
      // General save buttons that might be injected
      '.save-image-button',
      '.download-button',
      '.image-save-button',
      // Any button appearing over images with common class names
      'img + button',
      '.image-container button'
    ];
    
    buttonSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        element.remove();
      });
    });
  };
  
  // Execute initially
  removeButtons();
  
  // And set up recurring check
  setInterval(removeButtons, 1000);
  
  // Also set up a mutation observer to watch for dynamically added buttons
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        removeButtons();
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Function to initialize all image protection
export function initImageProtection() {
  preventImageContextMenu();
  preventImageDragging();
  removeSaveButtons();
  
  // Add onload attribute to each image to prevent it from being opened in a new tab
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.setAttribute('draggable', 'false');
    img.classList.add('protected-image');
  });
  
  // Disable keyboard shortcuts for saving images
  document.addEventListener('keydown', (e) => {
    // Ctrl+S, Command+S
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    }
  });
}
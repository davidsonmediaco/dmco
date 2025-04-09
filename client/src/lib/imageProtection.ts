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
  // Target ALL possible Pinterest save buttons, browser extension buttons, etc.
  
  // Find and remove elements that might be save buttons
  const removeButtons = () => {
    // Comprehensive list of selectors that might be save buttons
    const buttonSelectors = [
      // Pinterest specific selectors
      '[data-pin-log]',
      '[data-pin-href]',
      '[data-pin-id]',
      '[data-pin-media]',
      '[data-pin-description]',
      '[data-pin-url]',
      '[data-pin-custom]',
      '[data-pin-do]',
      '[data-pin-nopin]',
      '.pinterest-save-button',
      '.pinterest-btn',
      '.pinterest-button',
      '.pin-it-button',
      '.pin-button',
      '.pinit-button',
      '.pinit-btn',
      '.pinit',
      
      // General save button selectors
      '.save-image-button',
      '.save-button',
      '.save-btn',
      '.save-to-collection',
      '.save-to-favorites',
      '.saveButton',
      '.saveBtn',
      '.save-image',
      
      // Download buttons
      '.download-button',
      '.download-btn',
      '.download-image-button',
      '.download-image',
      '.downloadButton',
      '.downloadBtn',
      
      // Any image-related buttons
      '.image-save-button',
      '.image-download-button',
      '.image-button',
      '.image-action-button',
      
      // Elements near images
      'img + button',
      '.image-container button',
      '.image-wrapper button',
      
      // Attribute based selectors
      '[aria-label*="save"]',
      '[aria-label*="Save"]',
      '[aria-label*="pin"]',
      '[aria-label*="Pin"]',
      '[aria-label*="download"]',
      '[aria-label*="Download"]',
      '[aria-label*="collect"]',
      '[aria-label*="Collect"]',
      '[title*="save"]',
      '[title*="Save"]',
      '[title*="pin"]',
      '[title*="Pin"]',
    ];
    
    // Remove each matched element
    buttonSelectors.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(element => {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.opacity = '0';
          element.style.pointerEvents = 'none';
          element.style.position = 'absolute';
          element.style.zIndex = '-9999';
          element.setAttribute('aria-hidden', 'true');
          element.setAttribute('tabindex', '-1');
          
          // Try to remove the element if possible
          try {
            element.remove();
          } catch (error) {
            // If we can't remove it, at least disable it
            if (element instanceof HTMLButtonElement) {
              element.disabled = true;
            }
          }
        });
      } catch (error) {
        // Ignore errors from invalid selectors
      }
    });
    
    // Also scan for elements with certain class names or styles that might be buttons
    document.querySelectorAll('*').forEach(el => {
      const classNames = el.className.toString().toLowerCase();
      const tagName = el.tagName.toLowerCase();
      
      // Only check likely candidates to avoid performance issues
      if ((tagName === 'button' || tagName === 'a' || tagName === 'div') && 
          (classNames.includes('save') || classNames.includes('pin') || 
           classNames.includes('download') || classNames.includes('collect'))) {
        el.style.display = 'none !important';
        el.style.visibility = 'hidden !important';
        el.style.opacity = '0 !important';
        el.style.pointerEvents = 'none !important';
      }
      
      // Block any click handlers on image-related elements
      if (tagName === 'img' || 
          el.classList.contains('image-container') || 
          el.classList.contains('masonry-item')) {
        // Prevent any click handlers that might open save dialogs
        el.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (target.tagName.toLowerCase() !== 'a' && 
              !target.closest('a') && 
              !target.closest('button.lightbox-control')) {
            e.stopPropagation();
          }
        }, true);
      }
    });
  };
  
  // Execute initially
  removeButtons();
  
  // And set up recurring check (run frequently)
  setInterval(removeButtons, 200);
  
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
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'aria-label', 'title']
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
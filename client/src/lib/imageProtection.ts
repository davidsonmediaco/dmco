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

// Function to initialize all image protection
export function initImageProtection() {
  preventImageContextMenu();
  preventImageDragging();
  
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
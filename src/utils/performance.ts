
/**
 * Utility functions for website performance optimization
 */

/**
 * Preloads critical resources for better performance
 */
export const preloadCriticalResources = () => {
  // Preload critical images
  const preloadImages = ['/DSC.JPG'];
  preloadImages.forEach(imagePath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imagePath;
    document.head.appendChild(link);
  });
  
  // Preload critical fonts
  const preloadFonts = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap'
  ];
  preloadFonts.forEach(fontPath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = fontPath;
    document.head.appendChild(link);
  });
};

/**
 * Defers non-critical JavaScript for better page load performance
 */
export const deferNonCriticalJS = () => {
  // Get all script tags
  const scripts = document.querySelectorAll('script[data-defer="true"]');
  
  scripts.forEach(script => {
    // Create a new script element
    const newScript = document.createElement('script');
    
    // Copy all attributes from the original script
    Array.from(script.attributes).forEach(attr => {
      if (attr.name !== 'data-defer') {
        newScript.setAttribute(attr.name, attr.value);
      }
    });
    
    // Add defer attribute
    newScript.defer = true;
    
    // Copy the content of the original script
    newScript.textContent = script.textContent;
    
    // Replace the original script with the deferred one
    script.parentNode?.replaceChild(newScript, script);
  });
};

/**
 * Initializes all performance optimizations
 */
export const initializePerformanceOptimizations = () => {
  preloadCriticalResources();
  
  // Wait for page load to defer non-critical JS
  window.addEventListener('load', () => {
    deferNonCriticalJS();
  });
};

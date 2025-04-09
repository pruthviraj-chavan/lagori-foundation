
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
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  });
  
  // Preload critical fonts but only if they're going to be used immediately
  const preloadFonts = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600&display=swap'
  ];
  preloadFonts.forEach(fontPath => {
    const link = document.createElement('link');
    link.rel = 'stylesheet'; // Changed from preload to stylesheet to address warning
    link.href = fontPath;
    document.head.appendChild(link);
  });
};

/**
 * Optimizes image loading throughout the site
 */
export const optimizeImageLoading = () => {
  // Add intersection observer to lazy load images
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          imageObserver.unobserve(image);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without intersection observer
    images.forEach(img => {
      const image = img as HTMLImageElement;
      if (image.dataset.src) {
        image.src = image.dataset.src;
      }
    });
  }
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
  
  // Wait for page load to defer non-critical JS and optimize images
  window.addEventListener('load', () => {
    deferNonCriticalJS();
    optimizeImageLoading();
  });
};

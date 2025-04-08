
import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number | string;
  height: number | string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
}

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  loading = "lazy",
  fetchpriority = "auto" 
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('/placeholder.svg');
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Create a new image object
    const img = new Image();
    img.src = src;
    
    // When the image loads, update the state
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };

    return () => {
      // Clean up
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'animate-pulse bg-gray-200' : ''}`}
      width={width}
      height={height}
      loading={loading}
      fetchpriority={fetchpriority}
      onLoad={() => setImageLoaded(true)}
    />
  );
};

export default LazyImage;

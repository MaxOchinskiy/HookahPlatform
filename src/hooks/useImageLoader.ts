import { useState, useEffect } from 'react';

export const useImageLoader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setHasError(true);
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
      console.warn(`Failed to load image: ${src}`);
    };
    
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, hasError };
}; 
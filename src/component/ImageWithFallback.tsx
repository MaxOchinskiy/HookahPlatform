import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import './ImageWithFallback.scss';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://images.unsplash.com/photo-1588806622518-9c173a1154a2?w=500&q=80', // Резервное изображение
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setCurrentSrc(fallbackSrc);
  };

  return (
    <div className={`image-fallback-container ${className}`}>
      {isLoading && <LoadingSpinner size="medium" />}
      <img
        src={currentSrc}
        alt={alt}
        className={`image-fallback-img ${isLoading ? 'loading' : 'loaded'} ${hasError ? 'error' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageWithFallback; 
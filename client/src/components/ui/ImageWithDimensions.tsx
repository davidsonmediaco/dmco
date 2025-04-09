import { useState, useEffect, useRef } from 'react';

interface ImageWithDimensionsProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithDimensions = ({ src, alt, className = '' }: ImageWithDimensionsProps) => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full overflow-hidden relative">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full transition-transform duration-500 protected-image ${className}`}
          style={{
            transform: isHovered ? 'scale(1.02)' : 'scale(1.0)',
            transition: 'transform 0.5s ease-in-out',
            objectFit: 'cover'
          }}
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      
      {isLoaded && dimensions && (
        <div className={`absolute bottom-0 right-0 bg-black/80 text-white text-xs px-2 py-1 m-2 font-mono z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {dimensions.width} × {dimensions.height}
        </div>
      )}
    </div>
  );
};

export default ImageWithDimensions;
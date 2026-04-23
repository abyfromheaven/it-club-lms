import { useRef, useEffect, useState, ReactNode } from 'react';

interface LogoItem {
  src?: string;
  alt?: string;
  id: string | number;
  component?: ReactNode;
}

interface LogoLoopProps {
  items: LogoItem[];
  direction?: 'horizontal' | 'vertical';
  speed?: number; // pixels per second
  gap?: number;
  height?: number;
  fadeOut?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const LogoLoop = ({
  items = [],
  direction = 'horizontal',
  speed = 50,
  gap = 60,
  height = 40,
  fadeOut = true,
  pauseOnHover = true,
  className = '',
}: LogoLoopProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Double items for seamless loop
  const displayItems = [...items, ...items, ...items];

  const isHorizontal = direction === 'horizontal';

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        height: isHorizontal ? `${height + 20}px` : '100%',
        width: isHorizontal ? '100%' : `${height + 20}px` 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade Out Overlays */}
      {fadeOut && (
        <>
          <div 
            className="absolute top-0 left-0 z-10 h-full w-24 pointer-events-none bg-gradient-to-r from-background to-transparent"
          />
          <div 
            className="absolute top-0 right-0 z-10 h-full w-24 pointer-events-none bg-gradient-to-l from-background to-transparent"
          />
        </>
      )}

      <div
        className={`flex ${isHorizontal ? 'flex-row items-center' : 'flex-col'} w-max animate-logo-loop`}
        style={{
          gap: `${gap}px`,
          animationDuration: `${(items.length * 150) / speed}s`,
          animationPlayState: isHovered && pauseOnHover ? 'paused' : 'running',
        }}
      >
        {displayItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="flex-shrink-0 flex items-center justify-center filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            style={{ height: `${height}px` }}
          >
            {item.component ? (
              item.component
            ) : (
              <img 
                src={item.src} 
                alt={item.alt || 'Logo'} 
                className="h-full w-auto object-contain"
              />
            )}
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes logo-loop {
          from { transform: ${isHorizontal ? 'translateX(0)' : 'translateY(0)'}; }
          to { transform: ${isHorizontal ? `translateX(-33.33%)` : `translateY(-33.33%)`}; }
        }
        .animate-logo-loop {
          animation: logo-loop linear infinite;
        }
      `}} />
    </div>
  );
};

export default LogoLoop;

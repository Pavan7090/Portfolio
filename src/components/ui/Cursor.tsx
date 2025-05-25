import { useState, useEffect } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const allLinks = document.querySelectorAll('a, button, .cursor-hover');
    allLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mouseleave', () => {
      setIsVisible(false);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      allLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      document.removeEventListener('mouseleave', () => {
        setIsVisible(false);
      });
    };
  }, [isVisible]);

  // Don't render on small screens
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'cursor-grow' : ''} ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`,
        }}
      />
      
      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 768px) {
          body {
            cursor: none !important;
          }
          
          a, button, .cursor-hover {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
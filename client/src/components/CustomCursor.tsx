import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's a mobile device
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Track mouse position
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', mouseMove);
    
    // Add event listeners for links and buttons
    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');
    
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', checkIfMobile);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: 'rgb(14, 165, 233)',
      mixBlendMode: 'difference',
      opacity: 0.7,
      height: 16,
      width: 16,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgb(14, 165, 233)',
      mixBlendMode: 'normal',
      height: 32,
      width: 32,
      scale: 2
    }
  };
  
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed w-4 h-4 rounded-full bg-primary-500 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
};

export default CustomCursor;

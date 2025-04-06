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
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
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
      backgroundColor: 'rgba(255, 215, 0, 0)', // Transparent 
      height: 24,
      width: 24,
      borderColor: '#FFD700',
      borderWidth: '1px',
      borderStyle: 'solid',
      opacity: 0.7,
      borderRadius: '50%'
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'rgba(255, 215, 0, 0.05)',
      height: 40,
      width: 40,
      borderColor: '#FFD700',
      borderWidth: '2px',
      borderStyle: 'solid',
      opacity: 1,
      borderRadius: '50%'
    }
  };
  
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      
      {/* Dot in the center */}
      <motion.div 
        className="fixed bg-[#FFD700] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: cursorVariant === 'hover' ? 6 : 6,
          height: cursorVariant === 'hover' ? 6 : 6,
          opacity: cursorVariant === 'hover' ? 1 : 0.8
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      
      {/* Outer glow */}
      <motion.div 
        className="fixed bg-gradient-to-r from-[#6A0DAD]/30 to-[#FFD700]/30 rounded-full blur-sm pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: cursorVariant === 'hover' ? 60 : 40,
          height: cursorVariant === 'hover' ? 60 : 40,
          opacity: cursorVariant === 'hover' ? 0.5 : 0.25,
          scale: cursorVariant === 'hover' ? 1.2 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;

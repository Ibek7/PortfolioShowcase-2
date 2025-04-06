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
      border: '1px solid rgba(255, 215, 0, 0.5)',
      boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)',
      opacity: 0.8,
      borderRadius: '50%'
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'rgba(255, 215, 0, 0.05)',
      height: 40,
      width: 40,
      border: '2px solid rgba(255, 215, 0, 0.8)',
      boxShadow: '0 0 15px rgba(255, 215, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.2)',
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
        className="fixed bg-gradient-to-r from-[#FFD700]/30 via-[#FFF2AC]/25 to-[#B8860B]/20 rounded-full blur-md pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          width: cursorVariant === 'hover' ? 80 : 60,
          height: cursorVariant === 'hover' ? 80 : 60,
          opacity: cursorVariant === 'hover' ? 0.6 : 0.3,
          scale: cursorVariant === 'hover' ? 1.3 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
      
      {/* Additional subtle stardust effect */}
      <motion.div 
        className="fixed rounded-full pointer-events-none z-35 overflow-hidden"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          width: 120,
          height: 120,
          opacity: 0.15,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="w-full h-full relative">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                repeatType: "loop"
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;

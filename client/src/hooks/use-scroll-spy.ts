import { useState, useEffect } from 'react';

interface ScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export const useScrollSpy = ({ sectionIds, offset = 0 }: ScrollSpyOptions): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const scrollListener = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Find the appropriate section
      let currentSection = sectionIds[0];
      
      // Check the position for each section
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Set the current section if we've scrolled past the top of this section
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // Update the state if it changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Listen for scroll events
    window.addEventListener('scroll', scrollListener);
    
    // Initialize on mount
    scrollListener();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [sectionIds, offset, activeSection]);
  
  return activeSection;
};

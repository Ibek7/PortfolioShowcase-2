import { useCallback } from 'react';

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Easing functions
const easings = {
  // Cubic bezier approximation of sine easing
  easeInOutSine: (t: number): number => -(Math.cos(Math.PI * t) - 1) / 2,
  
  // Quadratic ease out
  easeOutQuad: (t: number): number => t * (2 - t),
  
  // Cubic ease out
  easeOutCubic: (t: number): number => 1 + (--t) * t * t,
  
  // Luxury royal gold smooth animation with slight bounce
  royalEase: (t: number): number => {
    if (t < 0.5) {
      return 2 * t * t; // Ease in quadratic for first half
    } else {
      return -1 + (4 - 2 * t) * t; // Ease out quadratic for second half with slight bounce
    }
  }
};

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { 
    offset = 0, 
    duration = 1000, 
    easing = easings.royalEase 
  } = options;

  const scrollToElement = useCallback((elementId: string) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, [offset, duration, easing]);

  return scrollToElement;
};

export default useSmoothScroll;
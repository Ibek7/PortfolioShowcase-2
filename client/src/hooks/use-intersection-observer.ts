import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = '0px',
  triggerOnce = false
}: IntersectionObserverOptions = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const enteredView = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    // Skip if already triggered once
    if (triggerOnce && enteredView.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && triggerOnce) {
          enteredView.current = true;
        }
        
        setInView(isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
};

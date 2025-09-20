import { useState, useRef, useEffect } from 'react';

/**
 * SkeletonWrapper component that shows skeleton loading until the wrapped component is in view
 * @param {React.Component} SkeletonComponent - The skeleton component to show while loading
 * @param {React.Component} children - The actual component to render
 * @param {number} threshold - Intersection observer threshold (0-1)
 * @param {string} rootMargin - Root margin for intersection observer
 * @param {number} skeletonDelay - Delay in ms before showing actual content
 */
const SkeletonWrapper = ({ 
  SkeletonComponent, 
  children, 
  threshold = 0.1, 
  rootMargin = '100px',
  skeletonDelay = 800
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          // Add a delay to show skeleton briefly for better UX
          const timer = setTimeout(() => {
            setIsLoaded(true);
          }, skeletonDelay);

          return () => clearTimeout(timer);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, skeletonDelay, isLoaded]);

  return (
    <div ref={elementRef}>
      {!isLoaded ? <SkeletonComponent /> : children}
    </div>
  );
};

export default SkeletonWrapper;

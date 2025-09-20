/**
 * ScrollReveal Component
 * 
 * A component that reveals its children when they come into view.
 * Uses Intersection Observer API for smooth scroll-triggered animations.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to reveal
 * @param {number} [props.threshold=0.1] - Intersection threshold (0-1)
 * @param {number} [props.delay=0] - Animation delay in milliseconds
 * @param {string} [props.direction='up'] - Animation direction
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} ScrollReveal component
 */

import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const ScrollReveal = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  direction = 'up',
  className 
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial styles based on direction
    const directionClasses = {
      up: 'translate-y-10',
      down: '-translate-y-10',
      left: 'translate-x-10',
      right: '-translate-x-10',
    };

    const initialClasses = [
      'opacity-0',
      directionClasses[direction],
      'transition-all',
      'duration-700',
      'ease-out'
    ];

    element.classList.add(...initialClasses);

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', directionClasses[direction]);
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, delay, direction]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  className: PropTypes.string,
};

export default ScrollReveal;

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ScrollReveal = ({ children, threshold = 0.1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-10");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      element.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-700"
      );
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return <div ref={ref}>{children}</div>;
};
ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
};

export default ScrollReveal;

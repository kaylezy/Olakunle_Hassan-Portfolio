import { motion } from "framer-motion";

/**
 * ShimmerSkeleton component with animated shimmer effect
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.width - Width of the skeleton
 * @param {string} props.height - Height of the skeleton
 * @param {string} props.variant - Variant type (rect, circle, text)
 */
const ShimmerSkeleton = ({ 
  className = "", 
  width = "100%", 
  height = "1rem", 
  variant = "rect" 
}) => {
  const baseClasses = "bg-gray-700 animate-pulse relative overflow-hidden";
  
  const variantClasses = {
    rect: "rounded",
    circle: "rounded-full",
    text: "rounded h-4"
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default ShimmerSkeleton;

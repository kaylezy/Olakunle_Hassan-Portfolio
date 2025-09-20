import { motion } from "framer-motion";
import ShimmerSkeleton from "./ShimmerSkeleton";

const HeroSkeleton = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="sm:container sm:mx-16 flex flex-col sm:justify-between items-center sm:flex-row mt-20 md:mt-2 md:pt-10 w-full">
        {/* Left side skeleton */}
        <div className="w-full md:w-[50rem] text-left p-4 lg:pl-20">
          {/* Title skeleton */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <ShimmerSkeleton height="3rem" />
            <ShimmerSkeleton height="2rem" width="75%" />
            <ShimmerSkeleton height="1.5rem" />
            <ShimmerSkeleton height="1.5rem" width="83%" />
            <ShimmerSkeleton height="1.5rem" width="67%" />
          </motion.div>

          {/* Buttons skeleton */}
          <div className="flex justify-center space-x-8 mt-12">
            <ShimmerSkeleton height="3rem" width="9rem" className="sm:w-12" />
            <ShimmerSkeleton height="3rem" width="9rem" className="sm:w-12" />
          </div>
        </div>

        {/* Right side image skeleton */}
        <div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ShimmerSkeleton 
              height="16rem" 
              width="w-auto sm:w-56 md:w-96 lg:w-56 xl:w-11/12"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;

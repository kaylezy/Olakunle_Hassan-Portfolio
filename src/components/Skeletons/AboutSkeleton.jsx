import { motion } from "framer-motion";

const AboutSkeleton = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image skeleton */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[450px] md:w-[250px] lg:w-[450px] md:h-[800px] bg-gray-700 rounded-t-full animate-pulse"
          ></motion.div>

          {/* Content skeleton */}
          <div className="flex-1 text-gray-300 mt-8 md:mt-0">
            <div className="space-y-6">
              {/* About Me title */}
              <div className="h-6 bg-gray-700 rounded animate-pulse w-32"></div>
              
              {/* Paragraph skeletons */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-4/5"></div>
              </div>

              {/* Second paragraph */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
              </div>

              {/* Technologies title */}
              <div className="h-6 bg-gray-700 rounded animate-pulse w-40 mt-8"></div>
              
              {/* Technology icons skeleton */}
              <div className="flex flex-wrap gap-4 mt-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-12 w-12 bg-gray-700 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Tools title */}
              <div className="h-6 bg-gray-700 rounded animate-pulse w-20 mt-8"></div>
              
              {/* Tools text skeleton */}
              <div className="h-4 bg-gray-700 rounded animate-pulse w-4/5 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;

import { motion } from "framer-motion";

const ProjectsSkeleton = () => {
  return (
    <div className="bg-slate-900 text-gray-300 py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title skeleton */}
        <div className="h-12 md:h-16 bg-gray-700 rounded animate-pulse w-3/4 mx-auto mb-12"></div>
        
        {/* Projects grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg h-full flex flex-col"
            >
              {/* Project image skeleton */}
              <div className="h-48 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
              
              {/* Project title and details button */}
              <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>
                <div className="h-8 bg-gray-700 rounded-full animate-pulse w-16"></div>
              </div>
              
              {/* Project description */}
              <div className="space-y-2 mb-4 flex-grow">
                <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
              </div>
              
              {/* Technologies */}
              <div className="h-4 bg-gray-700 rounded animate-pulse w-full mb-4"></div>
              
              {/* Action buttons */}
              <div className="flex justify-center space-x-24">
                <div className="h-10 bg-gray-700 rounded-full animate-pulse w-20"></div>
                <div className="h-10 bg-gray-700 rounded-full animate-pulse w-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSkeleton;

import { motion } from "framer-motion";

const ContactSkeleton = () => {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title skeleton */}
        <div className="h-12 md:h-16 bg-gray-700 rounded animate-pulse w-1/2 mx-auto mb-12"></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Contact info skeleton */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
            </div>
            
            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Contact form skeleton */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-32 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 bg-gray-700 rounded animate-pulse w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;

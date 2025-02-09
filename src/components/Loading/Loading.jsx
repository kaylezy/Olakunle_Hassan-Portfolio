// src/components/LoadingScreen.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../public/Dev-kngkay.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-10"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-center text-2xl">
            <img
              src={Logo}
              alt="logo"
              className="h-10 w-10 rounded-md mr-2 animate-pulse"
            ></img>

            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
              Dev-Kngkay
            </span>
          </div>
          <motion.div
            className="text-gray-100 lg:text-4xl text-2xl font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            Loading your experience...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

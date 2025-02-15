import { useState } from "react";
import Logo from "../../../public/Dev-kngkay.png";
import { SparklesCore } from "../AceternityUI/SparklesEffect/Sparkles";

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10 transparent -mt-20 sm:-mt-2 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 sm:h-14">
          <div className="flex-shrink-0 h-10">
            <a
              href="/"
              className="text-2xl font-bold text-purple-500 dark:text-indigo-500 flex  "
            >
              <img
                src={Logo}
                alt="logo"
                className="h-10 w-10 rounded-md mr-2 animate-pulse"
              />
              <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                Dev-Kngkay
              </span>
            </a>
            {/* Sparkles effect */}
            <div className="w-[10rem] h-10 relative">
                    {/* Gradients */}
                    <div
                      className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                    <div
                      className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div
                      className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div
                      className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            
                    {/* Core component */}
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={2000}
                      className="w-full h-full"
                      particleColor="#FFFFFF" />
            
                    {/* Radial Gradient to prevent sharp edges */}
                    <div
                      className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
          </div>
          <div className="hidden md:flex space-x-6 border rounded-full px-6 py-2 border-indigo-500 dark:border-purple-500">
            <a
              href="#about"
              className="text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400"
            >
              Contact Me
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 text-3xl dark:text-white hover:text-purple-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden space-y-4 p-4">
          <a
            href="#about"
           className="block text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400 w-20"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400 w-16"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400 w-24"
            
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState } from "react";

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-purple-500 dark:text-indigo-500 "
            >
              <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500">
                Dev-Kngkay
              </span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="text-gray-900 dark:text-white hover:text-purple-500"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-gray-900 dark:text-white hover:text-purple-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-900 dark:text-white hover:text-purple-500"
            >
              Contact Me
            </a>
            {/* <button onClick={toggleTheme} className="text-gray-900 dark:text-white">
              Toggle Theme
            </button> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-purple-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#about"
            className="block px-2 py-1 text-sm text-gray-900 dark:text-white"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block px-2 py-1 text-sm text-gray-900 dark:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-2 py-1 text-sm text-gray-900 dark:text-white"
          >
            Contact Me
          </a>
          {/* <button
            onClick={toggleTheme}
            className="block w-full text-left px-2 py-1 text-sm text-gray-900 dark:text-white"
          >
            Toggle Theme
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import useThemeSwitcher from "../../hooks/useThemeSwitcher";
// import HireMeModal from "../HireMeModal/HireMeModal";
// import { motion } from "framer-motion";
// import Button from "../../components/reusable/Button";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [activeTheme, setTheme] = useThemeSwitcher();

//   function toggleMenu() {
//     if (!showMenu) {
//       setShowMenu(true);
//     } else {
//       setShowMenu(false);
//     }
//   }

//   function showHireMeModal() {
//     if (!showModal) {
//       document
//         .getElementsByTagName("html")[0]
//         .classList.add("overflow-y-hidden");
//       setShowModal(true);
//     } else {
//       document
//         .getElementsByTagName("html")[0]
//         .classList.remove("overflow-y-hidden");
//       setShowModal(false);
//     }
//   }

//   return (
//     <motion.nav
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       id="nav"
//       className="sm:container sm:mx-auto"
//     >
//       <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
//         {/* Header menu links and small screen hamburger menu */}
//         <div className="flex justify-between items-center px-4 sm:px-0">
//           <div className="bg-red-600">
//             <Link to="/">
//               {activeTheme === "dark" ? (
//                 <h1
//                   className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
//                   alt="Dark Logo"
//                 >
//                   Dev-kngkay
//                 </h1>
//               ) : (
//                 <h1
//                   className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
//                   alt="Light Logo"
//                 >
//                   Dev-kngkay
//                 </h1>
//               )}
//             </Link>
//           </div>

//           {/* Theme switcher small screen */}
//           <div
//             onClick={() => setTheme(activeTheme)}
//             aria-label="Theme Switcher"
//             className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
//           >
//             {activeTheme === "dark" ? (
//               <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
//             ) : (
//               <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
//             )}
//           </div>

//           {/* Small screen hamburger menu */}
//           <div className="sm:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="focus:outline-none"
//               aria-label="Hamburger Menu"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
//               >
//                 {showMenu ? (
//                   <FiX className="text-3xl" />
//                 ) : (
//                   <FiMenu className="text-3xl" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Header links small screen */}
//         <div
//           className={
//             showMenu
//               ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
//               : "hidden"
//           }
//         >
//           <Link
//             to="/projects"
//             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
//             aria-label="Projects"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/about"
//             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
//             aria-label="About Me"
//           >
//             About Me
//           </Link>
//           <Link
//             to="/contact"
//             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
//             aria-label="Contact"
//           >
//             Contact
//           </Link>
//           <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
//             <span
//               onClick={showHireMeModal}
//               className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
//               aria-label="Hire Me Button"
//             >
//               <Button title="Hire Me" />
//             </span>
//           </div>
//         </div>

//         {/* Header links large screen */}
//         <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
//           <Link
//             to="/projects"
//             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
//             aria-label="Projects"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/about"
//             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
//             aria-label="About Me"
//           >
//             About Me
//           </Link>
//           <Link
//             to="/contact"
//             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
//             aria-label="Contact"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Header right section buttons */}
//         <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
//           <div className="hidden md:flex">
//             <span
//               onClick={showHireMeModal}
//               className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
//               aria-label="Hire Me Button"
//             >
//               <Button title="Hire Me" />
//             </span>
//           </div>

//           {/* Theme switcher large screen */}
//           <div
//             onClick={() => setTheme(activeTheme)}
//             aria-label="Theme Switcher"
//             className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
//           >
//             {activeTheme === "dark" ? (
//               <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
//             ) : (
//               <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Hire me modal */}
//       <div>
//         {showModal ? (
//           <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
//         ) : null}
//         {showModal ? showHireMeModal : null}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

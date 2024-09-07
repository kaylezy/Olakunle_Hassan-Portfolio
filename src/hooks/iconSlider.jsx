import React, { useState, useEffect } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const icons = [
  [
    <FaHtml5 key="html" className="w-1/3 h-1/3 text-red-600" />,
    <IoLogoCss3 key="css" className="w-1/3 h-1/3 text-blue-600" />,
    <SiJavascript key="javascript" className="w-1/3 h-1/3 text-yellow-500" />,
  ],
  [
    <BsBootstrapFill key="bootstrap" className="w-1/3 h-1/3 text-purple-600" />,
    <FaReact key="react" className="w-1/3 h-1/3 text-blue-500" />,
    <SiTailwindcss key="tailwind" className="w-1/3 h-1/3 text-teal-500" />,
  ],
  [
    <IoLogoVue key="vue" className="w-1/3 h-1/3 text-green-500" />,
    <SiTypescript key="typescript" className="w-1/3 h-1/3 text-blue-600" />,
    <TbBrandNextjs key="nextjs" className="w-1/3 h-1/3 text-white" />,
  ],
];

const IconSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //   const goToPrevious = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex - 1 + icons.length) % icons.length);
  //   };

  //   const goToNext = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
  //   };

  return (
    <div className="relative w-full h-24 overflow-hidden">
      {icons.map((iconSet, index) => (
        <div
          key={index}
          className={`absolute w-96 h-full flex items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {iconSet.map((icon) => (
            <div
              key={icon.key}
              className="flex-1 flex items-center justify-between"
            >
              {icon}
            </div>
          ))}
        </div>
      ))}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Next
      </button> */}
    </div>
  );
};

export default IconSlider;

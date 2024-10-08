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
import { SiFirebase } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

const icons = [
  [
    <FaHtml5 key="html" className="w-1/3 h-1/3 text-red-600" />,
    <IoLogoCss3 key="css" className="w-1/3 h-1/3 text-blue-600" />,
    <SiJavascript key="javascript" className="w-1/3 h-1/3 text-yellow-500" />,
    <SiCloudinary key="cloudinary" className="w-1/3 h-1/3 text-white" />,
  ],
  [
    <BsBootstrapFill key="bootstrap" className="w-1/3 h-1/3 text-purple-600" />,
    <FaReact key="react" className="w-1/3 h-1/3 text-blue-500" />,
    <SiTailwindcss key="tailwind" className="w-1/3 h-1/3 text-teal-500" />,
    <SiShadcnui key="shadcnui" className="w-1/3 h-1/3 text-white" />,
  ],
  [
    <IoLogoVue key="vue" className="w-1/3 h-1/3 text-green-500" />,
    <SiTypescript key="typescript" className="w-1/3 h-1/3 text-blue-600" />,
    <TbBrandNextjs key="nextjs" className="w-1/3 h-1/3 text-white" />,
    <SiFirebase key="firebase" className="w-1/3 h-1/3 text-yellow-600" />,
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

  return (
    <div className="relative w-full h-24 overflow-hidden">
      {icons.map((iconSet, index) => (
        <div
          key={index}
          className={`absolute w-[350px] h-full flex items-center justify-center transition-opacity duration-1000 ${
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
    </div>
  );
};

export default IconSlider;

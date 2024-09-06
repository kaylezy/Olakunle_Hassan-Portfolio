import React from "react";
import HeroImage from "../../assets/about1-image.jpg";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <div id="about" className="bg-black text-white text-center py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={HeroImage}
            alt="hero-image"
            className="w-96 rounded object-cover  scale-x-[-1] md:mr-0 hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-x-105"
            width={250}
            height={400}
          />
          <div className="relative top-80 right-[420px]  bg-black w-20 h-5" />
          <div className="flex-1">
            <div className="text-justify">
              <p className="text-lg mb-8">
                I&apos;m a software engineer passionate about crafting beautiful
                and functional websites. With experience in HTML, CSS,
                JavaScript, React, Tailwind CSS, Vue.js, TypeScript, and
                Next.js, I&apos;m constantly eager to learn new technologies and
                enhance my skills. As a quick learner and collaborative team
                player, I&apos;m always ready to embrace new challenges.
                I&apos;m open to working with a talented team of developers and
                contributing to exciting projects.
              </p>

              <p className="text-lg mb-8">
                I have a strong foundation in building visually appealing and
                user-friendly web experiences. I&apos;m driven to find a role
                where I can push my limits and deliver value to website users.
                I&apos;m excited to bring my expertise to a team and contribute
                to a company&apos;s success.
              </p>

              <p className="text-lg mb-8">
                I am also passionate about sharing knowledge, documentation, web
                engineering, Jamstack, headless commerce, and others.
              </p>
            </div>
            <div className="text-bold text-left ">
              <p>Some of the the skills have acquired on this journey...</p>
            </div>
            <div className="mt-12 flex justify-between text-center cursor-pointer">
              <div
                className="text-red-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <FaHtml5 />
              </div>
              <div
                className="text-blue-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <IoLogoCss3 />
              </div>
              <div
                className="text-yellow-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <SiJavascript />
              </div>
              <div
                className="text-purple-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <BsBootstrapFill />
              </div>
              <div
                className="text-cyan-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <FaReact />
              </div>
              <div
                className="text-cyan-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <SiTailwindcss />
              </div>
              <div
                className="text-green-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <IoLogoVue />
              </div>
              <div
                className="text-blue-500 text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <SiTypescript />
              </div>
              <div
                className="text-white text-3xl font-bold hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-150"
              >
                <TbBrandNextjs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

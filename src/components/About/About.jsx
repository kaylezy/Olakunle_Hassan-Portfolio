import React from "react";
import HeroImage from "../../assets/about-image.jpg";

const About = () => {
  return (
    <div id="about" className="bg-gray-800 text-white text-center py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={HeroImage}
            alt="hero-image"
            className="w-96 rounded object-cover rounded-t-full md:rounded-none md:rounded-tr-[250px] scale-x-[-1]"
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
            <div className="flex md:flex-row items-center flex-col text-left space-x-4 p-4">
              <div className="w-full space-y-2">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-3/12">
                    HTML & CSS
                  </label>
                  <div className="grow bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="javascript" className="w-3/12">
                    Javascript
                  </label>
                  <div className="grow bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="typescript" className="w-3/12">
                    Typescript
                  </label>
                  <div className="grow bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="w-full space-y-2">
                <div className="flex items-center">
                  <label htmlFor="reactjs" className="w-3/12">
                    React JS
                  </label>
                  <div className="grow bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="vue" className="w-3/12">
                    Vue JS
                  </label>
                  <div className="grow bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="nextjs" className="w-3/12">
                    Next JS
                  </label>
                  <div className="grow bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  2+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  5+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  6+
                </h3>
                <p>Github Star</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

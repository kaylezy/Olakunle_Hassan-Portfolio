import React from "react";
import HeroImage from "../../assets/imagebeach.jpg";

import IconSlider from "../../hooks/iconSlider";

const About = () => {
  return (
    <div id="about" className="bg-black text-white text-center py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="">
            <img
              src={HeroImage}
              alt="hero-image"
              className="w-[450px] rounded-t-full object-cover  scale-x-[-1] md:mr-0 hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-x-105"
              width={250}
              height={400}
            />
          </div>

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
            <div className="flex justify-between text-center cursor-pointer">
              <IconSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

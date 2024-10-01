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
              className="w-[450px] md:w-[250px] lg:w-[450px] md:h-[800px] rounded-t-full object-cover  scale-x-[-1] md:mr-0 hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-x-105"
              width={250}
              height={400}
            />
          </div>

          <div className="flex-1 text-gray-300">
            <div className="text-justify">
              <h2 className="text-xl font-bold pb-4">About Me:</h2>
              <p className="text-lg mb-8">
                I&apos;m Olakunle Hassan, a Frontend Software Engineer
                passionate about crafting beautiful and functional websites.
                With experience in HTML, CSS, JavaScript, React, Tailwind CSS,
                Vue.js, TypeScript, Next.js and Progressive Web Application
                (PWA). I&apos;m constantly eager to learn new technologies and
                enhance my skills. As a quick learner and collaborative team
                player, I&apos;m always ready to embrace new challenges.
                I&apos;m open to working with a talented team of developers and
                contributing to exciting projects.
              </p>

              <p className="text-lg mb-8">
                I have a strong foundation in building visually appealing and
                user-friendly web experiences. I prioritize performance,
                accessibility, responsiveness, and best practices while coding.
                Additionally, i ensure to fetch the correct data from the
                database when consuming APIs, handle errors, and set error
                boundaries where necessary. I&apos;m driven to find a role where
                I can push my limits and deliver value to website users.
                I&apos;m excited to bring my expertise to a team and contribute
                to a company&apos;s success. Additionally, I&apos;m also
                passionate about sharing knowledge, documentation, web
                engineering, Jamstack, headless commerce, and others.
              </p>
              <p className="text-lg mb-8">
                I&apos;ve gained experience with the following Frontend
                technologies and tools:
              </p>
            </div>
            <div className="text-bold text-left ">
              <h2 className="text-xl font-bold">Technologies:</h2>
              <IconSlider />
            </div>
            <div className="text-bold text-left ">
              <h2 className="text-xl font-bold pb-2">Tools:</h2>
              <p className="text-lg mb-8 italic">
                VSCode Editor, Git, Github, Vite, Figma, Sublime Text Editor,
                CodeSandBox, CodePen .
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

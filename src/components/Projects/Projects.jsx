import React from "react";
import UrlShortening from "../../assets/UrlShorteningApp.jpg";
import GitRepoVue from "../../assets/GitRepoVue.jpg";
import GitRepoReact from "../../assets/GitRepoReact.jpg";
import TimeZone from "../../assets/TimeZoneConverter.jpg";
import TodoApp from "../../assets/TodoApp.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "CutFitt_URL",
    description:
      "It is a Url Shortening service that allows you to shorten any long Url to a manageable and user-friendly link. ",
    technologies: "NextJs with typescrit and tailwindcss",
    image: UrlShortening,
    github: "https://github.com/kaylezy/CutFitt_URL/",
    demo: "https://cutfitt-url.vercel.app/",
  },
  {
    id: 2,
    name: "Vue GitRepo",
    description:
      "A web application created to fetch the github repositories of users, built with vuejs",
    technologies: "Vue Js and Javascript",
    image: GitRepoVue,
    github: "https://github.com/kaylezy/vue-github-repo-fetch",
    demo: "https://vue-github-repo-fetch.netlify.app/",
  },
  {
    id: 3,
    name: "React GitRepo",
    description:
      "A web application created to fetch the github repositories of users, built with reactjs",
    technologies: "React JS",
    image: GitRepoReact,
    github: "https://github.com/kaylezy/github-repo-api-fetch",
    demo: "https://github-repo-api-fetch.netlify.app/",
  },
  {
    id: 4,
    name: "Time Zone",
    description:
      "A simple web application that allows users to view the current time in different timezones around the world.",
    technologies: "HTML, CSS and JS",
    image: TimeZone,
    github: "https://github.com/kaylezy/time-zone",
    demo: "https://time-zone-conversion.netlify.app/",
  },
  {
    id: 5,
    name: "Todo App",
    description:
      "This project was created using vanilla Js with a vite bundler to run the project.",
    technologies: "HTML, CSS and JS",
    image: TodoApp,
    github: "https://github.com/kaylezy/my-todo-app",
    demo: "https://my-todo-app-kay.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="slider container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: -180 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-center space-x-24">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="inline-block bg-gradient-to-r 
                  from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

// import React from "react";
// import Slider from "react-slick";

// function MultipleItems() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//         <div>
//           <h3>9</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default MultipleItems;

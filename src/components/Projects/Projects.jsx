import { motion } from "framer-motion";
import EasyServe from "../../assets/easyserve.jpg";
import RenergyHub from "../../assets/renergyhub.jpg";
import Upgrade from "../../assets/upgrade.jpg";
import UrlShortening from "../../assets/UrlShorteningApp.jpg";
import GitRepoVue from "../../assets/GitRepoVue.jpg";
import Crowdfunding from "../../assets/crowdfund.jpg";

const projects = [
  {
    id: 1,
    name: "EasyServe",
    description:
      "It is a Url Shortening service that allows you to shorten any long Url to a manageable and user-friendly link. ",
    technologies: "NextJs with typescrit and tailwindcss",
    image: EasyServe,
    github: "https://github.com/EasyServe3/EasyserveApp_PWA",
    demo: "https://www.easyserve.com.ng/",
  },
  {
    id: 2,
    name: "RenergyHub",
    description:
      "A web application created to fetch the github repositories of users, built with vuejs",
    technologies: "Vue Js and Javascript",
    image: RenergyHub,
    github:
      "https://github.com/InternPulse/renergy-hub-frontend/tree/feature-base",
    demo: "https://www.renergyhub.com.ng//",
  },
  {
    id: 3,
    name: "Upgrade Landing Page",
    description:
      "This project is a landing page for a crowdfunding platform, from frontend mentor.",
    technologies: "React Js and Tailwindcss",
    image: Upgrade,
    github: "https://github.com/kaylezy/FinTech-Landing-Page",
    demo: "https://fintech-landingpage.vercel.app/",
  },
  {
    id: 4,
    name: "CutFitt_URL",
    description:
      "It is a Url Shortening service that allows you to shorten any long Url to a manageable and user-friendly link. ",
    technologies: "NextJs with typescrit and tailwindcss",
    image: UrlShortening,
    github: "https://github.com/kaylezy/CutFitt_URL/",
    demo: "https://cutfitt-url.vercel.app/",
  },
  {
    id: 5,
    name: "Vue GitRepo",
    description:
      "A web application created to fetch the github repositories of users, built with vuejs",
    technologies: "Vue Js and Javascript",
    image: GitRepoVue,
    github: "https://github.com/kaylezy/vue-github-repo-fetch",
    demo: "https://vue-github-repo-fetch.netlify.app/",
  },
  {
    id: 6,
    name: "Crowdfunding Landing Page",
    description:
      "This project is a landing page for a crowdfunding platform, from frontend mentor.",
    technologies: "React Js and Tailwindcss",
    image: Crowdfunding,
    github: "https://github.com/kaylezy/crowdfunding",
    demo: "https://crowdfunding-lyart-beta.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-900 text-gray-300 py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Some of the Projects I worked on
        </h2>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.4 } },
          }}
          initial="hidden"
          animate="show"
          className="slider container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
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
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <a
                  href={project.demo}
                  className="text-blue-400 font-semibold text-sm hover:bg-gradient-to-r 
              from-blue-400 to-indigo-500 px-4 py-2 rounded-full hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details
                </a>
              </div>
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
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import UrlShortening from "../../assets/UrlShorteningApp.jpg";
import GitRepoVue from "../../assets/GitRepoVue.jpg";
import GitRepoReact from "../../assets/GitRepoReact.jpg";
import TimeZone from "../../assets/TimeZoneConverter.jpg";
import TodoApp from "../../assets/TodoApp.jpg";

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
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

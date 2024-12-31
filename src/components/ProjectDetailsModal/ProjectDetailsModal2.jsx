import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const projectDetails = [
  {
    id: 1,
    name: "RenergyHub",
    description:
      "A web application created to fetch the github repositories of users, built with vuejs ",
  },
  //   {
  //     id: 2,
  //     name: "RenergyHub",
  //     description:
  //       "A web application created to fetch the github repositories of users, built with vuejs",
  //   },
  //   {
  //     id: 3,
  //     name: "Upgrade Landing Page",
  //     description:
  //       "This project is a landing page for a crowdfunding platform, from frontend mentor.",
  //     demo: "https://fintech-landingpage.vercel.app/",
  //   },
  //   {
  //     id: 4,
  //     name: "CutFitt_URL",
  //     description:
  //       "It is a Url Shortening service that allows you to shorten any long Url to a manageable and user-friendly link. ",
  //   },
  //   {
  //     id: 5,
  //     name: "Vue GitRepo",
  //     description:
  //       "A web application created to fetch the github repositories of users, built with vuejs",
  //   },
  //   {
  //     id: 6,
  //     name: "Crowdfunding Landing Page",
  //     description:
  //       "This project is a landing page for a crowdfunding platform, from frontend mentor.",
  //   },
];

const ProjectDetailsModal = ({ onClose, onRequest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-slate-950 bg-opacity-90 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                Project Details
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-screen overflow-y-auto">
              {projectDetails.map((project) => (
                <div key={project.id}>
                  <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                    {project.name}
                  </h2>
                  <p className="text-gray-300 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetailsModal;

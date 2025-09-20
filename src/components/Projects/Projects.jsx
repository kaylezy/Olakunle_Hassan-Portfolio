import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectDetails } from '../../hooks/projectDetails';
import PropTypes from 'prop-types';
import { BackgroundGradient } from '../AceternityUI/BackgroundGradient/BackgroundGradientEffect';

const Modal = ({ isOpen = false, onClose, projectId }) => {
  if (!isOpen || !projectId) return null;

  const projectDetail = projectDetails[projectId];
  const project = projects.find(p => p.id === projectId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        className="bg-gray-800 p-8 rounded-lg max-w-3xl mx-4 relative overflow-y-auto"
        style={{ maxHeight: '90vh' }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-10 text-gray-200 hover:text-white"
        >
          Close
        </button>

        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-6 w-full h-64 object-cover"
        />

        <h2 className="text-3xl font-bold mb-4 text-white">{project.name}</h2>
        <p className="text-gray-300 mb-4">{projectDetail.description}</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Key Features
          </h3>
          <p className="text-gray-300">{projectDetail.features}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex-1 text-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            className="flex-1 text-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  projectId: PropTypes.number,
};

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  return (
    <div
      className="bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 py-20"
      id="projects"
    >
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
          {projects.map(project => (
            <BackgroundGradient
              key={project.id}
              className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900 w-full h-full"
            >
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 h-full flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <button
                    onClick={() => setSelectedProjectId(project.id)}
                    className="text-blue-400 font-semibold text-sm hover:bg-gradient-to-r from-blue-400 to-indigo-500 px-4 py-2 rounded-full hover:text-white"
                  >
                    Details
                  </button>
                </div>
                <p className="text-gray-400 mb-2 flex-grow">
                  {project.description}
                </p>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <div className="flex justify-center space-x-24">
                  <a
                    href={project.github}
                    className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </motion.div>
            </BackgroundGradient>
          ))}
        </motion.div>

        <Modal
          isOpen={!!selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
          projectId={selectedProjectId}
        />
      </div>
    </div>
  );
};

export default Projects;

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { projects, projectDetails } from '../../hooks/projectDetails';
import PropTypes from 'prop-types';
import { BackgroundGradient } from '../AceternityUI/BackgroundGradient/BackgroundGradientEffect';

const Modal = ({ isOpen = false, onClose, projectId }) => {
  const projectDetail = projectDetails[projectId];
  const project = projects.find(p => p.id === projectId);

  // Handle escape key press
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    e => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Add event listener
      document.addEventListener('keydown', handleKeyDown);

      // Cleanup function
      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  // Don't render if not open or no project
  if (!isOpen || !projectId || !project || !projectDetail) {
    return null;
  }

  const modalContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg max-w-4xl w-full max-h-[90vh] relative overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white text-2xl font-bold z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Modal content */}
        <div className="pr-8">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg mb-6 w-full h-48 md:h-64 object-cover"
          />

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.name}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {projectDetail.description}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Key Features
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {projectDetail.features}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href={project.demo}
              className="flex-1 text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal outside the normal DOM tree
  return createPortal(modalContent, document.body);
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
                className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 h-full flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <button
                    onClick={() => setSelectedProjectId(project.id)}
                    className="text-blue-500 dark:text-blue-400 font-semibold text-sm hover:bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 px-4 py-2 rounded-full hover:text-white transition-all duration-300"
                  >
                    Details
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.technologies}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.github}
                    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
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

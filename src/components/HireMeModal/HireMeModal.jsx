/**
 * Hire Me Modal Component
 *
 * A modal component for project inquiries with form submission.
 * Uses the same form handling as the main contact form.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to close the modal
 * @returns {JSX.Element} HireMeModal component
 */

import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../reusable/Button';

// Hooks
import useHireMeForm from '../../hooks/useHireMeForm';

const selectOptions = ['Web Application', 'Mobile Application', 'Branding'];

const HireMeModal = ({ onClose }) => {
  const { state, handleSubmit, isDevelopment, isSimulated, ValidationError } =
    useHireMeForm();

  const resetForm = () => {
    const form = document.getElementById('contact-form');
    if (form) form.reset();
  };

  useEffect(() => {
    if (state.succeeded) {
      resetForm();
      // Close modal after delay (longer in development to show simulation message)
      const delay = isDevelopment && isSimulated ? 4000 : 3000;
      setTimeout(() => onClose(), delay);
    }
  }, [state.succeeded, onClose, isDevelopment, isSimulated]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500 pt-28"
    >
      <div className="bg-filter bg-slate-950 bg-opacity-90 fixed inset-0 w-full h-full z-20" />
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-white dark:bg-gray-800 max-h-screen shadow-2xl flex-row rounded-xl relative border border-gray-200 dark:border-gray-700">
            <div className="modal-header flex justify-between items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
              <h5 className="text-gray-900 dark:text-white text-xl font-semibold">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <FiX className="text-2xl" />
              </button>
            </div>
            <div className="modal-body p-6 w-full h-full">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    aria-label="Name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    aria-label="Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Project Type *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                    id="subject"
                    name="subject"
                    required
                    aria-label="Project Category"
                    defaultValue={selectOptions[0]}
                  >
                    {selectOptions.map(option => (
                      <option
                        key={option}
                        value={option}
                        className="text-normal sm:text-md"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    required
                    aria-label="Project Description"
                    placeholder="Please describe your project in detail: What type of application do you need? What features are required? What's your timeline and budget range? Any specific technologies or preferences?"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mt-6">
                  <Button
                    type="submit"
                    title={
                      state.submitting
                        ? 'Submitting inquiry...'
                        : 'Send Project Inquiry'
                    }
                    disabled={state.submitting}
                    className="w-full"
                    aria-label="Submit Project Inquiry"
                  />
                </div>
              </form>
              {state.succeeded ? (
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.9,
                    delay: 0.3,
                  }}
                  className="text-green-500 text-center text-xl font-bold"
                >
                  {isDevelopment && isSimulated ? (
                    <>
                      Project inquiry submitted! 🎉
                      <br />
                      <span className="text-sm text-gray-400">
                        (Simulation mode - In production, this would be sent to
                        your email)
                      </span>
                    </>
                  ) : (
                    <>
                      Project inquiry submitted! ✅
                      <br />
                      <span className="text-sm text-gray-400">
                        Thank you for your interest! I&apos;ll review your
                        project details and get back to you within 24 hours with
                        a proposal.
                      </span>
                    </>
                  )}
                </motion.p>
              ) : (
                state.errors &&
                state.errors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-center py-2 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  >
                    <div>
                      <p className="font-semibold mb-2">
                        Unable to submit inquiry
                      </p>
                      <p className="text-sm">
                        There was a problem submitting your project inquiry.
                        Please check your information and try again, or contact
                        me directly at <strong>kunlex_042003@yahoo.com</strong>
                      </p>
                    </div>
                  </motion.div>
                )
              )}

              {isDevelopment && !isSimulated && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                ></motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};
HireMeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default HireMeModal;

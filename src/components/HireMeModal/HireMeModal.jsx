import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "../../components/reusable/Button";
import { useForm, ValidationError } from "@formspree/react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const selectOptions = ["Web Application", "Mobile Application", "Branding"];

const HireMeModal = ({ onClose }) => {
  const [state, handleSubmit] = useForm("xyzzbkkj");

  const resetForm = () => {
    const form = document.getElementById("contact-form");
    if (form) form.reset();
  };

  useEffect(() => {
    if (state.succeeded) {
      resetForm();
      // Optional: Close modal after delay
      setTimeout(() => onClose(), 3000);
    }
  }, [state.succeeded, onClose]);
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
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className="text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    className="w-full px-5 py-2 border rounded-md text-gray-900"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
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
                  <input
                    className="w-full px-5 py-2 border rounded-md text-gray-900"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
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
                  <select
                    className="w-full px-5 py-2 border rounded-md text-gray-900"
                    id="subject"
                    name="subject"
                    required
                    aria-label="Project Category"
                    defaultValue={selectOptions[0]}
                  >
                    {selectOptions.map((option) => (
                      <option key={option} className="text-normal sm:text-md">
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
                  <textarea
                    className="w-full px-5 py-2 border rounded-md text-gray-900"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    required
                    aria-label="Details"
                    placeholder="Project description"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mt-6  sm:pb-1 hover:shadow-lg bg-indigo-500 dark:bg-ternary-dark rounded-md text-center py-2 sm:py-2.5">
                  <Button
                    type="submit"
                    title={state.submitting ? "Sending..." : "Send Message"}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                  />
                </div>
              </form>
              {state.succeeded ? (
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.9,
                    delay: 0.3,
                  }}
                  className="text-green-500 text-center text-xl font-bold"
                >
                  Thank you for reaching out! 👍🏽 I&apos;ll respond to your
                  message soon.
                </motion.p>
              ) : (
                state.errors && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-center py-2 rounded"
                  >
                    Oops! There was an error submitting the form. Please check
                    your inputs and try again.
                  </motion.div>
                )
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

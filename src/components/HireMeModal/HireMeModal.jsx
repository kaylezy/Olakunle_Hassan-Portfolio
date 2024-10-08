import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "../../components/reusable/Button";

const selectOptions = ["Web Application", "Mobile Application", "Branding"];

const HireMeModal = ({ onClose, onRequest }) => {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-70 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
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
              <form
                onSubmit={submitForm}
                action="https://formspree.io/f/xovazewp"
                method="POST"
                className="max-w-xl m-4 text-left"
              >
                <div className="">
                  <input
                    className="w-full px-5 py-2 border rounded-md text-gray-900 "
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border rounded-md text-gray-900 "
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border rounded-md text-gray-900 "
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    aria-label="Project Category"
                  >
                    {selectOptions.map((option) => (
                      <option className="text-normal sm:text-md" key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border rounded-md text-gray-900 "
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Details"
                    placeholder="Project description"
                  ></textarea>
                </div>

                <div className="mt-6 pb-4 sm:pb-1">
                  <span
                    // onClick={onClose}
                    type="submit"
                    className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                  >
                    <Button type="submit" title="Send Request" />
                  </span>
                </div>
                {status === "SUCCESS" && (
                  <p className="text-green-500 text-center">
                    Thank you for reaching out! 👍🏽 I&apos;ll respond to your
                    message soon.
                  </p>
                )}
                {status === "ERROR" && (
                  <p className="text-red-500 text-center">
                    Oops! There was an error.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;

import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/kaylezy",
  },
  {
    id: 2,
    icon: <BsTwitterX />,
    url: "https://twitter.com/iam_kaylezy",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/olakunle-hassan",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzzbkkj", {
    headers: {
      Accept: "application/json",
      Origin: window.location.origin,
    },
    config: {
      mode: "cors",
    },
  });

  return (
    <div className="bg-gray-950 text-gray-300 py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 0.9,
            delay: 0.3,
          }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Let&apos;s connect and turn visionary concepts into reality
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.3,
              }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-400 to-indigo-500 mb-4"
            >
              Let&apos;s Talk
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.5,
              }}
            >
              I&apos;m eager to explore web development collaborations and new
              opportunities. Whether you have a specific project in mind or a
              business concept to discuss, I&apos;m ready to engage promptly and
              enthusiastically with the details of your proposal.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.8,
              }}
              className="mb-4 mt-8"
            >
              <FaEnvelope className="inline-block text-indigo-400 mr-2"></FaEnvelope>
              <a
                href="mailto:kunlex_042003@yahoo.com"
                className="hover:underline"
              >
                kunlex_042003@yahoo.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 1,
              }}
              className="mb-4"
            >
              <FaPhone className="inline-block text-indigo-400 mr-2"></FaPhone>
              <span>+234 802 9732 493</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 1.2,
              }}
              className="mb-4"
            >
              <FaMapMarkedAlt className="inline-block text-indigo-400 mr-2"></FaMapMarkedAlt>
              <span>Abule-Egba, Lagos, Nigeria</span>
            </motion.div>
            <div id="socials" className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.9,
                  delay: 1.4,
                }}
                className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28"
              >
                <p
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-400 to-indigo-500 mb-4"
                >
                  Follow me
                </p>
                <ul className="flex gap-10 sm:gap-10">
                  {socialLinks.map((link) => (
                    <a
                      href={link.url}
                      target="__blank"
                      key={link.id}
                      className="text-3xl pt-6 font-bold bg-clip-text bg-gradient-to-r 
            from-blue-400 to-indigo-500 mb-4"
                    >
                      <i className="text-xl sm:text-2xl md:text-3xl">
                        {link.icon}
                      </i>
                    </a>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="leading-loose">
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
                <motion.form
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.9,
                    delay: 1,
                  }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <FormInput
                    inputLabel="Full Name"
                    labelFor="name"
                    inputType="text"
                    inputId="name"
                    inputName="name"
                    placeholderText="Your Name"
                    ariaLabelName="Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />

                  <FormInput
                    inputLabel="Email"
                    labelFor="email"
                    inputType="email"
                    inputId="email"
                    inputName="email"
                    placeholderText="Your email"
                    ariaLabelName="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />

                  <FormInput
                    inputLabel="Subject"
                    labelFor="subject"
                    inputType="text"
                    inputId="subject"
                    inputName="subject"
                    placeholderText="Subject"
                    ariaLabelName="Subject"
                    required
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />

                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-indigo-500"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Message"
                      placeholder="Type Your Message"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {state.errors && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-center py-2 rounded"
                    >
                      Oops! There was an error submitting the form. Please check
                      your inputs and try again.
                    </motion.div>
                  )}

                  <div
                    className="bg-gradient-to-r from-blue-400 to-indigo-500 text-center text-white md:inline
              transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-lg"
                  >
                    <Button
                      title={state.submitting ? "Sending..." : "Send Message"}
                      type="submit"
                      disabled={state.submitting}
                      aria-label="Send Message"
                    />
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

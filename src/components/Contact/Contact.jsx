/**
 * Contact Component
 *
 * A contact form component with social links and contact information.
 * Features form validation, animations, and responsive design.
 *
 * @component
 * @returns {JSX.Element} Contact component
 */

import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';

// Components
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

// Constants
import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants/projects';

// Hooks
import useContactForm from '../../hooks/useContactForm';

// Social icon mapping
const SOCIAL_ICONS = {
  github: <FiGithub />,
  twitter: <BsTwitterX />,
  linkedin: <FiLinkedin />,
};

const Contact = () => {
  const { state, handleSubmit, isDevelopment, isSimulated, ValidationError } =
    useContactForm();

  return (
    <div
      className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-20"
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'linear',
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
                ease: 'easeInOut',
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
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.5,
              }}
            >
              I&apos;m particularly excited about opportunities that leverage AI
              to build scalable, user centric solutions that empower people and
              businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.8,
              }}
              className="mb-4 mt-8"
            >
              <FaEnvelope className="inline-block text-indigo-400 mr-2" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:underline transition-colors duration-200"
                aria-label={`Send email to ${CONTACT_INFO.email}`}
              >
                {CONTACT_INFO.email}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 1,
              }}
              className="mb-4"
            >
              <FaPhone className="inline-block text-indigo-400 mr-2" />
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="hover:underline transition-colors duration-200"
                aria-label={`Call ${CONTACT_INFO.phone}`}
              >
                {CONTACT_INFO.phone}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 1.2,
              }}
              className="mb-4"
            >
              <FaMapMarkedAlt className="inline-block text-indigo-400 mr-2" />
              <span>{CONTACT_INFO.location}</span>
            </motion.div>
            <div id="socials" className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: 'easeInOut',
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
                  {SOCIAL_LINKS.map(link => (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.id}
                      className="text-3xl pt-6 font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 animate-bounce hover:scale-110 transition-transform duration-200"
                      aria-label={link.label}
                    >
                      <i className="text-xl sm:text-2xl md:text-3xl">
                        {SOCIAL_ICONS[link.icon]}
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
                    ease: 'easeInOut',
                    duration: 0.9,
                    delay: 0.3,
                  }}
                  className="text-green-500 text-center text-xl font-bold"
                >
                  {isDevelopment && isSimulated ? (
                    <>
                      Message sent successfully! 🎉
                      <br />
                      <span className="text-sm text-gray-400">
                        (Simulation mode - In production, this would be sent to
                        your email)
                      </span>
                    </>
                  ) : (
                    <>
                      Message sent successfully! ✅
                      <br />
                      <span className="text-sm text-gray-400">
                        Thank you for contacting me. I&apos;ll get back to you
                        within 24 hours.
                      </span>
                    </>
                  )}
                </motion.p>
              ) : (
                <motion.form
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: 'easeInOut',
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

                  {state.errors && state.errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-center py-2 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    >
                      <div>
                        <p className="font-semibold mb-2">
                          Unable to send message
                        </p>
                        <p className="text-sm">
                          There was a problem submitting your message. Please
                          check your information and try again, or contact me
                          directly at <strong>kunlex_042003@yahoo.com</strong>
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {isDevelopment && !isSimulated && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    ></motion.div>
                  )}

                  <Button
                    title={
                      state.submitting ? 'Sending message...' : 'Send Message'
                    }
                    type="submit"
                    disabled={state.submitting}
                    aria-label="Send Message"
                    className="w-full md:w-auto"
                  />
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

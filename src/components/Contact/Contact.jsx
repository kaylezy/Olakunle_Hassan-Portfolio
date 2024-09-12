import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

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
    <div className="bg-gray-950 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Let&apos;s connect and turn visionary concepts into reality
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-400 to-indigo-500 mb-4"
            >
              Let&apos;s Talk
            </h3>
            <p>
              I&apos;m eager to explore web development collaborations and new
              opportunities. Whether you have a specific project in mind or a
              business concept to discuss, I&apos;m ready to engage promptly and
              enthusiastically with the details of your proposal.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-indigo-400 mr-2"></FaEnvelope>
              <a
                href="mailto:kunlex_042003@yahoo.com"
                className="hover:underline"
              >
                kunlex_042003@yahoo.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-indigo-400 mr-2"></FaPhone>
              <span>+234 802 9732 493</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-indigo-400 mr-2"></FaMapMarkedAlt>
              <span>Abule-Egba, Lagos, Nigeria</span>
            </div>
            <div id="socials" className="mt-20">
              <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
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
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="leading-loose">
              <form
                onSubmit={submitForm}
                action="https://formspree.io/f/xovazewp"
                method="POST"
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
                />
                <FormInput
                  inputLabel="Email"
                  labelFor="email"
                  inputType="email"
                  inputId="email"
                  inputName="email"
                  placeholderText="Your email"
                  ariaLabelName="Email"
                />
                <FormInput
                  inputLabel="Subject"
                  labelFor="subject"
                  inputType="text"
                  inputId="subject"
                  inputName="subject"
                  placeholderText="Subject"
                  ariaLabelName="Subject"
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
                </div>
                <div
                  className="bg-gradient-to-r from-blue-400 to-indigo-500 text-center text-white md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-lg"
                >
                  <Button
                    title="Send Message"
                    type="submit"
                    aria-label="Send Message"
                  />
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
      </div>
    </div>
  );
};

export default Contact;

import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerDark from '../../assets/developer-dark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
import { useState } from 'react';
import HireMeModal from '../HireMeModal/HireMeModal';
import Typewriter from '../../hooks/typewriter';
import { AuroraBackground } from '../AceternityUI/AuroraBackground/AuroraBackgroundEffect';

const AppBanner = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme] = useThemeSwitcher();

  return (
    <AuroraBackground>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="sm:container sm:mx-16 flex flex-col sm:justify-between items-center sm:flex-row mt-20 md:mt-2 md:pt-10 text-gray-600 dark:text-gray-300"
      >
        <div className=" w-full md:w-[50rem] text-left p-4 text-gray-600 dark:text-gray-300 lg:pl-20  ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 0,
            }}
            className="font-general-semibold text-2xl lg:text-3xl xl:text-5xl text-center sm:text-left text-gray-800 dark:text-gray-100 uppercase"
          >
            <div className="block">Hi 👋🏽, I&apos;m</div>
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500 block">
              <Typewriter text="Olakunle Hassan" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'circIn',
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-600 dark:text-gray-300"
          >
            Software Engineer{' '}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Frontend Developer
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 1, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeIn',
              duration: 0.9,
              delay: 0.4,
            }}
            className="font-general-medium mt-4 text-md md:text-md lg:text-md xl:text-2xl text-center sm:text-left leading-normal text-gray-600 dark:text-gray-300"
          >
            Passionate about leveraging the latest web technologies to build
            dynamic, scalable applications that not only meet current industry
            standards but anticipate future trends in responsive design and user
            interaction.
          </motion.p>
          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.3,
              }}
              download="Olakunle_Hassan.pdf"
              href="/files/Olakunle_Hassan_CV.pdf"
              aria-label="Download Resume"
            >
              <Button
                title={
                  <span className="flex items-center justify-center">
                    <FiArrowDownCircle className="mr-2 h-5 w-5" />
                    Download CV
                  </span>
                }
                variant="outline"
                size="large"
                className="w-48 sm:w-48 bg-gray-300"
              />
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.4,
              }}
            >
              <Button
                title="Hire Me"
                variant="outline"
                size="large"
                onClick={() => setShowModal(true)}
                className="w-40 sm:w-44 bg-gray-300"
                ariaLabel="Hire Me Button"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
        >
          <img
            src={activeTheme === 'dark' ? developerDark : developerDark}
            alt="Developer"
            className="w-auto sm:w-56 md:w-96 lg:w-56 xl:w-11/12"
          />
        </motion.div>
        <div>
          {showModal && <HireMeModal onClose={() => setShowModal(false)} />}
        </div>
      </motion.section>
    </AuroraBackground>
  );
};

export default AppBanner;

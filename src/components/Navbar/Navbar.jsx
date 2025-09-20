/**
 * Navigation Bar Component
 *
 * A responsive navigation bar with logo, navigation links, and mobile menu.
 * Features sparkle effects and smooth animations.
 *
 * @component
 * @returns {JSX.Element} Navigation bar component
 */

import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import Logo from '../../../public/Dev-kngkay.png';
import { SparklesCore } from '../AceternityUI/SparklesEffect/Sparkles';

// Navigation links configuration
const NAVIGATION_LINKS = [
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact Me' },
];

// Social links configuration
const GITHUB_URL = 'https://github.com/kaylezy';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Toggle mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  /**
   * Close mobile menu when a link is clicked
   */
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full h-20 z-20 bg-white dark:bg-gray-800 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 h-10">
            <a
              href="/"
              className="text-2xl font-bold text-purple-500 dark:text-indigo-500 flex items-center"
              aria-label="Dev-Kngkay Portfolio Home"
            >
              <img
                src={Logo}
                alt="Dev-Kngkay Logo"
                className="h-10 w-10 rounded-md mr-2 animate-pulse"
                width={40}
                height={40}
              />
              <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                Dev-Kngkay
              </span>
            </a>

            {/* Sparkles Effect */}
            <div className="w-[10rem] h-10 relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.5}
                maxSize={1}
                particleDensity={2000}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-6 border rounded-full px-6 py-2 border-indigo-500 dark:border-purple-500">
              {NAVIGATION_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* GitHub Icon */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Visit GitHub Profile"
            >
              <FiGithub className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 text-3xl dark:text-white hover:text-purple-500 focus:outline-none transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden space-y-4 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          {NAVIGATION_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-900 dark:text-white hover:text-purple-500 focus:border-b-2 border-b-indigo-400 transition-colors duration-200 py-2"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile GitHub Link */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-900 dark:text-white hover:text-purple-500 transition-colors duration-200 py-2"
              onClick={handleLinkClick}
            >
              <FiGithub className="w-5 h-5 mr-3" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

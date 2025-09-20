/**
 * Custom Hook for System Theme Detection
 *
 * Automatically detects and follows the device's system theme preference.
 * No manual controls - purely automatic based on system settings.
 *
 * @returns {string} currentTheme - Current system theme ('light' or 'dark')
 */

import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const [systemTheme, setSystemTheme] = useState('dark'); // Default fallback

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to detect system theme
    const detectSystemTheme = () => {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return 'dark';
      }
      return 'light';
    };

    // Set initial theme
    setSystemTheme(detectSystemTheme());

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = e => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return systemTheme;
};

export default useThemeSwitcher;

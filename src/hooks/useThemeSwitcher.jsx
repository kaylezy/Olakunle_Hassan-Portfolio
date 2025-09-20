/**
 * Custom Hook for Theme Management
 * 
 * Provides theme state management with localStorage persistence.
 * Handles theme switching between light and dark modes.
 * 
 * @returns {Array} [activeTheme, setTheme] - Current theme and setter function
 */

import { useEffect, useState } from 'react';
import { THEMES, DEFAULT_THEME, THEME_STORAGE_KEY } from '../constants/theme';

const useThemeSwitcher = () => {
  // Initialize theme from localStorage or default
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  // Calculate the opposite theme for toggling
  const activeTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;

  // Apply theme to document and persist to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;

    // Remove previous theme class
    root.classList.remove(activeTheme);
    
    // Add current theme class
    root.classList.add(theme);
    
    // Persist to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, activeTheme]);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(prevTheme => 
      prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
  };

  return [activeTheme, setTheme, toggleTheme];
};

export default useThemeSwitcher;

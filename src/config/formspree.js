/**
 * Formspree Configuration
 *
 * Configuration for Formspree form handling across different environments.
 * Update the endpoint with your actual Formspree form ID.
 */

// Formspree endpoints - replace with your actual form IDs
export const CONTACT_FORM_ENDPOINT = 'mldwqvdv'; // For general contact inquiries
export const HIRE_ME_FORM_ENDPOINT = 'mzzanwzl'; // For project inquiries

// Environment detection - temporarily set to true for simulation mode
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Formspree configuration
export const FORMSPREE_CONFIG = {
  headers: {
    Accept: 'application/json',
  },
  config: {
    mode: 'cors',
  },
};

// Development mode settings
export const DEV_SETTINGS = {
  simulateSubmission: true,
  showDevNotice: true,
  submissionDelay: 1000, // milliseconds
};

// Production settings
export const PROD_SETTINGS = {
  simulateSubmission: false,
  showDevNotice: false,
};

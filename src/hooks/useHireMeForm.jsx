/**
 * Custom Hook for Hire Me Form
 *
 * Handles project inquiry form submission with proper error handling for both development and production.
 * Uses a separate Formspree endpoint for project-specific inquiries.
 *
 * @returns {Object} Form state and handlers
 */

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Configuration
import {
  HIRE_ME_FORM_ENDPOINT,
  isDevelopment,
  FORMSPREE_CONFIG,
  DEV_SETTINGS,
} from '../config/formspree';

const useHireMeForm = () => {
  const [state, handleSubmit] = useForm(
    HIRE_ME_FORM_ENDPOINT,
    FORMSPREE_CONFIG
  );

  const [isSimulated, setIsSimulated] = useState(false);

  // Handle form submission with environment-specific logic
  const handleFormSubmission = async e => {
    e.preventDefault();

    if (isDevelopment) {
      // Simulate form submission in development
      setIsSimulated(true);

      // Simulate loading state
      await new Promise(resolve =>
        setTimeout(resolve, DEV_SETTINGS.submissionDelay)
      );

      // Reset simulation state after showing success
      setTimeout(() => {
        setIsSimulated(false);
        // Reset form
        e.target.reset();
      }, 3000);

      return;
    }

    // In production, use actual Formspree submission
    handleSubmit(e);
  };

  // Get the appropriate submission state
  const getSubmissionState = () => {
    if (isDevelopment && isSimulated) {
      return {
        submitting: false,
        succeeded: true,
        errors: [],
      };
    }

    return state;
  };

  const submissionState = getSubmissionState();

  return {
    state: submissionState,
    handleSubmit: handleFormSubmission,
    isDevelopment,
    isSimulated,
    ValidationError,
  };
};

export default useHireMeForm;

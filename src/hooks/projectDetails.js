/**
 * Project Data Hook
 * 
 * This file exports project data from the centralized constants.
 * Maintained for backward compatibility with existing components.
 * 
 * @deprecated Use PROJECTS and PROJECT_DETAILS from '../constants/projects' instead
 */

import { PROJECTS, PROJECT_DETAILS } from '../constants/projects';

// Export for backward compatibility
export const projects = PROJECTS;
export const projectDetails = PROJECT_DETAILS;

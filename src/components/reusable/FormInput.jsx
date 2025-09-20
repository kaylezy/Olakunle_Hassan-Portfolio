/**
 * Reusable Form Input Component
 * 
 * A flexible form input component with consistent styling and accessibility features.
 * Supports various input types and validation states.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.inputLabel - Label text for the input
 * @param {string} props.labelFor - ID to associate with the label
 * @param {string} props.inputType - HTML input type
 * @param {string} props.inputId - Unique ID for the input
 * @param {string} props.inputName - Name attribute for the input
 * @param {string} [props.placeholderText] - Placeholder text
 * @param {string} [props.ariaLabelName] - Accessibility label
 * @param {boolean} [props.required=false] - Whether input is required
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onChange] - Change handler function
 * @param {Function} [props.onBlur] - Blur handler function
 * @param {string} [props.value] - Input value
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @returns {JSX.Element} Form input component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  required = false,
  className,
  onChange,
  onBlur,
  value,
  disabled = false,
  ...props
}) => {
  const baseInputStyles = 'w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div className="font-general-regular mb-4">
      <label
        className="block text-lg text-primary-dark dark:text-primary-light mb-2 font-medium"
        htmlFor={labelFor}
      >
        {inputLabel}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        className={cn(baseInputStyles, className)}
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};

FormInput.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  ariaLabelName: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FormInput;

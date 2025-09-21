/**
 * Reusable Button Component
 *
 * A flexible button component with various styles and states.
 * Supports different variants, sizes, and accessibility features.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string|ReactNode} props.title - Button text content (string or JSX element)
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.size='medium'] - Button size
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {string} [props.type='button'] - HTML button type
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.ariaLabel] - Accessibility label
 * @returns {JSX.Element} Button component
 */

import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const Button = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  onClick,
  className,
  ariaLabel,
  ...props
}) => {
  // Button variant styles
  const variants = {
    primary:
      'bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white',
    secondary:
      'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white',
    outline:
      'border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white',
    ghost: 'text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
  };

  // Button size styles
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      aria-label={ariaLabel || title}
      {...props}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;

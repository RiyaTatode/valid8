import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) => {
  const sizeStyles = {
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-semibold',
  };
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    premium: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transform hover:scale-105 shadow-md',
  };
  const baseStyles = 'rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 inline-block text-center';

  return (
    <Component className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;

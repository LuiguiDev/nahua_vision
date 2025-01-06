// src/components/ui/button/Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

interface ButtonProps {
  variant?: 'outline' | 'solid';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  to?: string;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  children,
  onClick,
  disabled = false,
  to,
  className = '',
  type = 'button',
}) => {
  const baseClasses = `base_button ${variant} ${className} ${disabled ? 'disabled' : ''}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};

export default Button;
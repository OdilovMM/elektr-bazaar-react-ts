import React from 'react';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
};

export default CustomButton;

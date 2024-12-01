import React from 'react';
import Button from '@mui/material/Button';

// Ensure props are being passed and used correctly
const ButtonComponent = ({ children, variant, color, size, disabled }) => {
  return (
    <Button variant={variant} color={color} size={size} disabled={disabled}>
      {children}
    </Button>
  );
};

export default ButtonComponent;

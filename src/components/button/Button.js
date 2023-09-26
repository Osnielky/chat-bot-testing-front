import React from 'react';
import Button from '@mui/material/Button';
// CSS Styles (you can also use CSS-in-JS libraries like styled-components)
import './Button.css';

function BTN({ color, variant , onClick, type = 'button', className = '' }) {
    return (
        <Button
            
            type={type}
            className={`custom-button ${className}`}
            onClick={onClick}
        >
            {label}
       esta </Button>
    );
}

export default BTN;




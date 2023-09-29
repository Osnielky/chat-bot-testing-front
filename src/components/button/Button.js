import React from 'react';
import  Button  from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';// CSS Styles (you can also use CSS-in-JS libraries like styled-components)
import './Button.css';

function BTN({ name, label, color, variant, onClickprop, type = 'button', className = '', icon }) {
    return (
        <Button
            startIcon={icon}
            variant={variant}
            type={type}
            className={`custom-button ${className}`}
            onClick={onClickprop}
            
        >
            {label}
       {name} </Button>
    );
}

export default BTN;




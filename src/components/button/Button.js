import React from 'react';
import  Button  from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';// CSS Styles (you can also use CSS-in-JS libraries like styled-components)
import './Button.css';

function BTN({name, label, color, variant , onClick, type = 'button', className = '' }) {
    return (
        <Button
            startIcon={<SendIcon />}
            variant={variant}
            type={type}
            className={`custom-button ${className}`}
            onClick={onClick}
        >
            {label}
       {name} </Button>
    );
}

export default BTN;




import React from 'react';
import  Button  from '@mui/material/Button';


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




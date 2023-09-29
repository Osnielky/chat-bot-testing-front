import { TextField } from '@mui/material';



import React, { useState } from 'react';

// Optional: CSS for styling
//import './TextField.css';

function ImputText({ label, disabled, placeholder = '', onTextChange, value, type = 'text' }) {
    

    const handleInputChange = (e) => {
       
        if (onTextChange) {
            onTextChange(e.target.value);
           
        }
    };

    return (
        <TextField
            disabled= {disabled}
            type={type}
            label={label}
            multiline
            rows={10}
            className="text-field"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
        />
    );
}
export default ImputText;
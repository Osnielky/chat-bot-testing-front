import { TextField } from '@mui/material';



import React, { useState } from 'react';

// Optional: CSS for styling
//import './TextField.css';

function ImputText({ label, disabled, placeholder = '', onChange, value, type = 'text' }) {
    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
            console.log(inputValue);
        }
    };

    return (
        <TextField
            disabled= {disabled}
            type={type}
            label={label}
            multiline
            rows={8}
            className="text-field"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
        />
    );
}
export default ImputText;

import './App.css';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete'
import BTN from './components/button/Button';
import ImputText from './components/ImputText';
import React, { useState } from 'react';
import ChatGPTRequest from './GPT-conn';

function App() {

  const [textValue, setTextValue] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleTextChange = (value) => {
    setTextValue(value);
  };

  const sendTextToChat = () => {
const response = ChatGPTRequest('First' );
    setDisplayedText(response);
  };
  const clearText = () => {
    setTextValue('');
    setDisplayedText('')
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off" >

      <ImputText onTextChange={handleTextChange} value={textValue} label="Your Question to GPT-4" disabled={false}></ImputText>
      <div className="App">

        <BTN name="send"
          icon={<SendIcon />}
          variant="outlined"
          onClickprop={sendTextToChat} >
        </BTN>
        <BTN name="RESTART"
          icon={<RestartAltOutlinedIcon />}
          variant="outlined"
          onClickprop={clearText} >
        </BTN>

        <ImputText label="GPT-4 answer1" value={displayedText} disabled={true}></ImputText>
      </div>
    </Box>
  );
}

export default App;

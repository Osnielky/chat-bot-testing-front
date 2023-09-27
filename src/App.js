
import './App.css';
import Box from '@mui/material/Box';
import BTN from './components/button/Button'; 
import ImputText from './components/ImputText';

function App() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >

    <div className="App">

      <BTN name="send" 
      variant="outlined" 
      onClick={() => {
        alert('clicked');
      }}>

      </BTN>
        <ImputText value = "Example " label="Your Question to GPT-4" disabled = {false}></ImputText>
        <ImputText label= "GPT-4 answer" disabled={true}></ImputText>
      </div> 
      </Box>
  );
}

export default App;

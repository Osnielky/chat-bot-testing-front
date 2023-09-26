
import './App.css';
import BTN from './components/button/Button';

function App() {
  return (
    <div className="App">
     
      <BTN  onClick={() => {
        alert('clicked');
      }}></BTN>

     </div>
  );
}

export default App;

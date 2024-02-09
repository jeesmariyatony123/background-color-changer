
import { useState } from 'react';
import './App.css'
import { Stack, Button } from '@mui/material';


function App() {

  const buttonColors = [{ color: '#d0312d', name: 'Red' },
  { color: '#3bb143', name: 'Green' },
  { color: '#448EE4', name: 'Blue' },
  { color: '#800000', name: 'Maroon' }
  ]; // Predefined colors for buttons
  
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '100%', minHeight: '100vh', backgroundColor }}>
      <h1>Background Color Change</h1>
      <div className="buttons-container pt-3">
        <Stack direction="row" spacing={2}>
          {buttonColors.map((button, index) => (
            <button
              key={index}
              style={{ width: '100px', height: '50px', border: 'none', backgroundColor: button.color, color: 'white' }}
              onClick={() => handleButtonClick(button.color)}
            >
              {button.name}
            </button>
          ))}
        </Stack>
      </div>
    </div>
  )
}

export default App

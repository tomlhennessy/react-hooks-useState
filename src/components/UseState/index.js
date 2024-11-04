import React, { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <h2>DISPLAY COUNT HERE</h2>
      <button>
        Increment
      </button>
      <button>
        Decrement
      </button>
    </div>
  );
};

export default UseState;

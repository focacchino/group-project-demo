import React, { useState } from 'react';
import './App.css'; 

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`DarkMode ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
}

export default DarkMode;

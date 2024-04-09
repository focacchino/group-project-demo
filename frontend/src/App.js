import React from 'react';
import './App.css';
// import { store, persistor } from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import HomePage from './pages/HomePage';
import { PersistGate } from 'redux-persist/integration/react';
import DarkMode from './components/toggledarkmode';

function App() {
  return (
    <>
    <DarkMode />

    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home greeting="Hola, cómo está usté?!" />

    </div>
  );
}

export default App;

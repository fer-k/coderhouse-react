import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Containers/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* <Home greeting="Hola, cómo está usté?!" /> */}

      </div>
      </BrowserRouter>
  );
}

export default App;

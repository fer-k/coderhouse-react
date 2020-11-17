import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './Context/CartContext'

function App() {
  return (
    <CartContext.Provider value={[]}>
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      </BrowserRouter>
      </CartContext.Provider>
  );
}

export default App;

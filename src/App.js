import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './Context/CartContext'

function App() {
  return (
    <CartContext.Consumer>
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      </BrowserRouter>
      </CartContext.Consumer>
  );
}

export default App;

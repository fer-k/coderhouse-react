import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Context/CartContext'

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;

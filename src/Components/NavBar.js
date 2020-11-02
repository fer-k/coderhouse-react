import React from 'react';
import './NavBar.css';
import CartIcon from './CartIcon';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre mí</a></li>
                <li><a href="#"><CartIcon />Tienda</a></li>
                <li><a href="#">Contactame</a></li>
            </ul>
        </div> 
        );
    }

    export default NavBar;
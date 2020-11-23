import React from 'react';
import './NavBar.css';
import CartIcon from './CartIcon';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import About from '../Containers/About';
import Contact from '../Containers/Contact';
import ItemDetailContainer from '../Containers/ItemDetailContainer';
import CartContainer from '../Containers/CartContainer';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Productos</NavLink></li>
                <li><NavLink to="/about">Sobre Nosotros</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
                <li><NavLink to="/cart"><CartIcon/> Carrito</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={CartContainer}/>
                <Route exact path="/:id" component={ItemDetailContainer}/>
            </Switch>
        </div> 
        );
    }

    export default NavBar;
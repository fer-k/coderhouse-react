import React from 'react';
import './NavBar.css';
import CartIcon from './CartIcon';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Containers/Home';
import About from '../Containers/About';
import Contact from '../Containers/Contact';
import ItemDetailContainer from '../Containers/ItemDetailContainer';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/"><CartIcon/>Cart</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" path="/contact" component={Contact}/>
                <Route exact path="/:id" component={ItemDetailContainer}/>
            </Switch>
        </div> 
        );
    }

    export default NavBar;
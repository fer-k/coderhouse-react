import React from 'react';
import SubHeading from '../Components/SubHeading';
import CountContainer from './CountContainer'
import ProductsContainer from './ProductsContainer'

const Home = ({greeting}) => {

    return (
        <div>
            <h1>{greeting}</h1>
            <SubHeading />
            <CountContainer min='0' max='10'/>
            <ProductsContainer />
        </div>
    );
}

export default Home;
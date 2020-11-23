import React from 'react';
import SubHeading from '../Components/SubHeading';
import ProductsContainer from './ProductsContainer'

const Home = ({greeting}) => {

    return (
        <div>
            <h1>{greeting}</h1>
            <SubHeading />
            <ProductsContainer />
        </div>
    );
}

export default Home;
import React from 'react';
import EachProduct from '../Components/EachProduct';
import ProductList from '../ProductList.json';

const ProductsContainer = () => {
    return (
        <EachProduct ProductList={ProductList}/>
    )
}

export default ProductsContainer
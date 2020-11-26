import React from 'react';
import EachProduct from '../Components/EachProduct';
import ProductList from '../ProductList.json';
import { GetDB } from '../tools/firebaseFactory';


const getPromise = (data) => {
    return new Promise((res, rej) => {
        getAll();
    })
}

function getAll() {
    const DB = GetDB();

    const allProducts = DB.collection("item colection");
    
    allProducts 
        .get()
        .then((result) => {

            if(result.size === 0) {
                console.log("no traje nada");
            }

            result.docs.map((doc) => console.log(doc.data()));
        })
        .catch((error) => console.log(error))
        .finally(() => {})
}

const ProductsContainer = () => {

getPromise();    
    return (
        <EachProduct ProductList={allProducts}/>
    )
}

export default ProductsContainer
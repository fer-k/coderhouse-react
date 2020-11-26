import React,{useState, useEffect} from 'react';
import EachProduct from '../Components/EachProduct';
import ProductList from '../ProductList.json';
import { GetDB } from '../tools/firebaseFactory';


const ProductsContainer = () => {


const [SourceProducts, setProducts] = useState([]);

    function getAll() {
        const DB = GetDB();
    
        const allProducts = DB.collection("item colection");
        
        allProducts 
            .get()
            .then((result) => {
    
                if(result.size === 0) {
                    console.log("no traje nada");
                }
    
                result.docs.forEach((doc) => {
                    const news = [doc.data(), ...SourceProducts]
                    setProducts(news);
                    console.log(news)

            });
            })
            .catch((error) => console.log(error))
            .finally(() => {})
    }

    getAll();
    return (
        <EachProduct/>
    )
}

export default ProductsContainer
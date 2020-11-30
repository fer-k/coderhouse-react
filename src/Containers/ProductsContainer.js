import React,{useState, useEffect} from 'react';
//import EachProduct from '../Components/EachProduct';
//import ProductList from '../ProductList.json';
import { GetDB } from '../tools/firebaseFactory';

const getPromise = (data) => {
    return new Promise((res, rej) => {
        return res(data)
    })
}

const ProductsContainer = () => {

    const DB = GetDB();
    const allProducts = DB.collection("item colection");
    const [SourceProducts, setProducts] = useState([]);
    

    useEffect(() => {
        getPromise(() => {
            allProducts 
                .get()
                .then((result) => {
        
                    if(result.size === 0) {
                        console.log("no traje nada");
                    }
        
                    result.docs.map((doc) => setProducts(doc.data()));
                })
                .catch((error) => console.log(error))
                .finally(() => {})
            })        
        })
        
        console.log(SourceProducts.length)

        return (
            SourceProducts.map((item, i) => {
                return <div key={item.id}>
                    <p>{item.title}</p>
            </div>
            }))
}

export default ProductsContainer
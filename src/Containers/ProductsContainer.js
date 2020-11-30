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

    const [SourceProducts, setProducts] = useState([]);
    const DB = GetDB();
    const allProducts = DB.collection("item colection");
    

    useEffect(() => {
        getPromise(() => {
            allProducts 
                .get()
                .then((result) => {
        
                    if(result.size === 0) {
                        console.log("no traje nada");
                    }
        
                    result.docs.map((doc) => {
                        const news = [doc.data(), ...SourceProducts]
                        setProducts(news);
                        
                    });
                })
                .catch((error) => console.log(error))
                .finally(() => {})
            })        
        })
        
        console.log(allProducts)
        return (
        
            allProducts.map((item, i) => {
            
                return <div key={item.id}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                </div>
            }))
            //<EachProduct/>
        
}

export default ProductsContainer

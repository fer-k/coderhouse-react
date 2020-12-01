import React,{useState, useEffect} from 'react';
import EachProduct from '../Components/EachProduct';
//import ProductList from '../ProductList.json';
import { GetDB } from '../tools/firebaseFactory';

/* 
const getPromise = (data) => {
    return new Promise((res, rej) => {
        return res(data)
    })
} */

const ProductsContainer = () => {

    const [SourceProducts, setProducts] = useState([]);
    useEffect(() => {
        const DB = GetDB();
        const allProducts = DB.collection("item colection");
        allProducts
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("no resultados pa")
                }
                setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                console.log("listo")
                console.log(SourceProducts)
            })
    },[])

        console.log(SourceProducts.length)

        return (
            <div>
            <EachProduct ProductList={SourceProducts}/>
           </div>
           )
}

export default ProductsContainer
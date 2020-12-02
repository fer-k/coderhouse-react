import React, {useState, useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail'
//import ProductList from '../ProductList.json';
import {useParams} from 'react-router-dom';
import { GetDB } from '../tools/firebaseFactory';




const ItemDetailContainer = () => {


    
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

    let { id } = useParams();

    const products = SourceProducts.filter((item) => item.id === id)
    console.log(SourceProducts)
    return (
        <div>
            <ItemDetail products={ products }/>
        </div>
    )
}

export default ItemDetailContainer;
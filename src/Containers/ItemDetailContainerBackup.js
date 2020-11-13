import React from 'react';
import ItemDetail from '../Components/ItemDetail'
import ProductList from '../ProductList.json';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {

    const { id } = useParams();
    const product = ProductList.filter(item => item.id === id)
    console.log(product)
    console.log(ProductList)

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;
import React, {useState, useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail'
import ProductList from '../ProductList.json';




const ItemDetailContainer = () => {

    // const { id } = useParams();
    // console.log({id})

    return (
        <div>
            <ItemDetail ProductList={ProductList}/>
        </div>
    )
}

export default ItemDetailContainer;
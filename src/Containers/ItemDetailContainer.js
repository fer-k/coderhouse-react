import React, {useState, useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail'
import ProductList from '../ProductList.json';
import {useParams} from 'react-router-dom';

const getPromise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 1000)
    })
}

const ItemDetailContainer = () => {

    const [SourceData, setSourceData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        getPromise( ProductList ).then(result => setSourceData(result));
    }, [])

    const product = SourceData.filter((item) => item.id === Number(id))
    return (
        <div>
            <ItemDetail product={ product }/>
        </div>
    )
}

export default ItemDetailContainer;
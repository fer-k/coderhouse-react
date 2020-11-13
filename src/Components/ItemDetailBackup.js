import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import CountContainer from '../Containers/CountContainer';

const getPromise = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(data)
        }, 1000)
    })
}

const ItemDetail = ({ProductList}) => {

    
    useEffect(() => {
        getPromise( ProductList ).then(result => setSourceData(result));
    }, [ProductList])

    const [SourceData, setSourceData] = useState([]);
    const { id } = useParams();

    console.log(id);
    console.log(SourceData);



    return (

            SourceData.map((prod, i) => {  
            return <div>
            <h3>{prod.title}</h3>
            <p>Descripción del producto.</p>
            <p>Precio: $123.00.-</p>
            <CountContainer min='0' max='10'/>
            <button>Comprar</button>
        </div>

    }))
}

export default ItemDetail;
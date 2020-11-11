import React from 'react';
import { useParams } from 'react-router-dom';
import CountContainer from '../Containers/CountContainer';


const ItemDetail = () => {
    
    const { id } = useParams();
    
    return (
        <div>
            <h3>{prod.title}</h3>
            <p>Descripción del producto.</p>
            <p>Precio: $123.00.-</p>
            <CountContainer min='0' max='10'/>
            <button>Comprar</button>
        </div>
    )
}

export default ItemDetail;
import React from 'react';
import CountContainer from '../Containers/CountContainer';

const ItemDetail = ({ product }) => {

    return (
        product.map((prod, i) => {
            
            return<div>
                <h3>{prod.title}</h3>
                <p>{prod.description}</p>
                <p>Precio: ${prod.price}</p>
                <CountContainer min='0' max='10'/>
                <button>Comprar</button>
            </div>
            
            
        }
        ))
    }

        
        export default ItemDetail;
import React from 'react';
import CountContainer from '../Containers/CountContainer';

const ItemDetail = ({ product }) => {

    return (
        product.map((prod, i) => {
            
            return<div key={i}>
            <h3>{prod.title}</h3>
            <p>${prod.price}</p>
            </div>
            
            
        }
        ))
    }
    
/*     return (
        <div>
        <h3>{product.title}</h3>
        <p>Descripción del producto.</p>
        <p>Precio: $123.00.-</p>
        <CountContainer min='0' max='10'/>
        <button>Comprar</button>
        </div>
        
        )} */
        
        
        export default ItemDetail;
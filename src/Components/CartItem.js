import React from 'react'
import ItemCounter from './ItemCounter';


const CartItem = (props) => {
console.log(props);
    return (
        
        <div>
            <h3>{props.title}</h3>
            <p>$ {props.price}</p>
        </div>    
    )
}

export default CartItem
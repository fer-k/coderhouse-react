import React from 'react'
import ItemCounter from './ItemCounter';


const CartItem = (props) => {
console.log(props);


    return (
        
        <div key={props.id}>
            <h3>{props.title}</h3>
            <p>$ {props.price}</p>
            <p>{props.amount}</p>
        </div>    
    )
}

export default CartItem
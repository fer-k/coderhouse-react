import React from 'react';
import CartItem from '../Components/CartItem';
import {useCartContext} from '../Context/CartContext'


const CartContainer = () => {

    const {cartList} = useCartContext();

    return (
        <div>
            <h1>Tu pedido es</h1>
            {cartList.map(item => <CartItem {...item} />)}
        </div>
    )
}

export default CartContainer
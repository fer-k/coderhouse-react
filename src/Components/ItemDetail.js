import React, {useState} from 'react';
import ItemCounter from './ItemCounter';
import {useCartContext} from '../Context/CartContext'


const ItemDetail = ({ product },) => {

    const CartContent = useCartContext(cartList, setCartList);
    
    console.log(CartContent);

    const addProduct = () => {
        setCartList([...cartList, product])
    }

    const [counter, setCounter] = useState(1);

    function AddClick() {
        if (counter < numMax) {
            setCounter(counter + 1)
        }
    };
const numMax = 10;    
    const numMin = 0;
    function RemoveClick() {
        if (counter > numMin) {
            setCounter(counter - 1)
        }
    };

    return (
        product.map((prod, i) => {
            
            return<div>
                <h3>{prod.title}</h3>
                <p>{prod.description}</p>
                <p>Precio: ${prod.price}</p>
                <ItemCounter counter={counter} setCounter={setCounter} AddClick={AddClick} RemoveClick={RemoveClick} numMax="10" numMin="0"/>
                <p>Cantidad {counter}</p>
                <button onClick={addProduct}>Comprar</button>
            </div>
            
            
        }
        ))
    }

        
        export default ItemDetail;
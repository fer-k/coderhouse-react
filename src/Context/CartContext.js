import React, { createContext , useContext, useState} from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addProduct = (product) => {
        setCartList([...cartList, product])
    }

    return (
        <CartContext.Provider
            value={{
                cartList,
                addProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
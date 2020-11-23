import React, { createContext , useContext, useState} from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    return (
        <CartContext.Provider
            value={{
                cartList,
                setCartList
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
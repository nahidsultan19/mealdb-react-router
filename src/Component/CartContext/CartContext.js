import React, { useState } from 'react';

export const ContextProvider = React.createContext();

const CartContext = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <ContextProvider.Provider value={[cart, setCart]} >
            {props.children}
        </ContextProvider.Provider >
    );
};

export default CartContext;
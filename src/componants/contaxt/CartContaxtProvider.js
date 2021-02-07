import React, { useEffect, useState } from "react";

export const CartContaxt = React.createContext();

export const CartContaxtProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [pending, setPending] = useState(true);


    useEffect(() => {

        let localItems = JSON.parse(localStorage.getItem("CartItem"))
        setCartItem(() => {
            if (localItems) {
                return localItems
            }
            else {
                return []
            }
        })
        setPending(false)

    }, []);





    // if (pending) {
    //     return <>Loading...</>
    // }
    return (
        <CartContaxt.Provider
            value={{
                cartItem, setCartItem
            }}
        >
            {children}
        </CartContaxt.Provider>
    );
};


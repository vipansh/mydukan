import React from 'react'
import { useState, useEffect, useContext } from "react";
import { CartContaxt } from '../../contaxt/CartContaxtProvider'
import { CheckOutBtn } from './CheckOutBtn'

export const TotalOrder = () => {
    const { cartItem } = useContext(CartContaxt)
    const [totalAmount, setTotalAmount] = useState()

    useEffect(() => {
        const total = cartItem.map(data => {
            return data.count * data.base_cost
        })


        setTotalAmount(total.reduce((a, b) => a + b, 0))

    }, [cartItem])

    return (
        <div className="total-order-bag">
            <div className="cart-grand-total-row"><span>Sub Total</span><span>₹{totalAmount}</span></div>
            <div className="inclusive-tax-row"><span className="c-gray-1">Inclusive of all taxes</span></div>
            <CheckOutBtn />
        </div>
    )
}

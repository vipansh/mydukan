import React, { useContext } from 'react'
import { CartContaxt } from '../contaxt/CartContaxtProvider'
import bagsvg from './img/Bag.svg'

export const Cart = () => {
    const { cartItem } = useContext(CartContaxt)

    return (
        <div className="navbar-cart-badge">
            <span className={`navbar-btn-badge ${cartItem.length === 0 ? "cart-hide" : ""}`} >{cartItem ? cartItem.length : null}</span>
            <img src={bagsvg} alt="bag" className="navbar-cart-img" /><div className="detail-badge">Bag</div>
        </div >
    )
}

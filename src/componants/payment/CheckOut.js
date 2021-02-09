import React, { useState, useContext, useEffect } from 'react'
import { CartContaxt } from '../contaxt/CartContaxtProvider'
import { CheckOutForm } from './CheckOutForm'
import { ConfirmOrder } from './ConfirmOrder'
import { FinalCart } from './FinalCart'
import "./payment.css"
import emptybag from '../Main/UnderDisplay/img/emptybag.svg'
import { Link } from 'react-router-dom'
export const CheckOut = () => {
    const { cartItem, setCartItem } = useContext(CartContaxt)

    const [confirmPageShow, setConfirmPageShow] = useState(false)
    const [emptyCart, setEmptyCart] = useState()

    useEffect(() => {
        if (cartItem.length >= 1) {
            setEmptyCart(false)
        }
        else {
            setEmptyCart(true)

        }
    }, [cartItem, confirmPageShow])

    return (
        <div>
            <div className="main-content-wrap">
                <main className={`main-container-checkout  ${emptyCart ? "hidden-div" : null}`} >
                    <div className={`container cart-page ${!confirmPageShow ? null : "hidden-div"}`} >
                        <div className="checkout-section">
                            <CheckOutForm setConfirmPageShow={setConfirmPageShow} />
                        </div>
                        <section className="cart-sidebar">
                            <div className="cart-sidebar-header-wrap card-1">
                                <FinalCart />
                            </div>
                        </section>
                    </div>
                    <div className={confirmPageShow ? null : "hidden-div"}>

                        <ConfirmOrder />
                    </div>
                </main>
                <main className={`main-container-checkout ${emptyCart ? null : "hidden-div"}`}>
                    <div className="empty-order-bag  ">

                        <img src={emptybag} alt="noProduct" className="empty-cart-img" />
                        <div className="cart-text">
                            <h2 className="empty-order-text"> Your bag is empty</h2>
                            <p className="empty-order-text-p">  Looks like you haven’t made your choice yet.</p>
                        </div>
                        <Link className="btn-primary-0" to="/">Back to homepage</Link>
                    </div>
                </main>
            </div>
        </div>
    )
}

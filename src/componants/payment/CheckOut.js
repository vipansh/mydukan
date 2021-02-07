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

    const [confirmPageShow, setConfirmPageShow] = useState(true)
    const [emptyCart, setEmptyCart] = useState()

    useEffect(() => {
        if (cartItem.length >= 1) {
            setEmptyCart(true)
        }
        else {
            setEmptyCart(false)

        }
    }, [cartItem])

    return (
        <div>
            <div class="main-content-wrap">
                <main class="main-container-checkout" >
                    <div class={`container cart-page ${emptyCart || confirmPageShow ? "hidden-div" : null}`}>
                        <div class="checkout-section">
                            <CheckOutForm />
                        </div>
                        <section class="cart-sidebar">
                            <div class="cart-sidebar-header-wrap card-1">
                                <FinalCart />
                            </div>
                        </section>
                    </div>
                    <div class={confirmPageShow ? null : "hidden-div"}>

                        <ConfirmOrder />
                    </div>
                </main>
                <main class={`main-container-checkout ${!emptyCart ? null : "hidden-div"}`}>
                    <div className="empty-order-bag  ">

                        <img src={emptybag} alt="noProduct" style={{ height: "189px", width: "13vw" }} />
                        <div className="cart-text">
                            <h2 className="empty-order-text"> Your bag is empty</h2>
                            <p className="empty-order-text-p">  Looks like you haven’t made your choice yet.</p>
                        </div>
                        <Link class="btn-primary-0" to="/">Back to homepage</Link>
                    </div>
                </main>
            </div>
        </div>
    )
}

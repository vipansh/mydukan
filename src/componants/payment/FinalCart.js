import React from 'react'
import { useContext, useState, useEffect } from "react";
import { CartContaxt } from '../contaxt/CartContaxtProvider';
import { Order } from '../Main/Order/Order';
import { GrandTotal } from './GrandTotal';
export const FinalCart = () => {

    const { cartItem, setCartItem } = useContext(CartContaxt)
    const [empty, setEmpty] = useState(false)
    const [totalAmount, setTotalAmount] = useState()
    const [totalSave, setTotalSave] = useState()

    function clearCart() {
        setCartItem([])
        localStorage.clear()
    }





    useEffect(() => {
        const total = cartItem.map(data => {
            return data.count * data.base_cost
        })
        const totalSave = cartItem.map(data => {
            return data.count * data.original_cost
        })

        setTotalAmount(total.reduce((a, b) => a + b, 0))
        setTotalSave(totalSave.reduce((a, b) => a + b, 0))

    }, [cartItem])


    useEffect(() => {
        if (cartItem.length !== 0) {
            setEmpty(true)
        }
        else {
            setEmpty(false)

        }
    }, [cartItem])


    return (
        <div >
            <div className="empty-order">
                <div className="count-bag">

                    <div className="cart-count-badge">Bag<span className="cart-count-badge-value">{cartItem ? cartItem.length : 0}</span> </div>
                    <div className="clear-count-bag" onClick={() => { clearCart() }}>
                        <div className="clear-bag">Clear Bag</div>
                    </div>
                </div>



                <div className={`order-view  `}>

                    <div className={`empty-order-bag  ${!empty ? " cart-hide " : ""}`} >
                        {cartItem ? cartItem.map((data, i) => {
                            return (<Order data={data} key={i} showImg={false} />)
                        }) : null}
                        <div class="cart-item-total">
                            <div class="item-total-row">
                                <span>Item Total</span>
                                <span>₹{totalAmount}</span>
                            </div>
                            <div class="item-delivery-row">
                                <span>Delivery</span>
                                <span>
                                    <span class="c-green-1">Free</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <GrandTotal totalAmount={totalAmount} totalSave={totalSave} />
            </div>


        </div>)
}

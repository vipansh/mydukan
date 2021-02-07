import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { CartContaxt } from '../../contaxt/CartContaxtProvider'
import { Order } from '../Order/Order'
import { TotalOrder } from '../Order/TotalOrder'

import emptybag from './img/emptybag.svg'

export const OrderList = () => {

    const { cartItem, setCartItem } = useContext(CartContaxt)
    const [empty, setEmpty] = useState(false)


    function clearCart() {
        setCartItem([])
        localStorage.clear()
    }





    useEffect(() => {
        if (cartItem.length !== 0) {
            setEmpty(true)
        }
        else {
            setEmpty(false)

        }
    }, [cartItem])


    return (
        <div>
            <div className="empty-order">
                <div className="count-bag">

                    <div className="cart-count-badge">Bag<span className="cart-count-badge-value">{cartItem ? cartItem.length : 0}</span> </div>
                    <div className="clear-count-bag" onClick={() => { clearCart() }}><div className="clear-bag">Clear Bag</div></div>
                </div>


                {/* if cart is empty display this */}
                <div className={`empty-order-bag  ${empty ? " cart-hide " : ""}`}>

                    <img src={emptybag} alt="noProduct" style={{ height: "189px", width: "13vw" }} />
                    <div className="cart-text">
                        <h2 className="empty-order-text"> Your bag is empty</h2>
                        <p className="empty-order-text-p">  Looks like you haven’t made your choice yet.</p>
                    </div>
                </div>

                {/* if cart is not empty display this */}

                <div className={`empty-order-bag  ${!empty ? " cart-hide " : ""}`}>

                    <div className={` order-view`} >
                        {cartItem ? cartItem.map((data, i) => {
                            return (<Order data={data} key={i} showImg={false} />)
                        }) : null}


                    </div>
                    <div style={{width:"100%"}}>
                        <TotalOrder />
                    </div>
                </div>
            </div>



        </div>
    )
}

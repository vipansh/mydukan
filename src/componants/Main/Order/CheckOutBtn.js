import React from 'react'
import { Link, } from "react-router-dom";
export const CheckOutBtn = () => {
    return (
        <div className="btn-checkout">
            <Link className="btn-primary-1" to="/bag">Proceed to Checkout</Link>
        </div>
    )
}

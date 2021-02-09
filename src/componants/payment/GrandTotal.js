import React from 'react'

export const GrandTotal = ({ totalAmount, totalSave }) => {



    return (
        <div>
            <div className="cart-order-total">
                <div className="cart-grand-total-row">
                    <span>Grand Total</span>
                    <span>₹{totalAmount}</span>
                </div>
                <div className="inclusive-tax-row">
                    <span className="c-gray-1">Inclusive of all taxes</span>
                </div>
            </div>
            <div className="cart-savings">You will save ₹ {totalSave -
                totalAmount} on this order</div>
        </div>
    )
}

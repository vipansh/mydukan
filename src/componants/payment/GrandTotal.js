import React from 'react'

export const GrandTotal = ({ totalAmount, totalSave }) => {



    return (
        <div>
            <div class="cart-order-total">
                <div class="cart-grand-total-row">
                    <span>Grand Total</span>
                    <span>₹{totalAmount}</span>
                </div>
                <div class="inclusive-tax-row">
                    <span class="c-gray-1">Inclusive of all taxes</span>
                </div>
            </div>
            <div class="cart-savings">You will save ₹ {totalSave -
                totalAmount} on this order</div>
        </div>
    )
}

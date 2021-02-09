import React from 'react'
import { Link } from 'react-router-dom'

export const ConfirmOrder = () => {
    return (
        <div className="order-success-page">

            <div className="fade-in">
                <h4 className="section-text-4 mt18">Your order is confirmed!</h4>
                <p className="text-2 c-gray-1 mt6 pb30">You will recieve a confirmation message shortly. For more details,<br /> check order status on your WhatsApp.</p>
                <div className="order-success-buttons">
                    <Link className="btn-outline-primary-0 track-order-btn" href="/trackOrder/4e71efe6-35c5-4ff1-8d14-fc455176da75">Track order</Link>
                    <Link className="btn-primary-0 continue-shoping-btn" to="/">Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const ConfirmOrder = () => {
    return (
        <div class="order-success-page">

            <div class="fade-in">
                <h4 class="section-text-4 mt18">Your order is confirmed!</h4>
                <p class="text-2 c-gray-1 mt6 pb30">You will recieve a confirmation message shortly. For more details,<br /> check order status on your WhatsApp.</p>
                <div class="order-success-buttons">
                    <Link class="btn-outline-primary-0 track-order-btn" href="/trackOrder/4e71efe6-35c5-4ff1-8d14-fc455176da75">Track order</Link>
                    <Link class="btn-primary-0 continue-shoping-btn" to="/">Continue shopping</Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './footer.css'

import buyerProtection from "./img/buyerProtection.svg"
import customerSupport from "./img/customerSupport.svg"
import freedelivery from "./img/freedelivery.svg"
import chatWihUs from "./img/chatWithUs.svg"
export const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer-container">
                <div className="footer-container-flex">
                    <img src={freedelivery} alt="buyerProtection" />
                    <p>Free Delivery</p>
                </div>
                <div className="footer-container-flex">
                    <img src={buyerProtection} alt="customerSupport" />
                    <p>Buyer Protection</p>

                </div>
                <div className="footer-container-flex">
                    <img src={customerSupport} alt="freedelivery" />
                    <p>Customer Support</p>

                </div>
            </div>
            <div className="footer-store-details">

                <div className="store-details-header"> STORE DETAILS</div>
                <div className="section-text-1">Dukan</div>
                <div><img src={chatWihUs} alt="chatWihUs" /></div>
            </div>

        </div>
    )
}

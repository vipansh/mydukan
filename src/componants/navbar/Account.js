import React from 'react'
import usersvg from './img/user.svg'

export const Account = () => {
    return (
        <div className="navbar-cart-badge">
                <img src={usersvg} alt="user" className="navbar-cart-img" /><div className="detail-badge">Account</div>
        </div>
    )
}

import React from 'react'
import logoimg from './img/store-logo.jpg'
import "./styles/navbar.css"
import { Cart } from './Cart'
import { Account } from './Account'
export const NavBar = () => {
    return (
        <div className="header">

            <div className="navbar">
                <div className="navbar-container">

                    <div className="navbar-title">
                        <img src={logoimg} alt="logoimg" className="logo-img" style={{ width: "4rem" }} /> <span className="detail">Dukan</span>
                    </div>
                    <div className="navbar-cart">
                        <Cart />
                        <Account />
                    </div>
                </div>


            </div>
        </div>

    )
}

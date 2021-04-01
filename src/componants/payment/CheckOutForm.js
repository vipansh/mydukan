import React, { useState, useEffect } from 'react'

export const CheckOutForm = ({ setConfirmPageShow }) => {
    const [showAddressForm, setShowAddressForm] = useState(false)

    const [loginDone, setloginDone] = useState(false)

    const [showPaymentForm, setShowPaymentForm] = useState(false)

    const [loginPhoneNo, setLoginPhoneNo] = useState("")
    const [loginErr, setLoginErr] = useState(false)

    const [address, setAddress] = useState({
        name: "",
        number: loginPhoneNo,
        pinCode: "",
        city: "",
        address: ""
    })


    useEffect(() => {
        let islogin = JSON.parse(localStorage.getItem('login'));
        console.log(showAddressForm)
        if (islogin) {
            setShowAddressForm(true)
            setloginDone(true)
            setLoginPhoneNo(islogin)
        }
        else {
            setShowAddressForm(false)
            setloginDone(false)
        }

        let oldAddress = JSON.parse(localStorage.getItem('address'));
        if (oldAddress) {
            setAddress(oldAddress)
        }



    }, [])



    function LogIn(e) {
        e.preventDefault()


        if (loginPhoneNo.length !== 10) {
            setLoginErr(true)
        }
        else {

            setloginDone(true)
            setShowAddressForm(true)
            localStorage.setItem('login', JSON.stringify(loginPhoneNo));
        }

    }


    function handelChangeforAddress(e) {
        setAddress((address) => {
            return { ...address, [e.target.name]: e.target.value }
        })
    }

    function AddAddress(e) {

        localStorage.setItem('address', JSON.stringify(address));
        e.preventDefault()
        setShowAddressForm(false)
        setShowPaymentForm(true)
    }


    return (

        <div className="checkout-section">
            <form autoComplete="off">
                <p className="text-2 c-gray-1">Don`t enter in input filed Login for now</p>
                <div className="checkout-step-wrap active">
                    <div className="checkout-step-circle active">1</div>
                    <section className="card-1 account-card">
                        <h2 className="section-text-7 mb2">Account</h2>
                        <p className="text-2 c-gray-1">To place your order, log in by entering your 10 digit mobile number.</p>
                        {/* log-In form.... */}

                        <div className={`login-form-wrap ${loginDone ? "hidden-form" : "show-form"}`}>


                            <div className="form-group input-wrap has-prepend-text form-group-lg">
                                <label className="field-label required">Mobile Number</label>
                                <div className="input-group-wrap  login-form-flex ">
                                    <div>
                                        <span className="prepend-txt">+91</span>
                                        <input inputMode="numeric" name="mobile" placeholder="88******89" maxLength="10" autoComplete="off" type="tel" value={loginPhoneNo} onChange={(e) => {
                                            setLoginPhoneNo(e.target.value)
                                            setLoginErr(false)
                                        }} />
                                        {loginErr ? <div className="err-box">Incorrect Phone No.</div> : null}
                                    </div>
                                    <div>
                                        <button type="submit" className="btn-login" disabled="" onClick={(e) => { LogIn(e) }}>Login</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p className={`text-2 c-gray-1 ${!loginDone ? "hidden-form" : "show-form"}`}>You are securely logged in.</p>
                    </section>
                </div>

                <div className="checkout-step-wrap inactive">
                    <div className="checkout-step-circle inactive">2</div>
                    <section className="card-1 delivery-address-card">
                        <h2 className="section-text-7 mb2 d-flex-c-s">Delivery address</h2>
                        <p className="text-2 c-gray-1">Select your payment method from the existing one or add new one.</p>

                        <div className={`login-form-wrap ${showAddressForm ? "show-form" : "hidden-form"}`}>

                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap form-group-lg">
                                        <label className="field-label required">Name</label>
                                        <input name="name" placeholder="Enter name" maxLength="50" autoComplete="off" type="text" value={address.name} onChange={(e) => { handelChangeforAddress(e) }} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap has-prepend-text form-group-lg">
                                        <label className="field-label required">Mobile Number</label>
                                        <div className="input-group-wrap">
                                            <span className="prepend-txt">+91</span>
                                            <input inputMode="numeric" name="number" maxLength="10" type="tel" value={address.number} onChange={(e) => { handelChangeforAddress(e) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap form-group-lg">
                                        <label className="field-label required">Pincode</label>
                                        <div className="input-group-wrap">
                                            <input inputMode="numeric" name="pinCode" placeholder="Enter pincode" maxLength="6" autoComplete="off" type="tel" value={address.pinCode} onChange={(e) => { handelChangeforAddress(e) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap form-group-lg">
                                        <label className="field-label required">City</label>
                                        <input name="city" placeholder="Enter city" maxLength="40" autoComplete="off" type="text" value={address.city} onChange={(e) => { handelChangeforAddress(e) }} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group textarea-wrap form-group-lg">
                                <label className="field-label required">Address</label>
                                <textarea name="address" placeholder="Enter address" maxLength="300" rows="2" autoComplete="off" value={address.address} onChange={(e) => { handelChangeforAddress(e) }} >
                                </textarea>
                            </div>
                            <div className="text-right pt8 address-form-button-wrap">
                                <button type="submit" className="btn-login" disabled=""
                                    onClick={(e) => { AddAddress(e) }}>Save and continue</button>
                            </div>

                        </div>

                    </section>
                </div>

                <div className="checkout-step-wrap inactive">
                    <div className="checkout-step-circle inactive">3</div>
                    <section className="card-1 payment-card">
                        <h2 className="section-text-7 mb2">Payment</h2>
                        <p className="text-2 c-gray-1">Select your payment method.</p>
                        <div className={`login-form-wrap ${!showPaymentForm ? "hidden-form" : "show-form"}`}>
                            <div className="payment-modes row"><div className="payment-mode "><h5 className="cash-text-1">Cash</h5></div>
                                <button className="btn-login" type="button" onClick={(e) => {
                                    e.preventDefault()
                                    setConfirmPageShow(true)
                                }}>Confirm order</button>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    )
}

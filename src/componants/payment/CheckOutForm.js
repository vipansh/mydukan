import React, { useState } from 'react'

export const CheckOutForm = ({ setConfirmPageShow }) => {

    const [loginDone, setloginDone] = useState(false)
    const [showAddressForm, setShowAddressForm] = useState(false)
    const [showPaymentForm, setShowPaymentForm] = useState(false)




    return (

        <div className="checkout-section">
            <form autocomplete="off">
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
                                        <input inputmode="numeric" name="mobile" placeholder="88******89" maxlength="10" autocomplete="off" type="tel" value="" />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn-login" disabled="" onClick={(e) => {
                                            e.preventDefault()
                                            setloginDone(true)
                                            setShowAddressForm(true)
                                        }}>Login</button>
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

                        <div className={`login-form-wrap ${!showAddressForm ? "hidden-form" : "show-form"}`}>

                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap form-group-lg">
                                        <label className="field-label required">Name</label>
                                        <input name="name" placeholder="Enter name" maxlength="50" autocomplete="off" type="text" value="" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap has-prepend-text form-group-lg">
                                        <label className="field-label required">Mobile Number</label>
                                        <div className="input-group-wrap">
                                            <span className="prepend-txt">+91</span>
                                            <input inputmode="numeric" name="mobile" placeholder="Enter mobile number" autocomplete="off" maxlength="10" type="tel" value="8894968567" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap form-group-lg">
                                        <label className="field-label required">Pincode</label>
                                        <div className="input-group-wrap">
                                            <input inputmode="numeric" name="pin" placeholder="Enter pincode" maxlength="6" autocomplete="off" type="tel" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="form-group input-wrap form-group-lg">
                                        <label className="field-label required">City</label>
                                        <input name="city" placeholder="Enter city" maxlength="40" autocomplete="off" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group textarea-wrap form-group-lg">
                                <label className="field-label required">Address</label>
                                <textarea name="line" placeholder="Enter address" maxlength="300" rows="2" autocomplete="off">
                                </textarea>
                            </div>
                            <div className="text-right pt8 address-form-button-wrap">
                                <button type="submit" className="btn-login" disabled=""
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setShowAddressForm(false)
                                        setShowPaymentForm(true)
                                    }}>Save and continue</button>
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

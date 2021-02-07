import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { CartContaxt } from '../contaxt/CartContaxtProvider'
import './addbtn.css'
export const AddBtn = ({ product }) => {

    const { cartItem, setCartItem } = useContext(CartContaxt)

    const [showaddbutton, setShowaddbutton] = useState(true)

    const [productCount, setProductCount] = useState()



    useEffect(() => {
        let currentFoundProduct = cartItem.find(data => (product.id === data.id))
        if (currentFoundProduct) {

            setProductCount(currentFoundProduct.count)
            setShowaddbutton(false)
        }
        else{
            setShowaddbutton(true)

        }

    }, [cartItem])




    function addItem(product) {

        const updatedcart = [...cartItem];

        const items = { ...product }



        if (cartItem === null) {
            items.count = 1
            updatedcart.push(items)

            localStorage.setItem("CartItem", JSON.stringify(updatedcart))
            setCartItem(updatedcart)

        } else {

            let currentFoundProduct = updatedcart.find(data => (items.id === data.id))

            if (currentFoundProduct) {

                // If already there increase count
                currentFoundProduct.count += 1;

                // update localStorage cart ...

                localStorage.setItem("CartItem", JSON.stringify(updatedcart))

                setCartItem(updatedcart)



            } else {

                // Otherwise put count = 1;
                const productToBeAdded = { ...product, count: 1 };


                let exesting = [...updatedcart, productToBeAdded]
                localStorage.setItem("CartItem", JSON.stringify(exesting))
                setCartItem(exesting)

            }

        }

        setShowaddbutton(false)


    }





    function minusOne() {
        const updatedcart = [...cartItem];

        let items = { ...product }

        let localItems = JSON.parse(localStorage.getItem("CartItem"))

        let currentFoundProduct = updatedcart.find(data => (items.id === data.id))

        if (currentFoundProduct.count > 1) {

            // If already there decrease count

            currentFoundProduct.count -= 1;
            setCartItem(updatedcart)



        }
        else {
            const newList = updatedcart.filter(data => {
                return data.id !== currentFoundProduct.id
            })

            let exesting = [...newList]

            localStorage.setItem("CartItem", JSON.stringify(exesting))
            setCartItem(exesting)

            setShowaddbutton(true)

        }

    }

    return (
        <div>
            <div className={`product-add-button  ${showaddbutton ? "show" : "hide"}`} aria-label="Add Product" onClick={() => { addItem(product) }}>
                <span className="product-add-btn">ADD </span>
                <span className="plus-btn" > + </span>
            </div>




            {/* plus-minus-btn */}
            <div class={`product-button product-add-button-wrapper  ${!showaddbutton ? "show" : "hide"} `}>
                <div class="minus-icon-wrap" aria-label="Remove Product" onClick={() => { minusOne() }} >
                    <span className="m-l6" > - </span>
                </div>
                <div class="qty-wrap">{productCount ? productCount : null}</div>
                <div class="plus-icon-wrap" aria-label="Add Product" onClick={() => { addItem(product) }}>

                    <span className="m-l6" > + </span>
                </div>
            </div>

        </div >
    )
}

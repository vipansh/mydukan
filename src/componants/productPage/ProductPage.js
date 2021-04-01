import React from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../../data';
import { Account } from '../navbar/Account.js';
import { Cart } from '../navbar/Cart.js';
import { AboutProductInPage } from './AboutProductInPage';
import "./productpage.css";


export const ProductPage = () => {
    let { category, id } = useParams();
    const [categoryName, setcategoryName] = React.useState()
    const [product, setProduct] = React.useState("a")
    const [noProduct, setNoProduct] = React.useState(true)
    React.useEffect(() => {
        const all_products = [...data.all_products]

        const AboutProduct = all_products.find(data => (category === data.category_id))

        if (AboutProduct) {
            setcategoryName(AboutProduct.category_name)
            const products = AboutProduct.products
            const currentFoundProduct = products.find(data => (id === data.id))
            if (currentFoundProduct) {
                setProduct(currentFoundProduct)
            }
            else {
                setNoProduct(false)
            }
        }
        else {
            setNoProduct(false)
        }
    }, [])

    if (noProduct) {


        return (
            <>

                <div className="custom-header-title-wrap">
                    <div className="navbar">
                        <div className="navbar-container">

                            <Link to="/" className="custom-title-text ">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzFBMTgxRSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNjkgMy44OGMuMzk2LS4zODYgMS4wMjktLjM3OSAxLjQxNS4wMTYuMzU2LjM2NC4zNzguOTMyLjA2OCAxLjMybC0uMDg0LjA5NC04LjU1IDguMzZjLS4zNTkuMzUtLjkxNS4zNzgtMS4zMDUuMDgxbC0uMDkzLS4wODEtOC41NS04LjM2Yy0uMzk1LS4zODYtLjQwMi0xLjAyLS4wMTYtMS40MTQuMzU2LS4zNjUuOTIzLS4zOTkgMS4zMTktLjA5OGwuMDk1LjA4MiA3Ljg1MSA3LjY3NSA3Ljg1LTcuNjc1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2IC05NSkgdHJhbnNsYXRlKDE2IDk1KSB0cmFuc2xhdGUoMSAzKSByb3RhdGUoOTAgNC44NCA4Ljc3NSkiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEuNzggNy43NzVjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzbC0uMTE3LjAwN0guNjZjLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M2wuMTE3LS4wMDdoMjEuMTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYgLTk1KSB0cmFuc2xhdGUoMTYgOTUpIHRyYW5zbGF0ZSgxIDMpIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="<-" className="mr12" />
                                <span className="text-ellipsis" >{categoryName}</span>
                            </Link>


                            <div className="navbar-cart-mobile">
                                <Cart />
                                <Account />
                            </div>
                        </div>

                    </div>

                    <AboutProductInPage data={product} />
                </div>


            </>
        )
    }


    return (
        <div>
            No Product found
        </div>
    )
}


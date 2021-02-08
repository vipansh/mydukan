import React from 'react'
import { Products } from '../ProductList/Products'

export const ProductList = () => {
    return (
        <>

            {/* <div className="no-product">
                <img src={noProduct} alt="noProduct" />
            <h2 className="no-prod-found">No product found</h2>
            </div> */}

            <div className="product-view-main">

                <Products />
            </div>
        </>
    )
}

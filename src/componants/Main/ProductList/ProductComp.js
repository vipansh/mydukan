import React from 'react'
import { AddBtn } from '../../AddBtn/AddBtn'

export const ProductComp = ({ data, showImg }) => {
    return (
        <li className="element-product" >

            <span className={`product-img-wrap ${!showImg ? "cart-hide" : ""}`}>
                <img src="https://api.mydukaan.io/static/images/category-def.jpg" alt={data.name} />
                <div class="discount-badge-wrap">
                    <span class="product-discount-badge">
                        {Math.floor(100 - ((data.base_cost / data.original_cost) * 100))}% OFF
                            </span>
                </div>
            </span>
            <div className="product-discription"> <span className="product-name-txt">   {data.name}</span>
                <p class="prod-unit-txt">per piece</p>

                <span className="product-cost">
                    <div>
                        <span className="selling-cost">₹{data.base_cost}</span>
                        <span className="original-cost">₹{data.original_cost}</span>
                    </div>
                    <div>
                        <span ><AddBtn product={data} /></span>
                    </div>
                </span>
            </div>
        </li>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { AddBtn } from '../../AddBtn/AddBtn'

export const ProductComp = ({ data, showImg, category }) => {
    return (
        <li className="element-product"  >
            <span className={`product-img-wrap ${!showImg ? "cart-hide" : ""}`}>
                <Link to={`/product/${category}/${data.id}`} className="product-img-wrap" >
                    <img src={data.image} alt={data.name} />
                </Link>
                <div className="discount-badge-wrap">
                    <span className="product-discount-badge">
                        {Math.floor(100 - ((data.base_cost / data.original_cost) * 100))}% OFF
                            </span>
                </div>
            </span>
            <div className="product-discription">
                <Link to={`/product/${category}/${data.id}`} className="product-name-txt" >    {data.name}
                </Link>
                <p className="prod-unit-txt">per piece</p>

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

import React from 'react'
import { AddBtn } from '../../AddBtn/AddBtn'
import './order.css'
export const Order = ({ data }) => {
    return (
        < div className="element-product-order" >


            <div className="product-order-discription"> <span className="product-order-name-txt">   {data.name}</span>
                <p className="prod-unit-txt">per piece</p>

                <span className="product-order-cost">
                    <div>
                        <span className="selling-cost">₹{data.base_cost * data.count}</span>
                        <span className="original-cost">₹{data.original_cost * data.count}</span>
                    </div>
                    <div>
                        <span ><AddBtn product={data} /></span>
                    </div>
                </span>
            </div>
        </div >


    )
}

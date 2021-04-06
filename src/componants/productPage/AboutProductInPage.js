import React from 'react'
import { AddBtn } from '../AddBtn/AddBtn'

export const AboutProductInPage = ({ data }) => {

console.log(data)
if(data){

    return (
        <div className="product-page-container">
            <div className="product-page-container-flex">
                <div className="product-page-img-div">
                    <img src={data.image} alt="" className="product-page-img" />
                </div>
                <div className="product-page-data">
                    <div className="product-information-section">
                        <div className="element-product"  >

                            <div className="product-discription">
                                <span className="product-name-txt" >    {data.name}
                                </span>
                                <p className="prod-unit-txt">per piece</p>

                                <span className="product-cost">
                                    <div>
                                        <span className="selling-cost">₹{data.base_cost}</span>
                                        <span className="original-cost">₹{data.original_cost}</span>
                                        <span className="product-discount-badge">
                                            {Math.floor(100 - ((data.base_cost / data.original_cost) * 100))}% OFF
                                             </span>
                                    </div>
                                    <div>
                                        <span ><AddBtn product={data} /></span>
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
return(
    <div>Loading</div>
)
}

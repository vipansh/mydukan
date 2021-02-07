import React from 'react'
import { ProductComp } from './ProductComp'

export const AboutProduct = ({ data }) => {
    return (
        <ul className="about-product">

            {data.map((data, i) => {
                return (<ProductComp data={data} showImg={true} />)
            })}
        </ul>
    )
}

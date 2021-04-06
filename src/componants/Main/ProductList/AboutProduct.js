import React from 'react'
import { ProductComp } from './ProductComp'

export const AboutProduct = ({ data, category }) => {
console.log(data)

    return (
        <ul className="about-product">

            {data.map((data, i) => {
                return (<ProductComp data={data} showImg={true} category={category} key={i} />)
            })}
        </ul>
    )
}

import React, { useEffect } from 'react'
import data from '../../../data.js'
import { ProductList } from './ProductList.js'
import "./product.css";
export const Products = () => {




    const [products, setProducts] = React.useState()

    useEffect(() => {
        setProducts(data.all_products)
    }, [])

    return (
        <div className="product-view">
            {products ? products.map((data, i) => {
                return (<ProductList data={data} key={i} />)
            }) : null}
        </div>
    )
}

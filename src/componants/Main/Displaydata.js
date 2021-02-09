import React, { useContext } from 'react'
import { Categories } from './UnderDisplay/Categories'
import { OrderList } from './UnderDisplay/OrderList'
import { ProductList } from './UnderDisplay/ProductList'
import './Style.css'
export const Displaydata = () => {

    return (
        <div className="main-container">
            <div className="flex">
                <div className="flex-1">  <Categories /></div>
                <div className="flex-2"><ProductList /></div>
                <div className="flex-3">  <OrderList /></div>
            </div>

        </div>
    )
}

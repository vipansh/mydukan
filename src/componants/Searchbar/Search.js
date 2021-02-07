import React from 'react'
import "./Search.css"
export const Search = () => {
    return (
        <div className="searchbar-container">
            <div className="product-search-bar">

                <input type="text" value="" placeholder="Search for products..." className="search-input"></input>
            </div>
        </div>
    )
}

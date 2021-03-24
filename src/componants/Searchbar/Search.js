import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import "./Search.css"

export const Search = () => {
    let history = useHistory();
    const [searchInput, setSearchInput] = useState("")

    function searchThis(e) {



        e.preventDefault();
        if (searchInput.trim().length) {
            history.push(`search/${searchInput}`);
        }



    }





    return (
        <div className="searchbar-container">
            <div className="product-search-bar">
                <input type="text" autoComplete="off" value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} placeholder="Search for products..." className="search-input"></input> <button type="submit" class="searchButton" onClick={(e) => { searchThis(e) }}>
                    <svg style={{ width: "1rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

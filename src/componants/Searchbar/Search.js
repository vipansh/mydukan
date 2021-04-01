import React, { useEffect, useState, useCallback } from 'react'
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
            <form className="product-search-bar" onSubmit={(e) => { searchThis(e) }}>
                <input type="text" autoComplete="off" value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} placeholder="Search for products..." className="search-input"></input>
                <button type="submit" className="searchButton" onClick={(e) => { searchThis(e) }}>
                    <svg style={{ width: "1rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

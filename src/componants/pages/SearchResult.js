import React, { useEffect, useState } from "react";
import data from "../../data.js";
import { Link, useParams } from "react-router-dom";
import { ProductComp } from "../Main/ProductList/ProductComp.js";
import { NavBar } from "../navbar/NavBar.js";
import { Search } from "../Searchbar/Search.js";

export const SearchResult = () => {
  let { value } = useParams();

  console.log(value);

  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    const arr = [];

    const all_product = [...data.top_products];

    all_product.forEach((item, index) => {
      item.products.forEach((data, index) => {
        if (data.name.includes(value.toUpperCase())) {
          arr.push({ ...data, category: item.category_id });
        }
      });
    });
    console.log(arr);

    setSearchArray(arr);
  }, []);

  return (
    <>
      <NavBar />
      {searchArray.length >= 1 ? (
        <div className="search-container">
          <div className="search-container_homelink">
            <div>
              <Link to="/" className="container_homelink">
                ← Back to home
              </Link>
            </div>
            <div>
              {searchArray.length} result found for "
              <span className="font-bold">{value}</span>""
            </div>
          </div>

          <ul className="about-product">
            {searchArray.map((data, i) => {
              return (
                <ProductComp
                  data={data}
                  showImg={true}
                  key={i}
                  category={data.category}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="216"
            height="128"
            viewBox="0 0 216 128"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="#EE741F"
                d="M119 29a7 7 0 110 14h64a7 7 0 110 14h22a7 7 0 110 14h-19a7 7 0 100 14h6a7 7 0 110 14h-52a7.056 7.056 0 01-1.5-.161A7.056 7.056 0 01137 99H46a7 7 0 110-14H7a7 7 0 110-14h40a7 7 0 100-14H22a7 7 0 110-14h40c-3.866 0-1.033-3.134-1.033-7s5.799-5.67 9.665-5.67L119 29zm90 56a7 7 0 110 14 7 7 0 010-14z"
                opacity="0.1"
              ></path>
              <g
                fill="#FFF"
                stroke="#EE741F"
                strokeLinecap="round"
                strokeWidth="2.75"
                transform="translate(54 6)"
              >
                <circle cx="52.8" cy="52.8" r="52.8"></circle>
                <path d="M107.134 115.086L86.79 94.49"></path>
                <path
                  d="M30.03 80.751C35.134 72.892 43.66 68.2 52.843 68.2c9.121 0 17.618 4.641 22.727 12.419-11.525-17.652-35.748-15.496-45.54.132zM77.55 47.3c-5.468 0-9.9-4.432-9.9-9.9h19.8c0 5.468-4.432 9.9-9.9 9.9h0zm-59.4-9.9h19.8c0 5.468-4.432 9.9-9.9 9.9s-9.9-4.432-9.9-9.9h0z"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
          </svg>

          <h2>No product Found</h2>
          <p>Please check the spelling or try searching for something else..</p>
          <Link className="btn-primary-1" to="/">
            Back to home
          </Link>
        </div>
      )}
    </>
  );
};

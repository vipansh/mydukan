import React, { useState } from 'react'
import data from '../../../data.js'
import './category.css'
import { CategoryLink } from './CategoryLink.js'

export const Category = () => {
    const [categoryList] = useState(data.top_categories)
    const [activeId, setActiveId] = useState(0)

    return (
        <div>
            <div className="category-main-list">
                {categoryList.map((data, i) => {
                    return (<CategoryLink data={data} key={i} haveId={{ activeId, setActiveId }}
                    />)
                })}

            </div>
            <div className="all-categories-link"><a className="anchor-1" href="/dukan5802/categories">View all categories<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDI0IDE3Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzE0NmViNCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMxNDZlYjQiIHN0cm9rZS13aWR0aD0iLjMiPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4xODguNDM3Yy4zMTIuMzA2LjM0MS43OTIuMDg0IDEuMTNsLS4wNy4wODJMMy40NiA3LjUyMWgxOS4zNDVjLjU1NSAwIDEuMDA1LjM4NCAxLjAwNS44NTggMCAuNDQtLjM4OC44MDEtLjg4OC44NWwtLjExNy4wMDctMTkuMzQ1LS4wMDEgNS43NCA1Ljg3M2MuMzMxLjMzOC4zMjUuODgxLS4wMTMgMS4yMTItLjMxMy4zMDYtLjguMzI0LTEuMTMyLjA1OWwtLjA4LS4wNzNMLjgxIDguOTc4Qy42NzYgOC44NC41OTggOC42Ny41NzQgOC40OTVMLjU3IDguNDU5Yy0uMDAyLS4wMi0uMDA0LS4wNC0uMDA0LS4wNnYtLjA0N2MwLS4wMjMuMDAyLS4wNDUuMDA1LS4wNjhsLS4wMDUuMDk1YzAtLjAzOC4wMDMtLjA3NS4wMDgtLjExLjAxOC0uMTQ2LjA3My0uMjg3LjE2Ny0uNDFsLjA2OS0uMDhMNy45NzYuNDUxYy4zMy0uMzM5Ljg3My0uMzQ1IDEuMjEyLS4wMTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEwIC02MTcpIHRyYW5zbGF0ZSgyNCA0NjEpIHRyYW5zbGF0ZSgzMiAxNTIpIHJvdGF0ZSgtMTgwIDg5IDEwLjUpIi8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="=>" className="ml6" /></a></div>
        </div>
    )
}

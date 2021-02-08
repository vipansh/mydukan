import React from 'react'

export const CategoryLink = ({ data, haveId }) => {

    const { activeId, setActiveId } = haveId



    return (
        <div className={activeId === data.id ? " link-active" : "category-link "} onClick={() => { setActiveId(data.id) }} ><a href={`#` + data.id}>{data.name} ({data.product_count})</a></div>
    )
}

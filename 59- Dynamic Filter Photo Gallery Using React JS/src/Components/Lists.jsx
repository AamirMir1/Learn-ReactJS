import React from 'react'
import { data } from '../ItemsAPI'
const Lists = ({ filterItems }) => {
    const lists = [...new Set(data.map((elem) => {
        return elem.category
    })), "All"]
    return (
        <>
            {
                lists.map((elem) => {
                   return <button onClick={() => filterItems(elem)}>{elem}</button>
                })
            }
        </>
    )
}
export default Lists
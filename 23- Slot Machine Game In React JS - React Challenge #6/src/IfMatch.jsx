import React from "react"

const IfMatch = (props) => {
    let { x, y, z } = props
    return (
        <>
            <div className="getStyle">
                <h1>{x} {y} {z}</h1>
                <h1>Match</h1>
                <hr />
            </div>
        </>
    )
}
export default IfMatch;
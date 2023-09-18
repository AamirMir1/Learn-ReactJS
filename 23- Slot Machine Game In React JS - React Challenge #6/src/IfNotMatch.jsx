import React from "react"

const IfNotMatch = (props) => {
    let { x, y, z } = props
    return (
        <>
            <div className="getStyle">
                <h1>{x} {y} {z}</h1>
                <h1>Not Match</h1>
                <hr />
            </div>
        </>
    )
}
export default IfNotMatch;
import React from "react"
import Match from './IfMatch'
import NotMatch from './IfNotMatch'

const SlotMach = (props) => {
   let {x, y, z} = props
    return (
        (x === y && y === z ? <Match x={x} y={y} z={z} /> : <NotMatch x={x} y={y} z={z} />)
    )
}

export default SlotMach;
import React, { useState } from 'react'

const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="child">
                <button onClick={()=> setShow(!show)}>{show ? "➖" : "➕"} </button>
                <h2>{question}</h2>
                <p>{show && answer}</p>
            </div>
        </>
    )
}

export default MyAccordion;
import React from "react"

let greeting = "Good Morning"
let currentHours = new Date().getHours()
let bgColor = "green"
let colour = "black"

if (currentHours >= 1 && currentHours <= 11) {
    greeting = "Good Morning"
    bgColor = "orange"
    colour = "white"
} else if (currentHours >= 12 && currentHours <= 19) {
    greeting = "Good Afternoon"
    bgColor = "black"
    colour = "white"
} else {
    greeting = "Good Night"
    bgColor = "cyan"
    colour = "black"
}

const styling = {
    background: bgColor,
    color: colour,
    padding: "20px",
    width: "40%",
    margin: "30px auto",
    borderRadius: "20px",
    textAlign: "center"
}


function Greeting() {
    return (
        <>
            <div className="greetCont">
                <h1>Hello sir, <span style={styling}>{greeting}</span></h1>
            </div>
        </>
    )
}

export default Greeting;
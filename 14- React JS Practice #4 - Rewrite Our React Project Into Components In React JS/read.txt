import React from 'react'
import ReactDOM from 'react-dom'
// Challenge #3 Accepted

// 1: Create a react app from scratch
// 2: Show a heading that says Hello Sir, Good Morning, if time is between 1 to 11am
// 3: Good Afternoon, if 12PM to 7PM
// 4: Good Night, If 7PM till Midnight
// 5: Apply CSS in it, then dynamically change the color of greeting parts only using  Inline CSS style. Ex. Green, orange, black etc

let greeting = "Good Morning"
let currentHours = new Date().getHours()
let bgColor = "green"
let colour = "black"

if(currentHours >= 1 && currentHours <= 11){
  greeting = "Good Morning"
  bgColor = "orange"
  colour = "white"
}else if(currentHours >= 12 && currentHours <= 19){
  greeting = "Good Afternoon" 
  bgColor = "black"
  colour = "white"
}else{
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

console.log(currentHours)

ReactDOM.render(
  <>
   <div style={styling} className="greetCont">
    <h1>Hello sir, {greeting}</h1>
   </div>
  </>,
  document.getElementById("root")
)
import React from "react"
import ReactDOM from 'react-dom'
import {sum, subtract, divide, multiply} from "./App"

ReactDOM.render(
  <>
   <ol>
    <li>Sum of two numbers is {sum(2, 2)}</li>
    <li>Subtration of two numbers is {subtract(40, 20)}</li>
    <li>Multiplication of two numbers is {multiply(2, 9)}</li>
    <li>Divition of two numbers is {divide(10, 2)}</li>
   </ol>
  </>, 
  document.getElementById("root")
)
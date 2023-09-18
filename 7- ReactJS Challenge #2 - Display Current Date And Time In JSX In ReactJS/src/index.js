import React from 'react'
import ReactDom from 'react-dom'

// Challenge #2: Display Current Date And Time In JSX

const day = new Date().getDay()
const month = new Date().getMonth()
const year = new Date().getFullYear()
const getAmOrPm = new Date().getHours()
let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()
 
hours = hours > 12 ? hours - 12 : hours = hours
hours = hours < 10 ? "0" + hours : hours = hours
minutes = minutes < 10 ? "0" + minutes : minutes = minutes
seconds = seconds < 10 ? "0" + seconds : seconds = seconds

let amOrPm = getAmOrPm > 12 ? "PM" : "AM"

ReactDom.render(
  <>
  <h1>Hello, My name is Aamir</h1>
  <p>Todays Date is {`${day}/${month}/${year}`}</p>
  <p>Todays Time is {`${hours}:${minutes}:${seconds} ${amOrPm}`}</p>
  </>,
  document.getElementById("root")
)



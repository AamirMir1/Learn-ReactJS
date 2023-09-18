import React from 'react'
import ReactDom from 'react-dom'

const firstname = "Aamir"
const lastname = "Mir"
// You can only use javascript expressions in in JSX

ReactDom.render(
  <>
  <h1>My first name is {firstname}</h1>
  <h1>My last name is {lastname}</h1>
  </>,
  document.getElementById("root")
)


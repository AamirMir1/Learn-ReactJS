import React from 'react'
import ReactDom from 'react-dom'

const firstname = "Aamir"
const lastname = "Mir"
// You can only use javascript expressions in in JSX

ReactDom.render(
  <>
  {/* <h1>My name is {`${firstname} ${lastname}`}</h1> */}
  <h1>{`My name is ${firstname} ${lastname}`}</h1>
  </>,
  document.getElementById("root")
)


import React from "react"
import ReactDOM from "react-dom"

// First method: which is recommeded and mostly use

// import App, {name, exportMe} from "./App"

// Second method: 

import * as myData from './App'


ReactDOM.render(
    <>
      <h1>My first name is {myData.name} and my last name is {myData.exportMe()}</h1>  
    </>,
    document.getElementById("root")
)


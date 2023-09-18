import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Card from "./Card"
import mydata from './mydata'




ReactDOM.render(
  <div className='cards'>
    {mydata.map((val) => {
     return <Card imgSrc={val.imgSrc} title={val.title} para={val.para} />
    })}
  </div>,
  document.getElementById("root")
)

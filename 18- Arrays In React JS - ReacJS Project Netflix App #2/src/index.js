import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Card from "./Card"
import mydata from './mydata'

ReactDOM.render(
  <div className='cards'>
   <Card imgSrc={mydata[0].imgSrc} title={mydata[0].title} para={mydata[0].para} />
   <Card imgSrc={mydata[1].imgSrc} title={mydata[1].title} para={mydata[1].para} />
   <Card imgSrc={mydata[2].imgSrc} title={mydata[2].title} para={mydata[2].para} />
  </div>,
  document.getElementById("root")
)
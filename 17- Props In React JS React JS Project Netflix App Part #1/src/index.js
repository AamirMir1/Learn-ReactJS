import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Card from "./Card"

ReactDOM.render(
  <div className='cards'>
   <Card imgSrc="https://picsum.photos/300/300" title="The Students - 2014" para="Netflix Original Series" />
   <Card imgSrc="https://picsum.photos/300/301" title="The Dark Devils - 2016" para="Netflix Original Series" />
   <Card imgSrc="https://picsum.photos/300/302" title="The Big Theory - 2013" para="Netflix Original Series" />
  </div>,
  document.getElementById("root")
)
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/200/301"
const img3 = "https://picsum.photos/200/302"
ReactDOM.render(
  <>
    <h1>About React</h1>
    <div className="images">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  </>,
  document.getElementById("root")
)
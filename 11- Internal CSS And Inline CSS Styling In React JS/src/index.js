import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/200/301"
const img3 = "https://picsum.photos/200/302"

// h1{
//   text-align: center;
//   margin: 30px 0px;
//   color: red;
// }

const heading = {
  textAlign: "center",
  margin: "30px 0px",
  color: 'red',
  fontFamily: "font-family: 'Euphoria Script', cursive;;"
}

ReactDOM.render(
  <>
    {/* <h1 style={heading}>About React</h1> */}
    <h1 style={{textAlign: "center", margin: "30px 0px", color: "red", fontFamily: "'Euphoria Script', cursive;;"}}>About React</h1>

    <div className="images">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  </>,
  document.getElementById("root")
)
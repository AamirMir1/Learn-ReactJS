import React, { useState } from 'react'

const App = () => {
  const [bg, setBg] = useState("white")
  const [text, setText] = useState("Click Me")
  const clickMe = ()=>{
    setBg("purple")
    setText("I am changed")
  }
  const dblClick = ()=>{
    setBg("cyan")
    setText("hmmmm!")
  }
  return (
    <>
      <div style={{backgroundColor: bg}} className="container">
        <button onDoubleClick={dblClick} onClick={clickMe}>{text}</button>
      </div>
    </>
  )
}

export default App;
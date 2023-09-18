import React, { useState } from 'react'

const App = ()=>{
  const [inputVal, setInputVal] = useState("")
  const [name, setName] = useState("")

  const changeMe = (e)=>{
    setInputVal(e.target.value)
  }
  const getName = ()=>{
    setName(inputVal)
    setInputVal("")
  }
 return (
  <>
    <div className="container">
      <h1>Hello, {name}</h1>
      <input type="text" placeholder='Enter Your Name' onChange={changeMe} value={inputVal}/>
      <button onClick={getName}>Submit 👍🏿</button>
    </div>
  </>
 )
}

export default App;


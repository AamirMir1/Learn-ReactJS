import React, { useState } from 'react'

const App = () => {
  let Time = new Date().toLocaleTimeString()
  const [time, setTime] = useState(Time)
  
  const updateTime = ()=>{
    let currentTime = new Date().toLocaleTimeString()
    setTime(currentTime)
    console.log("Checking");
  }
  return (
    <>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Current Time</button>
    </>
  )
}

export default App;
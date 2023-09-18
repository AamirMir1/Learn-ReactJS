import React, {useState} from 'react'

const App = ()=>{
  let currentTime = new Date().toLocaleTimeString()
  let [time, setTime] = useState(currentTime)

  const updateTime = ()=>{
    currentTime = new Date().toLocaleTimeString()
    setTime(currentTime)
  }
  setInterval(updateTime, 1000)

  return (
    <>
      <h1 style={{textAlign: 'center', fontSize: "50px"}}>{time}</h1>
    </>
  )
}

export default App;
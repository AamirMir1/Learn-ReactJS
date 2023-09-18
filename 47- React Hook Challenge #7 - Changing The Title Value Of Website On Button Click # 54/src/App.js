import React, {useEffect, useState} from 'react'

const App = ()=>{
  const [num, setNum] = useState(0)
  useEffect(()=>{
    document.title = `You clicked me ${num}`
  })
  const increment = ()=>{
    setNum(num + 1)
  }
  return (
    <>
       <button onClick={increment}>Click Me {num}</button>
    </>
  )
}

export default App;
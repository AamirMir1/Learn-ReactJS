import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)

  // useEffect function will be run after render function and page update
  /*
  useEffect(()=>{
    alert("i will call myself after render function and dom update")
  })
  */

  // useEffect function will be run after render function and page update
  /*
  useEffect(() => {
    alert("i will call myself after render function and num update")
  }, [num])
  
  */ 

  // useEffect function will be run after render function and page update
  
  useEffect(() => {
    alert("i will call myself after first time render function called")
  }, [])
  return (

    <>
      <button onClick={() => {
        setNum(num + 1)
      }}>Click Me {num}</button>

      <button onClick={() => {
        setNums(nums + 1)
      }}>Click Me {nums}</button>
    </>
  )
}

export default App;
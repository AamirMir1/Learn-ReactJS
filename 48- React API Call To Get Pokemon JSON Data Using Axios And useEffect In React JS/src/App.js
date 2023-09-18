import React, { useEffect, useState } from 'react'

const App = ()=>{
  const [num, setNum] = useState(2)
  const [name, setName] = useState("")

  useEffect(()=>{
    // You can also use axios to get data => npm install axios

    const getData = async ()=>{
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`)
      const mydata = await data.json()
      console.log(mydata)
      setName(mydata.moves[0].version_group_details[num].version_group.name)
    }
    getData()
  })
  return (
    <>
        <select value={num} onChange={(e)=>{
           setNum(e.target.value)
        }}>
          <option value="2">2</option>
          <option value="18">18</option>
          <option value="8">8</option>
          <option value="6">6</option>
          <option value="3">3</option>
        </select>
        <h1>You choose <span style={{color: "red"}}>{num} value</span></h1>
        <h1>The name is <span style={{color: "red"}}>{name}</span></h1>
    </>
  )
}

export default App; 

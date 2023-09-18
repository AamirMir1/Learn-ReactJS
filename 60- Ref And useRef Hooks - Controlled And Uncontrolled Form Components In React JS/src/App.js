import React, {useRef, useState} from 'react'

const App = ()=>{
  const vipPerson = useRef(null)
  const [names, setNames] = useState([])
  
  const submitPerson = (e)=>{
    e.preventDefault()
    setNames([...names, vipPerson.current.value])
    vipPerson.current.value = ""
  }
  return (
    <>
    <form action="" onSubmit={submitPerson}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" ref={vipPerson} placeholder='Write Your Name' />
      <input type="submit" value="Submit Now" />
    </form>
    {
      names.map((name, index)=>{
        return <p key={index}>{index + 1}: {name}</p>
      })
    }
    </>
  )
}
export default App;
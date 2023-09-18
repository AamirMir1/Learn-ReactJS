import React, { useState } from 'react'

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    number: ""
  })

  const inputEvent = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setFullName((prev)=>{
      return {
        ...fullName,
        [name] : value
      }
      // if(name === "fname"){
      //   return {
      //     fname: value,
      //     lname: prev.lname,
      //     email: prev.email,
      //     number: prev.number
      //   }
      // }
      // else if(name === "lname"){
      //   return {
      //     lname: value,
      //     fname: prev.fname,
      //     email: prev.email,
      //     number: prev.number
      //   }
      // }else if(name === "email"){
      //   return {
      //     fname: prev.fname,
      //     lname: prev.lname,
      //     email: value,
      //     number: prev.number
      //   }
      // }else if(name === "number"){
      //   return {
      //     fname: prev.fname,
      //     lname: prev.lname,
      //     email: prev.email,
      //     number: value
      //   }
      // }
    })
  }

  return (
    <>
      <form className="container">
        <h1>Hello, {fullName.fname} {fullName.lname}</h1>
        <h2>{fullName.email}</h2>
        <h3>{fullName.number}</h3>
        <input name='fname' value={fullName.fname} onChange={inputEvent} type="text" placeholder='Enter Your First Name' />
        <input name='lname' value={fullName.lname} onChange={inputEvent} type="text" placeholder='Enter Your Last Name' />
        <input name='email' value={fullName.email} onChange={inputEvent} type="text" placeholder='Enter Your Email' />
        <input name='number' value={fullName.number} onChange={inputEvent} type="number" placeholder='Enter Your Phone Number' />
        <input type="submit" value="Submit 👍🏿" />
      </form>
    </>
  )
}

export default App;

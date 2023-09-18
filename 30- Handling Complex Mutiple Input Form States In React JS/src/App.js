import React, { useState } from 'react'

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: ""
  })

  const inputEvent = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setFullName((prev)=>{
      if(name === "fname"){
        return {
          fname: value,
          lname: prev.lname,
          email: prev.email
        }
      }
      else if(name === "lname"){
        return {
          lname: value,
          fname: prev.fname,
          email: prev.email
        }
      }else if(name === "email"){
        return {
          fname: prev.fname,
          lname: prev.lname,
          email: value
        }
      }
    })
  }

  return (
    <>
      <form className="container">
        <h1>Hello, {fullName.fname} {fullName.lname} {fullName.email}</h1>
        <input name='fname' value={fullName.fname} onChange={inputEvent} type="text" placeholder='Enter Your First Name' />
        <input name='lname' value={fullName.lname} onChange={inputEvent} type="text" placeholder='Enter Your Last Name' />
        <input name='email' value={fullName.email} onChange={inputEvent} type="text" placeholder='Enter Your Email' />
        <input type="submit" value="Submit 👍🏿" />
      </form>
    </>
  )
}

export default App;

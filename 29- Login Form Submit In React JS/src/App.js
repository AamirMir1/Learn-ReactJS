import React, { useState } from 'react'

const App = () => {
  const [firstName, setFirstName] = useState()
  const [secondName, setSecondName] = useState()
  const [getFirstName, setGetFirstName] = useState()
  const [getSecondName, setGetSecondName] = useState()

  const inputVal1 = (e) => {
    setFirstName(e.target.value)
  }
  const inputVal2 = (e) => {
    setSecondName(e.target.value)
  }

  const submitted = (e) => {
    e.preventDefault()
    setGetFirstName(firstName)
    setGetSecondName(secondName)
    setFirstName("")
    setSecondName("")

  }
  return (
    <>
      <form onSubmit={submitted} className="container">
        <h1>Hello, {getFirstName} {getSecondName}</h1>
        <input type="text" value={firstName} onChange={inputVal1} placeholder='Enter Your First Name' />
        <input type="text" value={secondName} onChange={inputVal2} placeholder='Enter Your Last Name' />
        <input type="submit" value="Submit 👍🏿" />
      </form>
    </>
  )
}

export default App;


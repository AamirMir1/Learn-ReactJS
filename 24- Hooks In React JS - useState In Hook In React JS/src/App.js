import React, { useState } from "react"


const App = () => {
  let [incre, setIncre] = useState(1)

  const increment = () => {
    setIncre(incre + 1)
  }
  const decrement = () => {
    incre <= 0 ? setIncre(0) : setIncre(incre - 1)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Incremention & Decremention</h1>
      <h1 style={{ textAlign: 'center' }}>{incre}</h1>
      <div className="btn">
        <button className="buttons" onClick={increment}>Increment</button>
        <button className="buttons" onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}
export default App;
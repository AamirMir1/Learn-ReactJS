import React, { useState } from 'react'
import { details } from "./MYAPI"
import MyAccordion from './MyAccordion'

const App = () => {
  const [data, setData] = useState(details)
  return (
    <>
      <div className="container">
        <h1 className='title'>About Me</h1>
        {data.map((val, index) => {
          return <MyAccordion {...val}/>
        })}
      </div>
    </>
  )
}

export default App;
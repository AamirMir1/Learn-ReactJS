import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const App = () => {
  const [value, setValue] = useState(0)
  const incre = ()=>{
    setValue(value + 1)
  }
  const decre = ()=>{
    value >= 1 ? setValue(value - 1) : setValue(0)
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="increVal">{value}</h1>
          <div className="button">
          <button onClick={incre} className='increAndDecre'><AddIcon/> </button>
          <button onClick={decre} className='increAndDecre'><DeleteForeverRoundedIcon/> </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

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
          <Tooltip TransitionComponent={Zoom} title="Add">
          <Button varient="text" onClick={incre} className='increAndDecre add'><AddIcon/> </Button>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Delete">
          
          <Button varient="text" onClick={decre} className='increAndDecre dlt'><DeleteForeverRoundedIcon/> </Button>
          </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
import { React, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Items from './Items'
import Button from '@mui/material/Button';

const App = () => {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  const inputVal = (e) => {
    setInput(e.target.value)
  }
  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, input]
    })
  }
  
  
  return (
    <>
      <div className="todo">
        <h1 className='title'>ToDo List</h1>
        <input value={input} onChange={inputVal} className='inputVal' placeholder='Add a item' type="text" />
        <Button className='button add' onClick={addItem} variant="contained"><AddBoxIcon fontSize='large' /></Button>
        {
          items.map((item, index) => {
            return <Items val={item} key={index}/>
          })
        }

      </div>
    </>
  )
}
export default App;

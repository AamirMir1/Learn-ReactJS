import React, { useState } from 'react'
import Items from "./Items"

const App = () => {
  const [items, setItems] = useState([])
  const [inputVal, setInputVal] = useState()

  const inputValue = (e) => {
    setInputVal(e.target.value)
  }

  const addItem = () => {
    setItems((oldItem) => {
      return [...oldItem, inputVal]
    })
  }
  const deleteMe = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((element, index) => {
            return index !== id
      })
    })
  }
  return (
    <>
      <div className="container">
        <div className="todo-main">
          <h1 className='todoTitle'>ToDo List</h1>
          <input onChange={inputValue} value={inputVal} type="text" placeholder='Add a item' />
          <button onClick={addItem} className='add-button'>+</button>
          <ol>
            {items.map((item, index) => {
              return <Items key={index} id={index} itemVal={item} delete={deleteMe} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
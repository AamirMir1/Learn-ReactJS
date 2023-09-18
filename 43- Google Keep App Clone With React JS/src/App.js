import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Note from './Note'

const App = () => {
  const [addItem, setAddItem] = useState([])

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note]
    })

  }
  const onDelete = (id)=>{
     setAddItem((olddata)=>{
     return olddata.filter((currdata, indx)=>{
        return indx !== id;
      })
     })
  }
  return (
    <>
      <h1 className="title">Keep-<span style={{ color: "yellow" }}>Notes</span> App!</h1>
      <p className='little-title'>Add a memory</p>
      <CreateNote passNote={addNote} />
      <div className="notes">
        {addItem.map((val, index) => {
          return (
            <Note key={index} id={index} title={val.title} deleteItem={onDelete} content={val.content} />
          )
        })}
      </div>
    </>
  )
}
export default App;
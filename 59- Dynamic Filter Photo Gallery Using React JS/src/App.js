import React, { useState } from 'react'
import './App.css'
import { data } from './ItemsAPI'
import Lists from './Components/Lists'

const App = () => {
  const [items, setItems] = useState(data)
  const filterItems = (list) => {
    if(list === "All"){
      setItems(data)
      return
    }
    const updatedItems = data.filter((elem) => {
      return elem.category === list
    })
    setItems(updatedItems)
  }
  return (
    <>
      <div className="gallery">
        <h1 className='title'>Image Gallery</h1>
        <div className="buttons">
          <Lists filterItems={filterItems}/>
        </div>
        <div className="images">
          {
            items.map((elem) => {
              return (<div className="card">
                <figure>
                  <img src={elem.img} alt="" />
                </figure>
                <div className="details">
                  <h2 className='detail'>{elem.title}</h2>
                  <p className='detail'>Price: {elem.price}</p>
                  <p className='detail'>Category: {elem.category}</p>
                </div>
              </div>)
            })
          }

        </div>
      </div>
    </>
  )
}

export default App;
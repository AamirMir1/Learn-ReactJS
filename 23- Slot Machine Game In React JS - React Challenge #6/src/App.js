import React from 'react'
import SlotMach from './SlotMach';
const App = () => {
  return (
    <>
      <div style={{ textAlign: "center" }} className='slotMachine'>
        <h1 className='title'>Slot Machine Game</h1>
        <SlotMach x={"🏉"} y={"🏉"} z={"🏉"} />
        <SlotMach x={"😐"} y={"😋"} z={"😐"} />
        <SlotMach x={"👨‍👩‍👧"} y={"👨‍👩‍👧"} z={"👨‍👩‍👧"} />
        <SlotMach x={"🐥"} y={"🐥"} z={"🐥"} />
        <SlotMach x={"👦🏿"} y={"👦🏿"} z={"👦🏿"} />
      </div>
    </>
  )
}

export default App;
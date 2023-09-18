import React from "react"
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const App = () => {
  return (
    <>
      <Clock />
      <h1>this</h1>
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </>
  )
}
export default App;
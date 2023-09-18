import React, {useState} from 'react'
import { useCountTitle } from './useCountTitle'

const App = () => {
  const [num, setNum] = useState(0)
  useCountTitle(num)
  const decre = ()=>{
    if(num <= 0){
      setNum(0)
    }else{
      setNum(num - 1)
    }
  }
  return (
    <>
     <p>{num}</p>
     <div className="buttons">
      <button onClick={()=> setNum(num + 1)} className="incre">+</button>
      <button onClick={decre} className="decre">-</button>
     </div>
    </>
  )
}

export default App;
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action)=>{
    if(action.type === "incre"){
      return state + 1
    }else if(action.type === "decre"){
      return state - 1
    }
}
const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <p>{state}</p>
      <div className="buttons">
      <button onClick={()=> dispatch({type: "incre"})}>Incre</button>
      <button onClick={()=> dispatch({type: "decre"})}>Decre</button>
      </div>
    </>
  )
}

export default App;
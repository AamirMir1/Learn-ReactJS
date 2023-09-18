import React, { createContext } from 'react'
import Child from './Child';

const contextAPI = createContext()

const App = () => {
  return (
    <>
      <contextAPI.Provider value={{ greeting: "Hello World!", language: "JavaScript" }}>
        <Child />
      </contextAPI.Provider>

    </>
  )
}

export default App;
export {contextAPI}
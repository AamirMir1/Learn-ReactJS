import React, { useContext } from 'react'
import SuperChild from './SuperChild';
import { contextAPI } from './App';

const Child = () => {
  const {greeting} = useContext(contextAPI)

  return (
    <>
      <h1>{greeting}</h1>
      <SuperChild/>
    </>
  )
}

export default Child;
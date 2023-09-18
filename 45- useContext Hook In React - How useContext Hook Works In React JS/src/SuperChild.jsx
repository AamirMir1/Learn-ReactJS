import React, { useContext } from 'react'
import { contextAPI } from './App'

const SuperChild = ()=>{
    const {language} = useContext(contextAPI)
    
    return (
        
        <>
           <h1>My favourite Language is {language}</h1>
        </>
    )
}
export default SuperChild
import React from 'react'
import { useParams } from 'react-router-dom';
const Services = ()=>{
   const {firstname, lastname} = useParams() 
    return (
        <>
           <h1>Hello, Welcome to Services page and my name is {firstname} {lastname} </h1>
        </>
    )
}
export default Services;
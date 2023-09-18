import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

const Services = ()=>{
    const {firstname, lastname} = useParams()
    const location = useLocation()

    return (
        <>
           <h1>Hello, Welcome to Services page the full name of user is <span style={{color: 'red'}}>{firstname} {lastname}</span> and the url is <span style={{color: 'red'}}>{location.pathname}</span></h1>
           
           {location.pathname === "/services/Aamir/Mir" ? <button onClick={()=>{
            return alert(`The full name of user is ${firstname} ${lastname}`)
           }}>Click Me</button> : null}


        </>
    )
}
export default Services;
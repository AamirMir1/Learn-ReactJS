import React from 'react'
import {Link} from 'react-router-dom'
const Error = ()=>{
    return (
        <>
        <div className="container">
            <div className="title"><h1>404! Your page is not found</h1></div>
            <div className="paragraph"><Link className='button' to={"/"}>Go to home</Link></div>
        </div>
        </>
    )
}
export default Error;
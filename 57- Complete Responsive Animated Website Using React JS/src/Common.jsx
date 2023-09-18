import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props)=>{
    return (
        <>
          <div className="container d-width">
            <div className="left-content">
             <h1 className='common-title'>{props.title} <br/> <span style={{color: "blueviolet"}}>TechnicalAamir</span></h1>
             <p className='common-para'>{props.value}</p>
             <NavLink to={"/service"}>Get Started</NavLink>
            </div>
            <div className="right-content">
              <img src={props.img} alt="Loading..." />
            </div>
          </div>
        </>
    )
}
export default Common;
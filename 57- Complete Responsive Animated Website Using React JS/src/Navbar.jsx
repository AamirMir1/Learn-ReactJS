import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <>
         <div className="navbar d-width">
         <h1 className="title">TechnicalAamir</h1>
            <nav>
                <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/"}>Home</NavLink></li>
                <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/service"}>Services</NavLink></li>
                <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/about"}>About</NavLink></li>
                <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/contact"}>Contact Us</NavLink></li>
            </nav>
         </div>
        </>
    )
}
export default Navbar;
import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <>
          <nav>
            <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/"}>Home</NavLink></li>
            <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/services"}>Services</NavLink></li>
            <li><NavLink className={(currentActive)=> currentActive.isActive ? "active_nav" : ""} to={"/contact"}>Contact Us</NavLink></li>
          </nav>
        </>
    )
}
export default Navbar;
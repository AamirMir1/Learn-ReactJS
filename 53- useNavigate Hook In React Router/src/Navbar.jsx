import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <nav>
            <li><NavLink exact className={(navList)=> navList.isActive ? "active" : ""} to={"/"}>Home</NavLink></li>
            <li><NavLink exact className={(navList)=> navList.isActive ? "active" : ""} to={"/contact"}>Contact Us</NavLink> </li>
            <li><NavLink exact className={(navList)=> navList.isActive ? "active" : ""} to={"/services"} >Services</NavLink></li>
        </nav>
        </>
    )
}
export default Navbar;
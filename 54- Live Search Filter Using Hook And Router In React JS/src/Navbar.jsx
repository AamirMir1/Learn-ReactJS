import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
         <nav>
            <li><NavLink to={"/"} className={(currentActive)=> currentActive.isActive ? "active_nav" : null}>Home</NavLink> </li>
            <li><NavLink to={"/search"} className={(currentActive)=> currentActive.isActive ? "active_nav" : null}>Search Images</NavLink> </li>
         </nav>
        </>
    )
}
export default Navbar;
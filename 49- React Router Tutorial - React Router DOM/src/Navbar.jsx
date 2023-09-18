import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
           <nav>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/contact'} >Contact Us</Link></li>
            <li><Link to={'/services'} >Services</Link></li>
           </nav>
        </>
    )
}
export default Navbar;
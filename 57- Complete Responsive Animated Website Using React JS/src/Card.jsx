import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="" />
                <h1 className="card-title">{props.title}</h1>
                <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel.</p>
                <NavLink to={"/contact"}>Join Us</NavLink>
            </div>
        </>
    )
}
export default Card;
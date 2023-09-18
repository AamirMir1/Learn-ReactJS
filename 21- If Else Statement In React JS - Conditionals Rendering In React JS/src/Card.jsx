import React from 'react'
import Images from './Images'

function Card(props) {
    return (
        <>
            <div className="Cards">
                <div className="card">
                <Images imgSrc = {props.imgSrc}/>
                    <p className='getMargin'>{props.para}</p>
                    <h2 className='getMargin'>{props.title}</h2>
                    <a className='getMargin' href="https://netflix.com" target="_blanks" >Watch Now</a>
                </div>
            </div>
        </>
    )
}

export default Card;
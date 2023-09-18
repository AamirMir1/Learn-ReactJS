import React from 'react'

function Card(props) {
    return (
        <>
            <div className="Cards">
                <div className="card">
                    <img src={props.imgSrc} alt="404 Not Found or Loading..." />
                    <p className='getMargin'>{props.para}</p>
                    <h2 className='getMargin'>{props.title}</h2>
                    <a className='getMargin' href="https://netflix.com" target="_blanks" >Watch Now</a>
                </div>
            </div>
        </>
    )
}

export default Card;
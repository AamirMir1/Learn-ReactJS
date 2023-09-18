import React from 'react'

const Items = (props) => {
    return (
        <>
            <span onClick={() => {
                props.delete(props.id)
            }} className='delete-btn'>X</span><li>{props.itemVal}</li>
        </>
    )
}

export default Items
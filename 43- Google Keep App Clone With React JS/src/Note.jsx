import React from 'react'
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return (
        <>
            <div className="note">
                <h1 className='noteTitle'>{props.title}</h1>
                <p className='noteContent'>{props.content}</p>
                <Button onClick={deleteNote} className='btn' ><DeleteForeverIcon /></Button>
            </div>
        </>
    )
}

export default Note
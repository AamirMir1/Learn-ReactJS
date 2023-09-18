import React, { useState } from 'react'

const CreateNote = (props) => {
    const [show, setShow] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: ""
        })
    }
    const showIt = ()=>{
        setShow(true)
    }
    const hideIt = ()=>{
        setShow(false)
    }
    return (
        <>
            <div className='form'>
                <input onClick={showIt} type="text" value={note.title} onChange={InputEvent} placeholder={show ?'Add note title' : "Add a note"} name="title" />
                {show && <textarea value={note.content} name="content" onChange={InputEvent} onDoubleClick={hideIt} placeholder='Add content' id="" cols="30" rows="8"></textarea>}
                {show &&<button onClick={addEvent} className="submit">+</button>}
            </div>
        </>
    )
}

export default CreateNote;
import { React, useState } from "react"
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Items = (props) => {
    const [dlt, setDlt] = useState(false)

    const dltItem = () => {
        setDlt(true)
    }

    return (
        <>
            <ol>
                <span onClick={dltItem}><Button className='button hov' variant="contained"><DeleteForeverIcon /> </Button></span>
                <li style={{ textDecoration: dlt ? "line-through" : "", color: dlt ? "red" : ""}}>{props.val}</li>
            </ol>
        </>
    )
}

export default Items;
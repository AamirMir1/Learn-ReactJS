import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        address: "",
        number: "",
        msg: ""
    })

    const submitted = (e) => {
        e.preventDefault()
        alert(`Your name is ${data.name} address is ${data.address} phone number is ${data.number} and your message is ${data.msg}`)
        setData({
            name: "",
            address: "",
            number: "",
            msg: ""
        })
    }

    const inputEvent = (e) => {
        const {name, value} = e.target
        setData((prevData)=>{
            return {
                ...prevData, 
                [name]: value
            }
        })
    }

    return (
        <>
            <div className="form">
                <h1>Register Now</h1>
                <form onSubmit={submitted}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" value={data.name} onChange={inputEvent} name="name" id="name" />

                    <label htmlFor="address">Address:</label>
                    <input type="text" value={data.address} onChange={inputEvent} name="address" id="address" />

                    <label htmlFor="number">Phone Number:</label>
                    <input type="text" value={data.number} onChange={inputEvent} name="number" id="number" />

                    <label htmlFor="message">Message:</label>
                    <input type="text" value={data.msg} onChange={inputEvent} name="msg" id="message" />

                    <input type="submit" value="Submit Now" />
                </form>
            </div>
        </>
    )
}

export default Contact;
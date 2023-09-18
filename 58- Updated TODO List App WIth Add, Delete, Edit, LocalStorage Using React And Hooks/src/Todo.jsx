import React, { useEffect, useState } from 'react'

const Todo = () => {
    // Getting Data from local storage

    const getData = () => {
        let myData = JSON.parse(localStorage.getItem("TodoData"))
        return myData;
    }

    // Setting Up Light And Dark Mode

    const [lightOrDark, setLightOrDark] = useState({
        lOrDBg: "black",
        lOrDTxt: "white",
        lOrDTodo: "rgb(45, 45, 45)"
    })

    const [position, setPosition] = useState("0%")

    const darkorlight = () => {
        if (position === "0%") {
            setPosition("59%")
            setLightOrDark({
                lOrDBg: "white",
                lOrDTxt: "black",
                lOrDTodo: "#e1e1e1"
            })
        } else {
            setPosition("0%")
            setLightOrDark({
                lOrDBg: "black",
                lOrDTxt: "white",
                lOrDTodo: "rgb(45, 45, 45)"
            })
        }
    }

    const [inputVal, setInputVal] = useState("")
    const [items, setItems] = useState(getData())
    const [switchBtn, setSwitchBtn] = useState(true)
    const [modifyId, setModifyId] = useState(null)
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(false)

    const currentInput = (e) => {
        setInputVal(e.target.value)
        setError(false)
        inputVal.length >= 30 ? setLimit(true) : setLimit(false)
        console.log(limit)
        console.log(e.target.value)
    }

    const addItem = () => {
        if (!inputVal) {
            setError(true)
        } else if (inputVal && !switchBtn) {
            setItems(
                items.map((elem) => {
                    if (elem.id === modifyId) {
                        return { ...elem, data: inputVal }
                    }
                    return elem
                })
            )

        }
        else {
            const currentData = { id: new Date().getTime().toString(), data: inputVal }
            setItems((oldItems) => {
                return [...oldItems, currentData]
            })
        }
        setSwitchBtn(true)
        setInputVal("")
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((elem) => {
                return elem.id !== id
            })
        })
    }

    const modifyItem = (id) => {
        const updatedData = items.find((elem) => {
            return elem.id === id
        })

        setModifyId(updatedData.id)
        setSwitchBtn(false)
        setInputVal(updatedData.data)
    }

    useEffect(() => {
        localStorage.setItem("TodoData", JSON.stringify(items))
    }, [items])
    return (
        <>
            <div className="body" style={{ backgroundColor: lightOrDark.lOrDBg }}>
                <div style={{ color: lightOrDark.lOrDTxt }} className="todo">
                    <h1 className="title">ToDo App</h1>
                    <div className="content">
                        <div style={{ backgroundColor: lightOrDark.lOrDTodo }} className="aboutAdd">
                            <input style={{ color: limit ? "red" : lightOrDark.lOrDTxt}} value={inputVal.slice(0,30)} onChange={currentInput} type="text" placeholder='✍🏿   Add a item' name="" id="" />
                            <h1 className='addbtn' onClick={addItem}> {switchBtn ? "+" : "📝"} </h1>
                        </div>
                        <p className='error' style={{ color: "red", visibility: error ? "visible" : "hidden" }}>Please write atleast one letter</p>

                        <div style={items.length >= 7 ? { height: "60vh", overflowY: "scroll" } : null} className="items">
                            {
                                items.map((elem) => {
                                    return (
                                        <div key={elem.id} style={{ color: lightOrDark.lOrDTxt, backgroundColor: lightOrDark.lOrDTodo }} className="item">
                                            <span>{elem.data}</span>
                                            <div className="trash">
                                                <span onClick={() => modifyItem(elem.id)} className='modify-btn'> 📝</span>
                                                <span className='delete-btn' onClick={() => deleteItem(elem.id)}>🚮</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {items.length <= 0 ? "" : <div style={{ color: lightOrDark.lOrDTxt, backgroundColor: lightOrDark.lOrDTodo, cursor: "pointer" }} className="item" onClick={() => setItems([])}>
                            <span>Delete All Items</span>
                        </div>
                        }
                    </div>
                </div>
                <div style={{ backgroundColor: lightOrDark.lOrDTodo }} onClick={darkorlight} className="darkOrLight">
                    <div className="dOrLight" style={{ backgroundColor: lightOrDark.lOrDTxt, left: position }}></div>
                </div>
            </div>
        </>
    )
}
export default Todo;


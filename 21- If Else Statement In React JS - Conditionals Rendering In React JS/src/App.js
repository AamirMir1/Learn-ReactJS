import React from 'react'
import Card from "./Card"
import mydata from './mydata'
import Amazon from './Amazon'
import Netflix from './Netflix'

const checkThis = "Netflix"
const check = ()=>{
 if(checkThis === "Netflix"){
    return <Netflix/>
 }else{
    return <Amazon/>
 }
}

const App = () => {
    return (
        <>
            <h1 style={{textAlign: "center", margin: "30px 0px 0px 20px"}}>Top 3 best netflix series</h1>
            <div className='cards'>
                     {check()}
            </div>
        </>
    )
}

export default App;
import React from 'react'
import Amazon from './Amazon'
import Netflix from './Netflix'

const checkThis = "Netflix"

const App = () => {
    return (
        <>
            <h1 style={{textAlign: "center", margin: "30px 0px 0px 20px"}}>Top 3 best netflix series</h1>
            <div className='cards'>
            {checkThis === "Netflix" ? <Netflix/> : <Amazon/>}
            </div>
        </>
    )
}

export default App;
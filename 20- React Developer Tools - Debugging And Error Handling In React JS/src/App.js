import React from 'react'
import Card from "./Card"
import mydata from './mydata'

const App = () => {
    return (
        <>
            <h1 style={{textAlign: "center", margin: "30px 0px 0px 20px"}}>Top 3 best netflix series</h1>
            <div className='cards'>
                {mydata.map((val) => {
                    return <Card key={val.id} imgSrc={val.imgSrc} title={val.title} para={val.para} />
                })}
            </div>
        </>
    )
}

export default App;
import React from 'react'
import Card from "./Card"
import mydata from './mydata'
const Amazon = ()=>{
    return (
        <>
            <Card key={mydata[1].id} imgSrc={mydata[1].imgSrc} title={mydata[1].title} para={mydata[1].para} />
        </>
    )
}

export default Amazon
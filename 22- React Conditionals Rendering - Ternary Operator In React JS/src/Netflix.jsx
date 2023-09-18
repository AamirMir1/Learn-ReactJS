import React from "react"
import Card from "./Card"
import mydata from "./mydata"
const Netflix = () => {
    return (
        <>
            <Card key={mydata[0].id} imgSrc={mydata[0].imgSrc} title={mydata[0].title} para={mydata[0].para} />
        </>
    )
}

export default Netflix
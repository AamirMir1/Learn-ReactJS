import React from 'react'

const SearchItems = (props)=>{

    const imgSrc = props.imgPath === "" ? `https://source.unsplash.com/640x300/?programmer` : `https://source.unsplash.com/640x300/?${props.imgPath}`
    console.log(imgSrc)
    return (
        <>
         <img width={"640px"} height={"300px"} src={imgSrc} alt="" />
        </>
    )
}
export default SearchItems
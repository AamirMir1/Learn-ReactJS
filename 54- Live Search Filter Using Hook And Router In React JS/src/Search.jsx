import React, { useState } from 'react'
import SearchItems from './SearchItems';

const Search = () => {
    const [text, setText] = useState("")
    const inputEvent = (e)=>{
     setText(e.target.value)
    }
    return (
        <>
          <input type="text" onChange={inputEvent} value={text} placeholder='Search Image'/>
          <SearchItems imgPath={text}/>
        </>
    )
}
export default Search;
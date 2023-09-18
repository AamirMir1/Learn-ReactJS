import { useEffect } from 'react'

const useCountTitle = (count)=>{
  useEffect(()=>{
    if(count <= 0){
        document.title = "Chats"
    }else{
        document.title = `${count} Chats`
    }
  })

}
export {useCountTitle}

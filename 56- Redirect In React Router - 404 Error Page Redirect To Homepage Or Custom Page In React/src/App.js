import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Services from './Services'
// import Error from './Error'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path='/*' element={<Error/>}/> */}
          <Route path='/*' element={<Navigate to={"/"}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
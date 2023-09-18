import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='services' element={<Services/>} />
          <Route path='/*' element={<h1>404! Page is not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
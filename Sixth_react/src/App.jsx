import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Courses from './components/Courses'
import Product from './components/Product'

const App = () => {
  return (
    <div>
          <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/courses' element={<Courses/>}/>
          <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App

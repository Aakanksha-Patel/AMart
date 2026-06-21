import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      
    </>
  )
}

export default App

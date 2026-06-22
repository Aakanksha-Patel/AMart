import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import {Route, Routes} from 'react-router-dom'
import Loginpage from './Pages/Loginpage'

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Loginpage setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      
    </>
  )
}

export default App

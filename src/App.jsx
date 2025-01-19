import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'

export default function App() {

  const [cart, setCart] = useState("");
 
  const addToCart = (product) => {
   setCart([...cart, product])
  }
console.log(cart)
  return (
    <>

    <Header />
      <Routes>

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />    
        <Route path="/products" element={<Products addToCart={addToCart}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

      </Routes>
      <Footer />
    </>
  )
}


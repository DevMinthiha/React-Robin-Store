import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cart from './pages/cart/Cart'
import DetailPage from './pages/detail/DetailPage'
import ProductsPage from './pages/products/ProductsPage'
import HomePage from './pages/home/HomePage'
import {BsArrowUpCircleFill} from 'react-icons/bs'

const App = () => {
  
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
      <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <ProductsPage /> } />
        <Route path="/product/:id" element={ <DetailPage /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={ <div className="h-screen flex items-center justify-center flex-col"> <h1 className="text-9xl text-indigo-600 font-extrabold tracking-widest">404</h1> <h2 className="text-xl font-semibold tracking-wider text-gray-600">Page Not Found</h2> </div>} />
      </Routes>
      <button onClick={() => {window.scrollTo(0, 0)}} className="fixed right-10 bottom-10 text-3xl text-gray-500"><BsArrowUpCircleFill /></button>
      <Footer />

    </BrowserRouter>
  )
}

export default App

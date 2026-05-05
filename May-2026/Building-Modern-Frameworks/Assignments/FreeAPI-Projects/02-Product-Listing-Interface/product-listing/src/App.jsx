import { useState } from 'react'
import './App.css'
import Products from './components/Products'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail';
function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Get your Product</h1>

          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App

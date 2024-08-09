import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import ViewProduct from './Pages/ViewProduct.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'

function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='products/view/:id' element={<ViewProduct/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App

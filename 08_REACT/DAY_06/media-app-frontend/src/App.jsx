import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      {/* Landing Page */}
      <Route path='/' element={<LandingPage/>}/>
      {/* Home Page */}
      <Route path='/home' element={<Home/>}/>
      {/* WatchHistory Page */}
      <Route path='/watchHistory' element={<WatchHistory/>}/>
      {/* PageNotFound Page */}
      <Route path='*' element={<PageNotFound/>}/>
      
      
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App

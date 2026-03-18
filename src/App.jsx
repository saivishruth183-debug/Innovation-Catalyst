import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Pages/Home'
import About from './Components/About'
import Offers from './Components/Offers'
import Contact from './Components/Contact'
import ScrollToTop from './Pages/ScrolltoTop'
import Career from './Pages/Career'
import Catalyst from './Pages/Catalyst'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalyst" element={<Catalyst />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
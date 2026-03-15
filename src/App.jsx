import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Pages/Home'
import Learnmore from './Pages/Learnmore'
import About from './Components/About'
import Offers from './Components/Offers'
import PartnershipCareer from './Components/PartnershipCareer'
import Contact from './Components/Contact'
import ScrollToTop from './Pages/ScrolltoTop'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/career" element={<PartnershipCareer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
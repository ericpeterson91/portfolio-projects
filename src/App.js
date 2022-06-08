import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Router >
      <Navbar />
        <Routes>
         < Route path='/portfolio-projects' element={<Hero />} />
         < Route path='/about' element={<About />} />
         < Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

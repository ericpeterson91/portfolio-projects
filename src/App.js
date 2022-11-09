import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Youtube from './components/Youtube'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Eric's Developer Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Developer Portfolio" />
        </Helmet>
      <Router >
      <Navbar />
        <Routes>
         < Route path='/portfolio-projects' element={<Hero />} />
         < Route path='/youtube' element={<Youtube />} />
         < Route path='/about' element={<About />} />
         < Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react'
import './About.css'
import me from '../images/Eric.jpeg'
import { FaGithub, FaLinkedin, FaReact, FaNode, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-container'>
      <div className='img'>
        <img className='img-me'src={me} alt="" />
      </div>
      <div className='about'>
        <h1>About Eric</h1>
        <p> Eric is full stack web developer from Saskatoon, Saskatchewan. <br /> <br />Eric is passionate about the world of JavaScript, and the world of software development more generally. <br /><br /> Eric is open to work in Saskatoon, relocating cities for work, and also full-time remote work.</p>
      </div>
      <div className='logo-container'>
        
        <FaGithub size={30} className='github' />
        <FaReact size={30} className='react' />
        <FaNode size={30} className='node'  />
        <FaJsSquare size={30} className='js' />
        <FaCss3Alt size={30} className='css' />
        <FaHtml5 size={30} className='html' />
      </div>
    </div>
    
  )
}

export default About
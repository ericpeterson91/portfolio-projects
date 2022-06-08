import React from 'react'
import './About.css'
import me from '../images/Eric.jpeg'
import { FaGithub, FaLinkedin, FaReact, FaNode, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiMongodb } from 'react-icons/si'

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
        
        <FaGithub size={40} className='github' />
        <FaNode size={40} className='node'  />
        <SiExpress size={40} className='express' />
        <FaReact size={40} className='react' />
        <FaJsSquare size={40} className='js' />
        <FaCss3Alt size={40} className='css' />
        <FaHtml5 size={40} className='html' />
        <SiMongodb size={40} className='mongo' />
      </div>
      
    </div>
    
  )
}

export default About
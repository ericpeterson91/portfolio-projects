import React from 'react'
import './About.css'
import me from '../images/Eric.jpeg'
import { FaGithub, FaReact, FaNode, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiMongodb } from 'react-icons/si'

const About = () => {
  return (
    <div className='about-container'>
      <div className='img-container'>
        <img className='img-me'src={me} alt="" />
      </div>
      <div className='desc-container'>
        <h1>About Eric</h1>
        <p> Eric is a full stack web developer from Saskatoon, Saskatchewan. <br /> <br />Eric is passionate about building quality user interfaces, client and server side JavaScript, and the world of software development more generally. <br /><br /> Eric is open to work in Saskatoon, relocating cities for work, and also full-time remote work.</p>
      </div>
      
      <div className='logo-container'>
        
        <FaGithub size={60} className='github' />
        <FaNode size={60} className='node'  />
        <SiExpress size={60} className='express' />
        <FaReact size={60} className='react' />
        <FaJsSquare size={60} className='js' />
        <FaCss3Alt size={60} className='css' />
        <FaHtml5 size={60} className='html' />
        <SiMongodb size={60} className='mongo' />
      </div>
      
    </div>
    
  )
}

export default About
import React from 'react'
import './About.css'
import me from '../images/Eric.jpeg'
import { FaGithub, FaLinkedin, FaReact, FaNode, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-container'>
      <img src={me} alt="" />
      <FaGithub />
      <FaLinkedin />
      <FaReact />
      <FaNode />
      <FaJsSquare />
      <FaCss3Alt />
      <FaHtml5 />
    </div>
    
  )
}

export default About
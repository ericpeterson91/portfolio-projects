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
        <p> nesciunt adip fugit similique dicta doloremque aliquam earum exercitationem omnis recusandae ad doloribus ullam debitis, aut consequuntur hic cum repudiandae inventore placeat autem. Ad nulla quas dolore rerum illo molestias ea in cum libero a. Ex eius ut placeat quisquam, harum eos magni labore dolorem reprehenderit necessitatibus neque recusandae nisi quaerat possimus, asperiores sunt fugit sit rerum voluptas amet laudantium velit magnam maiores assumenda. Quos iusto dolores dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae, veniam accusamus placeat ullam deleniti quos! Distinctio possimus numquam esse?</p>
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
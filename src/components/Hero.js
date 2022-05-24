import React from "react";
import Project from "./Project";
import { FaGithub } from "react-icons/fa";
import "./Hero.css";
import project1img from '../images/project1img.png';
import project2img from '../images/project2img.png';
import project3img from '../images/project3img.png';
import project4img from '../images/project4img.png';



const Hero = () => {

const project1 = {
    name: '2021 Year in Review Game',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}
const project2 = {
    name: 'Stuff Portfolio',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}
const project3 = {
    name: 'Horoscope App',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}
const project4 = {
    name: 'Personal Landing Page',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}


  return (
    <div className="hero">
      <div className="project-container">
        <Project name={project1.name} src={project1img} description={project1.description}/>
        <Project name={project2.name} src={project2img} description={project2.description}/>
        <Project name={project3.name} src={project3img} description={project3.description}/>
        <Project name={project4.name} src={project4img} description={project4.description}/>
      </div>
      <div className="footer">
        <a
          target="_blank"
          href="https://github.com/ericpeterson91?tab=repositories"
        >
          <FaGithub size={25}/>
        </a>
      </div>
    </div>
  );
};

export default Hero;

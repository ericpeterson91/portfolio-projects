import React from "react";
import Project from "./Project";
import { FaGithub } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {

const project1 = {
    name: 'project1',
    src: '',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}
const project2 = {
    name: 'project1',
    src: '',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}
const project3 = {
    name: 'project1',
    src: '',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}
const project4 = {
    name: 'project1',
    src: '',
    description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript'
}


  return (
    <div className="hero">
      <div className="project-container">
        <Project name={project1.name} src={project1.src} description={project1.description}/>
        <Project name={project2.name} src={project2.src} description={project2.description}/>
        <Project name={project3.name} src={project3.src} description={project3.description}/>
        <Project name={project4.name} src={project4.src} description={project4.description}/>
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

import React from "react";
import Project from "./Project";
import "./Hero.css";
import project1img from '../images/project1img.png';
import project2img from '../images/project2img.png';
import project3img from '../images/project3img.png';
import project4img from '../images/project4img.png';



const Hero = () => {

  const project1 = {
      name: '2021 Year in Review Game',
      description: '2021 Year-In-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript',
      link: 'https://ericpeterson91.github.io/2021-year-in-review/'
  }
  const project2 = {
      name: 'Stuff Portfolio',
      description: 'Application to keep track of physical items owned. This application was created using MongoDB, ExpressJS, and NodeJS.',
      link: 'http://erics-project.herokuapp.com/'
      
  }
  const project3 = {
      name: 'Horoscope App',
      description: 'Horoscope application generated with Python, Django, and JavaScript.',
      link: 'https://django-horoscope-app.herokuapp.com/'
  }
  const project4 = {
      name: 'Personal Landing Page',
      description: 'Personal landing page created with the MERN stack.',
      link: 'https://landing-page-personal.herokuapp.com/'
  }

  const guestLogin = 'Guest Login: '
  const guestDesc = 'Email: guest@something.com'
  const guestP = 'Password: helloworld7'


  return (
    <div className="hero">
      <div className="project-container">
        <div><Project name={project1.name} src={project1img} description={project1.description} link={project1.link}/></div>
        <div><Project name={project2.name} src={project2img} description={project2.description} link={project2.link}/></div>
        <div><Project name={project3.name} src={project3img} description={project3.description} link={project3.link}/></div>
        <div><Project name={project4.name} src={project4img} description={project4.description} link={project4.link} guestP={guestP}guestLogin={guestLogin} guestDesc={guestDesc}/></div>
      </div>
     
    </div>
  );
};

export default Hero;

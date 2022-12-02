import React from "react";
import Project from "./Project";
import Project4 from "./Project4";
import "./Hero.css";
import project1img from "../images/project1img.png";
import project2img from "../images/project2img.png";
import project3img from "../images/project3img.png";
import project4img from "../images/project4img.png";
import reactNotesimg from "../images/reactnotes.png";

const Hero = () => {
  const project1 = {
    name: "2021 Year in Review Game",
    description:
      "2021 Year-in-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript.",
    link: "https://ericpeterson91.github.io/2021-year-in-review/",
    appType: "Desktop/Mobile Application",
  };
  const project2 = {
    name: "Stuff Portfolio - UNDER CONSTRUCTION",
    description:
      "Application to keep track of physical items. Project created using MongoDB, ExpressJS, and NodeJS.",
    link: "http://erics-project.herokuapp.com/",
    appType: "Desktop/Mobile Application",
  };
  const project3 = {
    name: "Horoscope App - UNDER CONSTRUCTION",
    description:
      "Horoscope application generated with Python, Django, and JavaScript.",
    link: "https://django-horoscope-app.herokuapp.com/",
    appType: "Desktop/Mobile Application",
  };
  const project4 = {
    name: "Personal Landing Page",
    description: "Personal landing page created with the MERN stack.",
    link: "https://landing-page9191.herokuapp.com/",
    appType: "Desktop Application",
  };
  const reactNotes = {
    name: "Notes App",
    description:
      "Simple notes app built in React. Notes persist in local storage. This project was built from a YouTube tutorial.",
    link: "https://ericpeterson91.github.io/react-notes/",
    appType: "Desktop/Mobile Application",
  };

  return (
    <div className="hero-container">
      <div className="cards">
        <Project
          name={project1.name}
          src={project1img}
          description={project1.description}
          link={project1.link}
          appType={project1.appType}
        />
        <Project
          name={project2.name}
          src={project2img}
          description={project2.description}
          link={project2.link}
          appType={project2.appType}
        />
        <Project
          name={project3.name}
          src={project3img}
          description={project3.description}
          link={project3.link}
          appType={project3.appType}
        />
        <Project4
          name={project4.name}
          src={project4img}
          description={project4.description}
          link={project4.link}
          appType={project4.appType}
        />
        {/* <Project
          name={reactNotes.name}
          src={reactNotesimg}
          description={reactNotes.description}
          link={reactNotes.link}
          appType={reactNotes.appType}
        /> */}
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
// import Project from "./Project";
import "./Youtube.css";
// import video1img from "../images/video1.png";
// import video2img from "../images/video2.png";
// import video3img from "../images/video3.png";
import Video from './Video'

const Youtube = () => {
  const videos = 
    {
      video1: {
        name: "CSS Smooth Animations",
        description:
          "2021 Year-in-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript.",
        link: "https://ericpeterson91.github.io/2021-year-in-review/",
        appType: "Desktop/Mobile Application",
      },
    
    
      video2: {
        name: "Stuff Portfolio",
        description:
          "Application to keep track of physical items owned. This application was created using MongoDB, ExpressJS, and NodeJS.",
        link: "http://erics-project.herokuapp.com/",
        appType: "Desktop/Mobile Application",
      
      },
    
      video3: {
        name: "Horoscope App",
        description:
          "Horoscope application generated with Python, Django, and JavaScript.",
        link: "https://django-horoscope-app.herokuapp.com/",
        appType: "Desktop/Mobile Application",
      }
    }
  

  const {video1, video2, video3} = videos

  return (
    <div className="hero-container youtube-container">
      <div className='youtube-cards y-cards'>
        <Video src="https://www.youtube.com/embed/8PYEU-a409c"  title="CSS Smooth Transitions"/>
        <Video src="https://www.youtube.com/embed/SrCTSnXdGp8"  title="Indexing into an Array at Random"/>
        <Video src="https://www.youtube.com/embed/7P7sCZIUb2A"  title="Changing Color in JavaScript"/>
      </div>
    </div>
  );
};

export default Youtube;

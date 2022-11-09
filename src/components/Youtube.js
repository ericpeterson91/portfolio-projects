import React from "react";
import Project from "./Project";
import "./Youtube.css";
import video1img from "../images/video1img.png";
import video2img from "../images/video2img.png";
import video3img from "../images/video3img.png";

const Youtube = () => {


    const video1 = {
        name: "2021 Year in Review Game",
        description:
          "2021 Year-in-Review slot machine style game. This game was created with HTML, CSS, and Vanilla JavaScript.",
        link: "https://ericpeterson91.github.io/2021-year-in-review/",
        appType: "Desktop/Mobile Application",
      };
      const video2 = {
        name: "Stuff Portfolio",
        description:
          "Application to keep track of physical items owned. This application was created using MongoDB, ExpressJS, and NodeJS.",
        link: "http://erics-project.herokuapp.com/",
        appType: "Desktop/Mobile Application",
      };
      const video3 = {
        name: "Horoscope App",
        description:
          "Horoscope application generated with Python, Django, and JavaScript.",
        link: "https://django-horoscope-app.herokuapp.com/",
        appType: "Desktop/Mobile Application",
      };    

  return (
    <div className="hero-container">
      <div className="cards">
        <Project name={video1.name}
                src={video1img}
                description={video1.description}
                link={video1.link}
                appType={video1.appType}
         />
        <Project name={video2.name}
                src={video2img}
                description={video2.description}
                link={video2.link}
                appType={video2.appType}
        />
        <Project name={video3.name}
                src={video3img}
                description={video3.description}
                link={video3.link}
                appType={video3.appType}
        />
      </div>
    </div>
  );
};

export default Youtube;

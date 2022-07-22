import React from "react";
import "./About.css";
import me from "../images/Eric.jpeg";
import ga from '../images/ga.png'
import {
  FaGithub,
  FaReact,
  FaNode,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img className="img-me" src={me} alt="" />
      </div>
      <div className="desc-container">
        
        <p>
          Eric is a full stack software developer from Saskatoon, Saskatchewan.{" "}
          <br /> <br />
          Eric is passionate about client and server side JavaScript, and the
          world of software development in general. <br />
          <br /> Eric is open to work in Saskatoon, relocating cities for work,
          and also full-time remote work.
        </p>
      </div>
      <div className='course-container'>
      <span>Completed General Assembly's  <img className='ga-img' src={ga} alt="" />  software engineering immersive program.</span>
       
      </div>

      <div className="logo-container">
        <FaGithub size={60} className="github" />
        <FaNode size={60} className="node" />
        <SiExpress size={60} className="express" />
        <FaReact size={60} className="react" />
        <FaJsSquare size={60} className="js" />
        <FaCss3Alt size={60} className="css" />
        <FaHtml5 size={60} className="html" />
        <SiMongodb size={60} className="mongo" />
      </div>
    </div>
  );
};

export default About;

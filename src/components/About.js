import React from "react";
import "./About.css";
import me from "../images/Eric.jpeg";
import ga from "../images/ga.png";
import {
  FaGithub,
  FaReact,
  FaNode,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import {FcCheckmark} from 'react-icons/fc'

const About = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img className="img-me" src={me} alt="" />
      </div>
      <div className="desc-container">
        <p>
          Eric is a full stack software developer living in Calgary, Alberta.{" "}
          <br /> <br />
          Eric is passionate about client and server side JavaScript, and the
          world of software development in general. <br />
          <br /> Eric is open to work within Calgary, and also to work that is fully remote. 
        </p>
      </div>
      <div className="course-container">
        <p className="course">
          <FcCheckmark size={33} className='check'/> Completed General Assembly's software engineering immersive program.
        </p>
        <img className="ga-img" src={ga} alt="" />
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

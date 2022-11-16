import React from "react";
// import Project from "./Project";
import "./Youtube.css";
// import video1img from "../images/video1.png";
// import video2img from "../images/video2.png";
// import video3img from "../images/video3.png";
import Video from './Video'

const Youtube = () => {
  
  return (
    <div className="hero-container youtube-container">
      <div className='youtube-cards y-cards'>
        <Video src="https://www.youtube.com/embed/MjbC0gF22kg"  title="React Components, Props, and State"/>
        <Video src="https://www.youtube.com/embed/tLzMVZWapu8"  title="Changing Color in JavaScript"/>
        <Video src="https://www.youtube.com/embed/8PYEU-a409c"  title="CSS Smooth Transitions"/>
        <Video src="https://www.youtube.com/embed/HjMwaEwA-vs"  title="Indexing into an Array at Random"/>
      </div>
    </div>
  );
};

export default Youtube;

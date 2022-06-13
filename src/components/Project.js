import React from "react";
import "./Project.css";

const Project = ({
  name,
  src,
  description,
  link,
  guestLogin,
  guestDesc,
  guestP,
}) => {
  return (
    <div className="project-card">
      <div className="name">{name}</div>

      <div className="desc">{description}</div>

      <div className="img-container">
        <img src={src} className="src" />

        <div className="login-container">
          <div className='guest-container'>
            <div className="guest">{guestLogin}</div>
            <div className="guestD">{guestDesc}</div>
            <div className="guestP">{guestP}</div>
          </div>
          <a className="p-link" target="_blank" href={link}>
            Link to project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

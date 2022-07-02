import React from "react";
import "./Project4.css";

const Project4 = ({ name, src, description, link, appType }) => {
  const guestLogin = "Guest Login: ";
  const guestDesc = "Email: hello@world.com";
  const guestP = "Password: guest123";
  const desktopOnly = "Desktop Only";
  return (
    <div className="project-card">
      <div className="name">{name}</div>

      <div className="desc">{description}</div>

      <div className="bottom-container">
        <div>
          <img src={src} className="src" />
        </div>
        <div className="login-container">
          <div className="app-type">{appType}</div>
          <div className="guest-container">
            <div className="guest">{guestLogin}</div>
            <div className="guestD">{guestDesc}</div>
            <div className="guestP">{guestP}</div>
          </div>
          <a className="p-link" id="p4" target="_blank" href={link}>
            Link to project
          </a>
          <a className="p4Link" href="">
            Use computer to access
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project4;

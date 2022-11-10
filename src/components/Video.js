import React from "react";
import './Video.css'

const Video = ({ src, title }) => {
  return (
    <div>
      <h2 className="title-header">{title}</h2>
      <iframe
        width="450"
        height="255"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;

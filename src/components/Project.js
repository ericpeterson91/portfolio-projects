import React from 'react'
import './Project.css'

const Project = ({name, src, description, link}) => {
  return (
    <div className='project-card'>
        <div className='name'>{name}</div>
        <img src={src} className='src' />
        <div className='desc'>{description}</div>
        <a target="_blank" href={link}>Link to project</a>
    </div>
  )
}

export default Project
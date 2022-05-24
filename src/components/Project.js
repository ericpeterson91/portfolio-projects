import React from 'react'
import './Project.css'

const Project = ({name, src, description}) => {
  return (
    <div className='project-card'>
        <div className='name'>{name}</div>
        <img src={src} className='src' />
        <div className='desc'>{description}</div>
    </div>
  )
}

export default Project
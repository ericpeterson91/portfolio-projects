import React from 'react'
import './Project.css'

const Project = ({name, src, description}) => {
  return (
    <div className='project-container'>
        <div>{name}</div>
        <div>{src}</div>
        <div>{description}</div>
    </div>
  )
}

export default Project
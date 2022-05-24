import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='logo'>
               <h2>Eric's Developer Portfolio</h2>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='/'>Projects</a></li>
                <li className='nav-item'><a href='/about'>About Eric</a></li>
                <li className='nav-item'><a href='/contact'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}
            </div>
        </div>
    )
}

export default Navbar
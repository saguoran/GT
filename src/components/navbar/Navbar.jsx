import React from 'react'
import './Navbar.css';
// import font from './../../assets/mekano1.ttf'

export const Navbar = () => {
  return (
    <div className='container'>
        
            <h1>Game Track</h1>
        
        
        <nav>
            <ul>
        <li><a href="#">Games</a></li>
        <li><a href="#">Consoles</a></li>
        <li><a href="#">Schedule Party</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
        </nav>
        
    </div>
  )
}

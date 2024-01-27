import React from 'react'
import './nav.css'


function Nav(){
    return(
      <div className="nav">
      <img className="nav-img" src="src\images\Mane Logo - FULL COLOUR-01.webp" />
      <a className="nav-links" href="#home">Home</a>
      <a className="nav-links" href="#about">About</a>
      <a className="nav-links" href="#services">Services</a>
      <a className="nav-links" href="#products">Products</a>
      <a className="nav-links" href="#contact">Contact</a>
      <button className="book-now-btn">book now</button>

    </div>
    )
}

export default Nav;
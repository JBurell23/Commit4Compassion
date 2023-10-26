import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        <div className="navbar-container">
            <a href="/">
              <img 
              src="/pics/logo.png"
              alt="Logo"
              className="logo"
              />
            </a>
              <div className="menu-container">
                <div className='menu-item'>Overview</div>
                <div className='menu-item'>The Program</div>
                <div className='menu-item'>Contact</div>
              </div>
        </div>
    </>
  )
}

export default Navbar
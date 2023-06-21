import React, { useState } from "react";
import './NavBar.scss'
import Logo from '../../assets/Images/biratnagar-normal-logo.svg'
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    if(window.pageXOffset >= '200px'){
      console.log('hehe')
    }
  }
  return(
    <header className="nav-bar">
      <nav className="sticky">
          <img src={Logo} alt="" className="logo"/>
          <ul>
              <li><a href="" className="active">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Our Partners</a></li>
              <li><a href="">Programmes</a></li>
              <li><a href="">Programmes</a></li>
              <li><a href="">Programmes</a></li>
          </ul>
      </nav>
  </header>
  )
}

export default NavBar;
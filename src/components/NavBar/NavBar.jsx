import React, { useState } from "react";
import './NavBar.scss'
import '../Landing/Banner/Banner.scss'
import Logo from '../../assets/Images/biratnagar-normal-logo.svg'
import { useNavigate } from "react-router";
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0)
  const navigate=useNavigate();

  window.onscroll = () => {
    if(window.scrollY >= 150 ){
      setScrolled(true)
    }
    else if(window.scrollY === 0){
      setScrolled(false)
    }
  }
  return(
    <>
      <div className="top-bar">
        <p>Sunny</p>
        <p>Biratnagag</p>
      </div>
      <header className="navigation-bar">
        <nav className={scrolled?'sticky':''}>
            <img src={Logo} alt="" className="logo"/>
            <ul>
                <li><a href="" className="active">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Our Partners</a></li>
                <li><a href="">Programmes</a></li>
                <li ><a href="">Programmes</a></li>
                <li onClick={()=> navigate('/life')}><a>Life at BIC</a></li>
            </ul>
        </nav>
    </header>
  </>

  )
}

export default NavBar;
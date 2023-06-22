import { useNavigate } from "react-router-dom";
import './NavBar.scss';
import Logo from '../../assets/Images/biratnagar-normal-logo.svg';
import React, { useState } from "react";

const NavBar = () => {
  const navigate=useNavigate();

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  // window.onscroll = () => {
  //   if(window.pageXOffset >= '200px'){
  //     console.log('hehe')
  //   }
  }
  return(
    <div className="landing">
      <header className="nav-bar">
        <nav className="scrolled">
            <img src={Logo} alt="" className="logo"/>
            <ul>
                <li><a href="" className="active">Home</a></li>
                <li  onClick={()=>navigate('/about')}><a>About Us</a></li>
                <li onClick={()=>navigate('/blog')}><a>Blog</a></li>
                <li><a href="">Programmes</a></li>
                <li><a href="">Programmes</a></li>
                <li><a href="">Programmes</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default NavBar;
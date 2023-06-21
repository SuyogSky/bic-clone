import React from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.scss'
import Logo from '../../assets/Images/biratnagar-normal-logo.svg'
const NavBar = () => {
  const navigate=useNavigate();
  return(
    <header className="nav-bar">
        <nav>
            <img src={Logo} alt="" className="logo"/>
            <ul>
                <li><a href="" className="active">Home</a></li>
                <li  onClick={()=>navigate('/about')}><a>About Us</a></li>
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
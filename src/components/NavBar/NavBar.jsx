import React, { useState } from "react";
import './NavBar.scss'
import Logo from '../../assets/Images/biratnagar-normal-logo.svg'
import { BsBookmarks, BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

const NavBar = ({pos}) => {

  const navigate = useNavigate();

  // For Scroll Effect On Navigation Bar
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    if(window.scrollY >= 150 ){
      setScrolled(true)
    }
    else if(window.scrollY === 0){
      setScrolled(false)
    }
  }


  // For Menu Button on Responsive Navigation Bar
  const [active, setActive] = useState(false);
  const menuClicked = () => {
      if(active){
          setActive(false)
      }
      else{
          setActive(true)
      }
  }

  // courses hover effect
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const mouseEnter = () => {
    setDrop(true)
  }

  const mouseLeave = () => {
    setDrop(false)
  }

  const clicked = () => {
    if(drop2){
      setDrop2(false)
    }
    else{
      setDrop2(true)
    }
  }

  return(
    <>
        <div className="top">
          <p><BsFillTelephoneFill/><span>+021-500050</span>,&nbsp;&nbsp;<span>+021-500170</span>,&nbsp;&nbsp;<span>+977-9801009090</span></p>
          <p><MdLocationOn/>Biratnagar 5, Bhrikuti Chowk</p>
        </div>
        <header className="nav-bar">
          <nav className={`${pos} ${scrolled?'sticky':''}`}>
              <img src={Logo} alt="" className="logo"/>
              <ul className={`${active? 'active':''}`}>
                  <li onClick={()=>navigate('/')}>Home</li>
                  <li onClick={()=>navigate('/about')}>About Us</li>
                  <li onClick={()=>clicked()} onMouseEnter={()=>mouseEnter()} onMouseLeave={()=>mouseLeave()} className="course">
                    Courses
                    <ul className={`courses ${drop?'active':''} ${clicked?'clicked':''}`}>
                      <li onClick={()=>navigate('/programs')}>Programs</li>
                      <li onClick={()=>navigate('/bibm')}>BIBM</li>
                      <li onClick={()=>navigate('/bihm')}>BIHM</li>
                    </ul>
                  </li>
                  <li onClick={()=>navigate('/partners')}>Our Partners</li>
                      <li onClick={()=>navigate('/admission')}>Admission</li>
                  <li onClick={()=>navigate('/life')}>Life At BIC</li>
                  <li onClick={()=>navigate('/blogs')}>Blogs</li>
                  <li onClick={()=>navigate('/enquire')}>Enquire</li>
              </ul>

              <div className={`menu-btn ${active?'active': ''}`} onClick={()=>menuClicked()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
          </nav>
        </header>
  </>

  )
}

export default NavBar;
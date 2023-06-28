import React, { useState } from "react";
import './Banner.scss'
import Logo from '../../../assets/Images/biratnagar-normal-logo.svg'
import { BsBookmarks, BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

const Banner = () => {

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

  const mouseEnter2 = () => {
    setDrop2(true)
  }

  const mouseLeave2 = () => {
    setDrop2(false)
  }
  return(
    <>
      <section className="banner">
        <div className="top-bar">
          <p><BsFillTelephoneFill/><span>+021-500050</span>,&nbsp;&nbsp;<span>+021-500170</span>,&nbsp;&nbsp;<span>+977-9801009090</span></p>
          <p><MdLocationOn/>Biratnagar 5, Bhrikuti Chowk</p>
        </div>
        <header className="navigation-bar">
          <nav className={scrolled?'sticky':''}>
              <img src={Logo} alt="" className="logo"/>
              <ul className={`${active? 'active':''}`}>
                  <li onClick={()=>navigate('/')}>Home</li>
                  <li onClick={()=>navigate('/about')}>About Us</li>
                  <li onMouseEnter={()=>mouseEnter()} onMouseLeave={()=>mouseLeave()} className="course">
                    Courses
                    <ul className={`courses ${drop?'active':''}`}>
                      <li onClick={()=>navigate('/bibm')}>BIBM</li>
                      <li onClick={()=>navigate('/bihm')}>BIHM</li>
                    </ul>
                  </li>
                  <li onClick={()=>navigate('/partners')}>Our Partners</li>
                  <li onClick={()=>navigate('/about')}>Events</li>
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

        <div className="container">
          <div className="content">
            <p>Embrace Your Future: Discover & Learn.</p>
            <h1><span><h1>B</h1>iratnagar</span> <h1>I</h1>nternational <h1>C</h1>ollege</h1>
            <button><BsBookmarks/>&nbsp;Apply Now</button>
          </div>
          <div className="image">
          </div>

          <span className="bubble bubble1"></span>
          <span className="bubble bubble2"></span>
          <span className="bubble bubble3"></span>
        </div>
      </section>
    </>
  )
}

export default Banner;
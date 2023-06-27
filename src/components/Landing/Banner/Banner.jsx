import React, { useState } from "react";
import './Banner.scss'
import Logo from '../../../assets/Images/biratnagar-normal-logo.svg'
import { BsBookmarks } from 'react-icons/bs'
const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  const [scrollHeight, setScrollHeight] = useState(0)

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
      <section className="banner">

        <div className="container">
          <div className="content">
            <p>Embrace Your Future: Discover & Learn.</p>
            <h1><span>Biratnagar</span> International College</h1>
            <button><BsBookmarks/>&nbsp;Apply Now</button>
          </div>
          <div className="image">
          </div>

          <span className="bubble1"></span>
          <span className="bubble2"></span>
          <span className="bubble3"></span>
        </div>
      </section>
    </>
  )
}

export default Banner;
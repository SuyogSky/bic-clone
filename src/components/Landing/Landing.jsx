import React from "react";
import NavBar from "../NavBar/NavBar";
import './Landing.scss'
const Landing = () => {
  return(
    <>
        <NavBar/>
        <section className="landing">
          <div className="content">
            <p>Embrace Your Future: Discover & Learn.</p>
            <h1><span>Biratnagar</span> International College</h1>
            <button>Apply Now</button>
          </div>
          <div className="image">
            <img src="" alt="" />
          </div>
        </section>
    </>
  )
}

export default Landing;
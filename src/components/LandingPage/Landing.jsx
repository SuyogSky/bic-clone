import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Courses from "./Courses/Courses";
import Events from "./Events/Events";
import Visit from "./Visit/Visit";
import Testimonial from "./Testimonial/Testimonial";
import Next from "./Next/Next";

const Landing = () => {
  return(
    <>
      <Banner/>
      <About/>
      <Courses/>
      <Events/>
      <Visit/>
      <Testimonial/>
      <Next/>
    </>
  )
}

export default Landing;
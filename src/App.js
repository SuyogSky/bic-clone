import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/LandingPage/Landing";
import NavBar from './components/NavBar/NavBar';
import Enquire from './components/EnquirePage/Enquire';
import About from "./components/LandingPage/About/About";
import AboutUs from "./components/AboutUs/AboutUs";
import OurPartners from "./components/OurPartners/OurPartners";
import LifeAtBic from "./components/LifeAtBic/LifeStyle";
import BlogPage from "./components/BlogPage/BlogPage";
import Footer from "./components/Footer/Footer";
import BIBM from "./components/Courses/BIBM/BIBM";
import BIHM from "./components/Courses/BIHM/BIHM";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/enquire" element={<Enquire/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/partners" element={<OurPartners/>}></Route>
          <Route path="/life" element={<LifeAtBic/>}></Route>
          <Route path="/blogs" element={<BlogPage/>}></Route>
          <Route path="/enquire" element={<Enquire/>}></Route>
          <Route path="/bibm" element={<BIBM/>}></Route>
          <Route path="/bihm" element={<BIHM/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;
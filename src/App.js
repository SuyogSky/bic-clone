import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/LandingPage/Landing";
import NavBar from './components/NavBar/NavBar';
import Enquire from './components/EnquirePage/Enquire';
import About from "./components/LandingPage/About/About";
import AboutUs from "./components/AboutUs/AboutUs";
import OurPartners from "./components/OurPartners/OurPartners";
import Admission from "./components/Admission/Admission";
import LifeAtBic from "./components/LifeAtBic/LifeStyle";
import BlogPage from "./components/BlogPage/newBlog";
import Footer from "./components/Footer/Footer";
import BIBM from "./components/Courses/BIBM/BIBM";
import BIHM from "./components/Courses/BIHM/BIHM";
import Programs from './components/Courses/Programes/Programmes'

import Admission2 from './components/BlogPage/admission';
import Christmas from './components/BlogPage/christmas';
import Darkness from './components/BlogPage/darkness';

import AddBlog from './components/AdminPage/AddBlog/AddBlog';

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/partners" element={<OurPartners/>}></Route>
          <Route path="/admission" element={<Admission/>}></Route>
          <Route path="/life" element={<LifeAtBic/>}></Route>
          <Route path="/blogs" element={<BlogPage/>}></Route>
          <Route path="/enquire" element={<Enquire/>}></Route>
          <Route path="/programs" element={<Programs/>}></Route>
          <Route path="/bibm" element={<BIBM/>}></Route>
          <Route path="/bihm" element={<BIHM/>}></Route>

          <Route path='/blog' element={<Admission2/>}></Route>
          <Route path='/xmas' element={<Christmas/>}></Route>
          <Route path='/dark' element={<Darkness/>}></Route>

          <Route path='/add-blog' element={<AddBlog/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;
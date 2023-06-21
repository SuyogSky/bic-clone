import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import Landing from "./components/AboutUs/AboutUs";
import OurPartners from "./components/OurPartners/OurPartners";

const App = () => {
  return(
    // <Landing/>
    // <AboutUs/>
    <BrowserRouter>
      <Routes>
        <Route element={<Landing/>} path="/"></Route>
        <Route element={<AboutUs/>} path="/about"></Route>
        <Route element={<OurPartners/>} path="/partners"></Route>
        
      </Routes>
    </BrowserRouter>

    
  )
}

export default App;
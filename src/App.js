import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import Landing from "./components/AboutUs/AboutUs";
import Blog from "./components/BlogPage/BlogPage";
const App = () => {
  return(
    // <Landing/>
    // <AboutUs/>
    <BrowserRouter>
      <Routes>
        <Route element={<Landing/>} path="/"></Route>
        <Route element={<AboutUs/>} path="/about"></Route>
        <Route element={<Blog/>} path="/blog"></Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App;
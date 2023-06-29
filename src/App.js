import logo from './logo.svg';
import './App.css';
import Newblog from "./Components/newBlog"
import Admission from './Components/admission';
import Christmas from './Components/christmas';
import Darkness from './Components/darkness';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Admission from "./Components/admission"
const App=()=> {
  return (
    <>
    {/* <newBlog/> */}
    {/* <Newblog/> */}
    {/* <Admission/> */}
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Newblog/>}></Route>
        <Route path='/blog' element={<Admission/>}></Route>
        <Route path='/xmas' element={<Christmas/>}></Route>
        <Route path='/dark' element={<Darkness/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

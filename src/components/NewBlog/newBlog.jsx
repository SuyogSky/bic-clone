import "./newBlog.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

// function underline(){

// }

const NewBlog = () => {

    const navigate = useNavigate();

    const NavBar = () => {
        const [scrolled, setScrolled] = useState(false);
        const [scrollHeight, setScrollHeight] = useState(0);
    }
    return (
        <>
            <div class="Christmas">
                <div class="firstColumn">
                    <h2 class="Text">The overlooked benefits of real Christmas trees</h2>
                    <div className="mainImage">
                        <img onClick={() => navigate('/blog')} src={require("../assets/Img/aa.jpg")} alt="hi" class="firstPhoto" /> 
                    </div>
                </div>
                <div class="Space">
                    <div class="secondColumn">
                        <div className="secondImage">
                        <img src={require("../assets/Img/aa.jpg")} alt="hi" /><br />
                        </div>
                        <h3 class="Text1">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h3><br />
                        <div className="thirdImage">
                        <img src={require("../assets/Img/aa.jpg")} alt="hi" />
                        </div>
                        <h3 class="Text2">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h3>
      
                    </div>
                    <br />

                    <div class="thirdColumn">
                        <div className="secondImage">
                        <img src={require("../assets/Img/aa.jpg")} alt="hi" />

                        </div>
                        <h3 class="Text1">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h3><br />
                        <div className="thirdImage">
                            <img src={require("../assets/Img/aa.jpg")} alt="hi" />
                        </div>
                        <h3 class="Text2">The overlooked benefits of real Christmas trees - Dr. Rishikesh Wagle</h3>
                    </div>

                </div>

            </div>
        
        </>
        
    )
    
}

export default NewBlog;
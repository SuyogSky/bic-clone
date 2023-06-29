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
                    {/* <h2 class="Text">Be like a sunflower</h2> */}
                    <div className="mainImage">
                        <img onClick={() => navigate('/blog')} src={require("../assets/Img/sunflower.jpg")} alt="hi" class="firstPhoto" /> 
                    </div>
                </div>
                <div class="Space">
                    <div class="secondColumn">
                        <div className="secondImage" >
                        <img src={require("../assets/Img/The Power of Darkness (1).png")} alt="hi" onClick={() => navigate('/dark')}  /><br />
                        </div>
                        <h3 class="Text1">The Power of Darkness: Lesson Learned - Rohan Roka Chettri</h3><br />
                        <div className="thirdImage">
                        <img src={require("../assets/Img/Rashmi Atal.png")} alt="hi" onClick={() => navigate('/blog')}  />
                        </div>
                        <h3 class="Text2">My first period, My new friend - Rashmi Atal</h3>
      
                    </div>
                    <br />

                    <div class="thirdColumn">
                        <div className="secondImage">
                        <img src={require("../assets/Img/aa.jpg")} alt="hi" onClick={() => navigate('/xmas')}  />

                        </div>
                        <h3 class="Text1"> The overlooked benefits of real Christmas trees -Dr. Rishikesh Wagle</h3><br />
                        <div className="thirdImage">
                            <img src={require("../assets/Img/Thumbnail.png")} alt="hi" onClick={() => navigate('/blog')}  />
                        </div>
                        <h3 class="Text2">Every man is a BATMAN - Raghav</h3>
                    </div>

                </div>

            </div>
        
        </>
        
    )
    
}

export default NewBlog;
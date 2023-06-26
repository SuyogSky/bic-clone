import React from "react";
import "./Slideshow.scss";

const Slideshow = () => {
    return (
        <>
        {/* SlideShow */}
            <div className="Slideshow">
                <div className="left_Image">
                    <img src={require("../../assets/Slideshow/Img1.jpg")} alt="Image" className="Image1" />
                    <img src={require("../../assets/Slideshow/Img2.jpg")} alt="Image" className="Image2" />
                    <img src={require("../../assets/Slideshow/Img3.png")} alt="Image" className="Image3" />
                </div>

                <div className="main_Image">
                    <img src={require("../../assets/Slideshow/Img7.png")} alt="Image" className="Image7" />
                </div>

                <div className="right_Image">
                    <img src={require("../../assets/Slideshow/img5.png")} alt="Image" className="Image4" />
                    <img src={require("../../assets/Slideshow/Img7.png")} alt="Image" className="Image5" />
                    <img src={require("../../assets/Slideshow/Img7.png")} alt="Image" className="Image6" />
                </div>
            </div>
        </>
    );
};

export default Slideshow;
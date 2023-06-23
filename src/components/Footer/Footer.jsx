import { useNavigate } from "react-router-dom";
import "../Footer/Footer.scss";
import logo from "../../assets/Images/biratnagar-normal-logo.svg";
import React, { useState } from "react";

import fbicon from '../../assets/Footer/fbicon.png';
import instaicon from '../../assets/Footer/instaicon.png';
import call from '../../assets/Footer/call.png';
import email from '../../assets/Footer/email.png';
import location from '../../assets/Footer/location.png';


// function redirecto(name) {

// }

const redirecto = () => {
    window.location.replace("http://www.w3schools.com");
    return;
}

const Footer = () => {
    const navigate = useNavigate();

    const Footer = () => {
        const [scrolled, setScrolled] = useState(false);
    };
    return (
        <div className="footer">
            <div className="main-container">
                <div className="main">
                    <div className="logo-enquery">
                        <div className="logo">
                            <img src={logo} alt="" height="100px" />
                        </div>
                        <div className="buttons">
                            <button className="enquerybtn">Enquire Now</button>
                            <button className="contactbtn">Contact Button</button>
                        </div>
                    </div>
                    <div className="contact-about">
                        <div className="first">
                            <ul>
                                <li><img src={location} alt="" /> Biratnagar 5, Bhrikuti Chowk</li>
                                <li><img src={call} alt="" />977-9801009090</li>
                                <li><img src={email} alt="" />info@bicnepal.edu.np</li>
                            </ul>
                        </div>
                        <div className="second">
                            <ul>
                                <li>About</li>
                                <li>Home</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="third">
                            <ul>
                                <li>Enquery Now</li>
                                <li>Scholarship Programmes</li>
                                <li>Our Patners</li>
                            </ul>
                        </div>
                        <div className="responsive">
                            <div className="fourth">
                                <ul>
                                    <li>Events</li>
                                    <li>Sample</li>
                                    <li>Sample</li>
                                </ul>
                            </div>
                            <div className="fifth">
                                <h1>Socials</h1>
                                <div className="facebook">
                                    <img src={fbicon} alt="" />

                                    <span onClick={() => redirecto()}>Facebook</span>
                                </div>

                                <div className="insta">
                                    <img src={instaicon} alt="" />
                                    <span onClick={() => redirecto()}>Instagram</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </div>

    );
};

export default Footer;

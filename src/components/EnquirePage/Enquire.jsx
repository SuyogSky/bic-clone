import React from "react";
import NavBar from "../NavBar/NavBar";
import './Enquire.scss';
import Captcha from '../../assets/Enquire/recaptcha-logo.png'
import { IoMdMail } from 'react-icons/io';
import { FaUserGraduate } from 'react-icons/fa';
import { BiLinkAlt } from 'react-icons/bi';
import EnquireImg from '../../assets/Enquire/enquire.png'

const Enquire = () => {
    return (
        <>
            <NavBar pos='sticky'/>
            <section className="enquire">
                <div className="image">
                    <img src={EnquireImg} alt="" />
                </div>

                <div className="enquire-container">
                    <h2>Ready to Join Tell us More..</h2>
                    <form action="">
                        <label htmlFor="first-name">Name<span>*</span></label>
                        <div className="name">
                            <input type="text" placeholder="First" id="first-name" />
                            <input type="text" placeholder="Last" />
                        </div>

                        <label htmlFor="phone">Phone Number<span>*</span></label>
                        <div className="phone">
                            <p>+977</p>
                            <input type="number" id="phone" />
                        </div>

                        <label htmlFor="email">Email Address<span>*</span></label>
                        <div className="email">
                            <p><IoMdMail/></p>
                            <input type="email" id="email" />
                        </div>

                        <label htmlFor="sector">Sector<span>*</span></label>
                        <div className="sector">
                            <p><FaUserGraduate/></p>
                            <input type="text" id="sector" />
                        </div>

                        <label htmlFor="referal">Referal<span>*</span></label>
                        <div className="referal">
                            <p><BiLinkAlt/></p>
                            <input type="text" id="referal" />
                        </div>

                        <div className="captcha">
                            <input type="checkbox" />
                            <p>I'm not a robot</p>
                            <img src={Captcha} alt="" />
                        </div>

                        <input type="submit" value='Submit'/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Enquire;
import React from "react";
import "./BIHM.scss";
import NavBar from "../../NavBar/NavBar";
import Module from './Module/Module'

const BIHM = () => {
    return (
        <>
        <NavBar/>
            {/* Photo and Heading */}
            <div className="BIHM_Container">
                <div className="BIHM_Photo">
                    <img src={require("../../../assets/BIHM/about-banner2.png")} alt="Image" className="image" />
                </div>
            </div>
            <div className="BIHM_Heading">
                <p>BA (Hons) INTERNATIONAL HOSPITALITY MANAGEMENT</p>
            </div>


            <div className="about_BIHM">
                <div className="contains_BIHM">
                    <div className="about_Image">
                        <img src={require("../../../assets/BIHM/Requirement.png")} alt="Image" className="Nailshika_Image" />
                        <div className="frame">
                            <div className="red_BIHM"></div>
                            <div className="blue_BIHM"></div>
                        </div>
                    </div>
                    <div className="text-content">
                        <h1>BIHM</h1>
                        <p>Bachelors in International Business Management is an interdisciplinary approach to global citizenship that will equip you with the knowledge and expertise to manage across the global framework. This course will train you in key areas of business by helping you develop your own understanding of complex notions in the international business environment, with digital literacy skills via the use of software employed by contemporary organizations.</p>
                    </div>
                </div>
            </div>


            <div className="BIHM_Module">
                <h1> Module & Contents </h1>
                <p>Acquire a thorough comprehension of programming languages, information systems,
                    software and hardware technologies, and various other related topics.</p>
            </div>
            <Module/>
        </>
    );
};

export default BIHM;
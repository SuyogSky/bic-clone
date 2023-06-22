import React from "react";
import './About.scss';
import { FaGraduationCap } from 'react-icons/fa'
const About = () => {
    return (
        <section className="why">
            <div className="about-heading">
                <p>Why BIC?</p>
                <h2>What You Will Achieve</h2>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>

            <div className="about-container">
                <div className="image">
                    <div className="img"></div>
                    <div className="shadow"></div>
                </div>

                <div className="contents">
                    <div className="card1">
                        <FaGraduationCap/>
                        <h4>Academic Prestige</h4>
                        <p>Teaching facilities and infrastructure meet the international standards set by the university partner.</p>
                    </div>

                    <div className="card1">
                        <FaGraduationCap/>
                        <h4>Academic Prestige</h4>
                        <p>Teaching facilities and infrastructure meet the international standards set by the university partner.</p>
                    </div>

                    <div className="card1">
                        <FaGraduationCap/>
                        <h4>Academic Prestige</h4>
                        <p>Teaching facilities and infrastructure meet the international standards set by the university partner.</p>
                    </div>

                    <div className="card1">
                        <FaGraduationCap/>
                        <h4>Academic Prestige</h4>
                        <p>Teaching facilities and infrastructure meet the international standards set by the university partner.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
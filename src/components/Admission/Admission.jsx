import React from "react";
import "./Admission.scss";

const Admission = () => {
    return (
        <div className="admission">
            <img src={require('../../assets/Admission/career.png')} alt="" className="bg"/>
            <div className="entry-requirement">
                <p>Entry Requirement</p>
            </div>
            <div className="image-wrapper">
                    <img src={require("../../assets/Admission/spring.png")} alt="Image" className="image" />
                </div>
            <div className="academic-level">
                <div className="content-wrapper">
                    <h1>Academic Level</h1>
                    <ul>
                        <li>NEB +2 requires an overall aggregate of 2.2 CGPA (55%) or above.</li>
                        <li>Each subject (theory and practical) must have a grade of D or above.</li>
                        <li>A minimum score of C (50%) or above is required in the SEE Mathematics exam.</li>
                    </ul>
                </div>
            </div>

            <div className="academic-level">
                <div className="content-wrapper">
                    <h1>Academic Proficiency</h1>
                    <ul>
                        <li>English NEB XII Marks grade C+ or above or 2.4 GPA.</li>
                        <li>For Level 4 or Year 1 BBA</li>
                        <li>Pass in General Paper or English Language or IELTS 6 or PTE 53.</li>
                    </ul>
                </div>
            </div>


            <div className="academic-level">
                <div className="content-wrapper">
                    <h1>Note</h1>
                    <p>Applicants not meeting the aforementioned criteria for English can demonstrate their English proficiency with the following internationally recognized English Tests.</p>
                </div>
            </div>


        </div>
    );
};

export default Admission;

import React from "react";
import "./programmes.scss"

const programmes = () => {
    // js

    return (
        <>
            {/* Cover Photo with contains */}
            <div className="programmes">
                <div className="Cover-Image">
                    <img src={require("../../assets/Programmes/life_at_BIC.jpg")} alt="Cover Image" />
                    <div className="dim"></div>
                    <div className="programmes_Content">
                        <h1> Our Programmes </h1>
                        <p>BIC provides comprehensive undergraduate programmes through BIBM and BIHM, offering diverse opportunities for academic and professional development.</p>

                    </div>
                </div>
            </div>

            {/* Courses */}
            <div className="programmes_Heading">
                <h1>Locate Your Ideal Field of Study</h1>
                <p>Beginning your college journey is a very personal and sacred experience that encompasses
                    a wide range of events compounding towards your growth.</p>
            </div>

            {/* Courses Disturbution BIBM */}
            <div className="course_Distrubution">
                <div className="BIBM">
                    <div className="course_Name">
                        <p>BIBM</p>
                    </div>
                </div>
                <div className="Course_BIBM">
                    <img src={require("../../assets/Programmes/life_at_BIC.jpg")} alt="Cover Image" />
                </div>

                {/* Courses Disturbution BIHM */}
                <div className="BIHM">
                    <div className="course_Names">
                        <p>BIHM</p>
                    </div>
                </div>
                <div className="Course_BIHM">
                    <img src={require("../../assets/Programmes/life_at_BIC.jpg")} alt="Cover Image" />
                </div>
            </div>

            {/* Hat */}
            <div className="hat">
                <img src={require("../../assets/Programmes/hat.png")} alt="hat Image" />
                <img src={require("../../assets/Programmes/hat.png")} alt="hat Image" />
            </div>
        </>
    )
}

export default programmes

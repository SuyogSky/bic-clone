import React from "react";
import NavBar from "../NavBar/NavBar";
import '../OurPartners/OurPartners.css';
import image1 from '../../assets/Images/wolver.jpg'
import image2 from '../../assets/Images/pppp.png'
import image3 from '../../assets/Images/Group.png'
import image4 from '../../assets/Images/ing1.png'
import image5 from '../../assets/Images/oo.png'
import image6 from '../../assets/Images/corporate-partnerships.jpeg'
import image7 from '../../assets/Images/black-logo1-removebg-preview.png'
import image8 from '../../assets/Images/Sanima-Bank.png'
import image9 from '../../assets/Images/cim.webp'
const OurPartners = () => {
  return(
    <>
        <NavBar/>

      <div className="Section1">
                  
                  <div className="about-heading">
                  <h1 className="Heading">Our Partners</h1>
                <div className="u-line">
                    <span className="box"></span>
                    <span className="line"></span>
                    <span className="box"></span>
                </div>
            </div>
                  <div className="block1"></div>
                  <img className="Wolver" src={image1} alt="Image"/>
                  <div className="block2" ></div> 
                  <div className="text1">
                  <div className="University"></div>
                  <img className='logo1' src={image2} alt=""/>
                  <h1>Our University</h1>

            <div>
              <h4>
              The University of Wolverhampton is a prestigious institution that 
              has been committed to offering opportunities and academic excellence
               for nearly 190 years. Their motto, "Innovation and Opportunity," 
               reflects their ongoing dedication to providing students with the best 
               possible options as they progress from being students to graduates and 
               professionals.working professional.  
              </h4>
            </div>  
        </div>
    </div>

    {/* Another Section */}

    <div className="Section2">
        <div className="block3"></div>
        <img className="ing" src={image4} alt="Image"/>
        <div className="block4"></div>
        <div className="text2">
        <div className="University"> </div>
        <img className='logo2' src={image3} alt=""/>
        <h1>Innovate Nepal</h1>

        <div>
          <h4>
          ING is an investment holding company that focuses on innovating 
          higher education in Nepal by blending international qualifications 
          with the local context. Due to the pioneering work that we have 
          done in the country, the Nepalese Ministry of Education in 2014 
          awarded our Founder/ Group Chairman, Mr. Sulav Budhathoki, with 
          a Letter of Commendation for advancing the betterment of higher 
          education in Nepal.   
          </h4>
         </div>  
        </div>
    </div>

    {/* Last Section */}
    <div className="Section3">
        <div className="block5"></div>
        <img className="Corporate" src={image6} alt="Image"/>
        <div className="block6"></div>
        <div className="text3">
        <div className="University"> </div>
        <img className='logo3' src={image5} alt=""/>
        <h1>Corporate Partners</h1>

        <div>
          <div className="l1">
            <h4>Sanima Bank</h4>
            <img src={image8} alt=""/>
          </div>

          <div className="l2">
            <h4>Nepalirika Hotel</h4>
            <img src={image7} alt=""/>
          </div>

          <div className="l3">
            <h4>Chamber of Industries Morang</h4>
            <img src={image9} alt=""/>
          </div>


         </div>  
        </div>
    </div>
    </>
  )
}

export default OurPartners;
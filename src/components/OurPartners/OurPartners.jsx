import React from "react";
import NavBar from "../NavBar/NavBar";
import './OurPartners.css'
import '../OurPartners/OurPartners.css'
import image1 from '../../assets/Images/wolver.jpg'
import image2 from '../../assets/Images/pppp.png'


const OurPartners = () => {
  return(
    <>
        <NavBar/>

    <div>

        <div>
         <h1 className="Heading">Our Partners</h1>
         </div>

        <div className="guys"></div>
         <img className="Wolver" src={image1} alt="Image"/>
        <div className="guys1" >
        </div>



        <div className="text1">
             
            <div className="University">
            </div>
            <img className='logo1' src={image2} alt=""/>
            <h1>University</h1>

            <div>
              <h4>The University of Wolverhampton is a renowned
                  university with a practice of providing opportunity
                  and academic excellence for 190 years. The university’s
                  coat of arms carries the motto: ‘Innovation and
                  Opportunity’ – something which is as true today
                  as all those years ago. The University of 
                  Wolverhampton cherishes the chances to provide
                  the students with the best possible options as
                  they transition from a student to graduate and
                  finally to a working professional. 
              </h4>
            </div>

        
           
            
            

            
        </div>
    </div>
    </>
  )
}

export default OurPartners;
import React, { useState } from 'react';
import { BsFillArrowDownCircleFill} from "react-icons/bs";

const Services = (props) => {
  return (
    <div>
      <section className="service-main-container ">
        <div className='container service-container'>
          <h1 className='main-heading text-center fw-bold'>RECOMMENDED SERVICES</h1>
          <p className='text-bold'>Our runway experts have curated some of the most popular services at Lakmé Salon, just for you. Take your pick and head to your nearest salon and get started on your makeover!</p>
          <div className='row'>
              
                    
                        <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
              <i className='icon'><BsFillArrowDownCircleFill/></i>
              
              <img src="images (33).jfif" className='img' alt="about-us"/>
               <h3>{props.img1}</h3>
            </div>
                  
                 
            <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
              <i className='icon'><BsFillArrowDownCircleFill/></i>
             
              <img src="skin.jpg" className='img' alt="about-us"/>
              <h3>{props.img2} </h3>
            </div>
          

            <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
              <i className='icon'><BsFillArrowDownCircleFill/></i>
              <img src="tn-hair-care_1.webp.jpg" className='img' alt="about-us"/>
              <h3>{props.img3} </h3>
             

            </div>


            <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
              <i className='icon'><BsFillArrowDownCircleFill/></i>
              <img src="tn-personal-grooming_1.webp.jpg" className='img' alt="about-us"/>
              <h3>{props.img4} </h3>

            </div>
 

            <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
              <i className='icon'><BsFillArrowDownCircleFill/></i>
              <img src="tn-makeup.webp.jpg" className='img' alt="about-us"/>
              <h3>{props.img5} </h3>
           
            </div>

            <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'>
              <i className='icon'><BsFillArrowDownCircleFill/></i>
              <img src="61872554-home-recommended-4.jpg" className='img' alt="about-us"/>
              <h3>{props.img6}</h3>

            </div>

            
  
          </div>

        </div>
      </section>
    </div>
  )
}
 Services.defaultProps={
  img1:"Illuminate Nail Art",
  img2:"Candy Crush Pedicure & Manicure",
  img3:"Natural Color- Side Locks",
  img4:"Personal Grooming ",
  img5:"Makeup",
  img6:"Bridal Makeup",
  
}

export default Services;


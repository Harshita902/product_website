import React, { Component } from 'react'

export default class About extends Component {
  render() {
      return (
        <div>
        <div className="container-fluid text-uppercase about-page">
            <div className="about-items">
                 
                <h4 className="beauty">BEAUTY IS POWER .THE RIGHT MAKEUP ENHANCES THAT;<br/>IT'S A WOMEN'S SECRET.</h4>
                <br/>
                
                </div>
        </div> 
        
        
        <div className="container p-3">
                <h3>About Us</h3>
            <div className="row">
                <div className="col-md-12 col-xl-6 col-sm-12">   
                    <img src="pexels-photo-6877427.jpeg" className='img' alt="about-us"/>
                </div>

                <div className=" para  col-md-12 col-xl-6 col-sm-12">   
                    <p>
                    The contemporary Indian beauty expert - Lakmé continuously innovates to offer a wide range of high performance and
                     world class cosmetics and skincare products that have earned recognition from the People for the Ethical Treatment of Animals (PETA). 
                    We, at Lakme, combine international cosmetic technology with an in-depth understanding of the Indian woman’s needs and offer a comprehensive beauty experience to our customers through products that are ideal for a variety of Indian skin tones.
                    </p>
                    <p> Lakmé was the country's first cosmetic brand to introduce makeup to Indian women and takes pride in being the expert on Indian Beauty for over 50 years.
                     We also take immense pride in being a compassionate beauty brand which is why we do not believe in or support testing on animals. Our bond with beauty and fashion goes beyond skincare & makeup hence it is manifested through the renowned Lakmé Fashion Week,
                      which is now the largest fashion event of its kind in the country that celebrates the beauty of fashion.
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}
}
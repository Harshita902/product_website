import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ComA } from '../Contextapi.js/ComA';


export default class Home extends Component {
  render() {
    return (
      <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="img"
      src="1169x5114_1440x (1).png" 
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src="A_c073b746-17c1-46e5-a8a2-f2fe3797306c_1440x.jpg" 
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src="1169x511_sale_offer_banner_1440x.png" 
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<div className='container content'>
  <h1><ComA/></h1>


      <br/>
      <div className='row'>
          <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img className="card-img-top" src='pexels-photo-8101532.jpeg' alt="Card image cap "/>
              <div class="card-body">
                <Link to='/cart' class="btn btn-success">Buy Now</Link>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img className="card-img-top" src='pexels-photo-3685523.jpeg' alt="Card image cap"/>
              <div class="card-body">
                 <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img class="card-img-top" src='pexels-photo-8128066.jpeg' alt="Card image cap"/>
              <div class="card-body">
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>
          </div>   

              <br/>

          <div className='row'>
          <div className="col-md-6 col-lg-4  col-sm-12">
              <div className="card cardcss ">
              <img class="card-img-top" src='pexels-photo-7428098.jpeg' alt="Card image cap"/>
              <div class="card-body">
               
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img className="card-img-top" src='pexels-photo-3685530.jpeg' alt="Card image cap"/>
              <div class="card-body">
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img class="card-img-top" src='pexels-photo-2586073.jpeg' alt="Card image cap"/>
              <div class="card-body">

                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>
          </div>   
<br/>


<div className='row'>
          <div className="col-md-6 col-lg-4  col-sm-12">
              <div className="card cardcss ">
              <img class="card-img-top" src='pexels-photo-3993398.jpeg' alt="Card image cap"/>
              <div class="card-body">
               
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img className="card-img-top" src='pexels-photo-8102290.jpeg' alt="Card image cap"/>
              <div class="card-body">
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img class="card-img-top" src='pexels-photo-3609620.jpeg' alt="Card image cap"/>
              <div class="card-body">

                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>
          </div>   


<br/>


<div className='row'>
          <div className="col-md-6 col-lg-4  col-sm-12">
              <div className="card cardcss ">
              <img class="card-img-top" src='pexels-photo-7428092.jpeg' alt="Card image cap"/>
              <div class="card-body">
               
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img className="card-img-top" src='pexels-photo-4620838.jpeg' alt="Card image cap"/>
              <div class="card-body">
                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4  col-sm-12">
              <div class="card cardcss ">
              <img class="card-img-top" src='pexels-photo-6877427.jpeg' alt="Card image cap"/>
              <div class="card-body">

                <a href='#' class="btn btn-success">Buy Now</a>
              </div>
            </div>
            </div>
          </div>   


<br/>

</div>



 
    </div>
    )
  }
}








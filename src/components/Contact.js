import React, { Component } from 'react';
import ReactFormInputValidation from "react-form-input-validation";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            email: "",
            phone_number: "",
            
          },
          errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
        }
      }
  render() {
      return (
          <div>
              <div className="container-fluid aa">
                  <div className="row">
                      <div className="col-md-6 col-lg-6">
                          
                      <img src="1169_x_511_day_to_night_radiance_kit_salepage_banner_1440x.jpg  " className='imag '  alt="contact-us"/>
                          </div>
                      
                    
                      
                      <div className="col-md-6 col-lg-6">
                          <form className='form' onSubmit={this.form.handleSubmit}>
                          <h3>Please Fill the Form</h3>
                              <div>
                                  <label for="name" className="form-label"> Name
                                  <input type="text" name='name' className="form-control" placeholder='Enter your name'
                                  onBlur={this.form.handleBlurEvent}
                                  onChange={this.form.handleChangeEvent}
                                  value={this.state.fields.name} /> 
                                  
                                  </label>
                                  
                                  <label className="error">
              
                         {this.state.errors.name ? this.state.errors.name : ""}
              </label>
                              </div>

                              <div>
                                  <label for="number" className="form-label ">Contact Number
                                  <input type="phone_number" name='phone_number' className="form-control" placeholder='Enter your number'
                                   onBlur={this.form.handleBlurEvent}
                                   onChange={this.form.handleChangeEvent}
                                   value={this.state.fields.phone_number} /> 
                                  </label>
                                  <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
                              </div>

                              <div>
                                  <label for="email" className="form-label">Email Address
                                  <input type="email" name='email' className="form-control" placeholder='Enter your email'
                                   onBlur={this.form.handleBlurEvent}
                                   onChange={this.form.handleChangeEvent}
                                   value={this.state.fields.email} /> 
                                  </label>
                                  <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
                              </div>

                          
                             
                              
                              
                              <button type="submit" className="btn btn-danger">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>


            
		
          </div>
      )
  }
}
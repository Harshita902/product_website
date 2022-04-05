import React, { Component } from 'react';
import  Axios  from 'axios';


export default class OtherItem extends Component {
    state={newsData:[]}
    componentDidMount()
    {
        const URL= "https://fakestoreapi.com/products"
        
        
        Axios.get(URL)
        .then(res=>
            {
               this.setState({newsData:res.data}); 
            })
    }
  render() {
    return (
        <div>
          <h1>Api Hit</h1>
        <div className='container'>
          <div className='row'>
              {
                  this.state.newsData.map((res)=>{
                      return(
                          <div className='col-md-4 col-lg-4 col-sm-12'>
                          <div className="card">
                              
                              <div className="card-body">
                              <img src={res.image} width={300} height={300}/>
                              <h1 className='card-title'>{res.char_id}</h1>
                                  <h5 className="card-title">{res.title}</h5>
                                  <p>{res.price}</p>
                                   
                                  
                              </div>
                           
                          </div>
                          </div>
                          
                      )
                  })
              }
          </div>
        </div>
        </div>
        

    )
            }
        }
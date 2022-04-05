import React,{ useReducer }  from 'react';
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
export default function Card() {
    const initialstate=1;
   const reducer=(state,action)=>
   {
       console.log(state,action);
       if(action.type==='increment')
       {
           return state+1;
       }

       if(action.type==='decrement')
       {
           return state-1;
       }

      
   }

    const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
  <div className='container-fluid aa'>
  <h1>Card</h1>
      <div className='row'>
          <div className='col-md-10 col-11 mx-auto'>
              <div className='row mt-5 gx-3'>
                <div className='col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow'>
                    <div className='card p-4'>
                        <h2 className='py-4 font-weight-bold'>Card (1 items)</h2>
                        <div className='row'>
                            <div className='col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_image'>
                                <img src='images (2).png' className='img-fluid' alt='cart img'/>

                            </div>

                            {/* card product details */}

                            <div className='col-md-7 col-11 mx-auto px-4 mt-2'>
                                <div className='row'>
                                    {/* product name*/}
                                    <div className='col-6 card-title'>
                                        <h1 className='mb-4 product_name'>Lipstick</h1>
                                        <p>Lipstic-Red</p>
                                        <p>Color-Red</p>
                                        <p>Lipstic-Red</p>

                                    </div>
                                   {/*quantuty inc dec*/}
                                    <div className='col-6'>
                                <div className='justify-content-end set_uantity'>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button>{state}</button>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
                                   </div>

                                    </div>

                                    <div className='row'>
                                        <div className='col-8 d-flex justify-content-between remove_wish'>
                                            <p><MdDelete/>REMOVE ITEMS</p>
                                            <p><AiOutlineHeart/>MOVE TO WISH LIST</p>

                                        </div>

                                        <div className='col-4 d-flex justify-content-end price_money'>
                                            <h3>$<span className='itemval'>0.00</span></h3>

                                        </div>

                                        

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5'>
                        <div className='right_side p-3 shadow bg-white'>
                            <h2 className='product_name'>The Total Amount</h2>
                            <div className='price_indiv d-flex justify-content-between'>
                                <p>product amount</p>
                                <p>$<span>0.00</span></p>

                            </div>

                            <div className='price_indiv d-flex justify-content-between'>
                                <p>Shipping charge</p>
                                <p>$<span>0.00</span></p>

                            </div>
                            <hr/>
                            <div className='total-amt d-flex justify-content-between font-weight-bold'>
                                <p>Tthe total amount of (including VAT)</p>
                                <p>$<span className='total_card_amt'>0.00</span></p>

                            </div>
                            <button className='btn btn-primary text-uppercase'>Checkout
                            </button>
                        </div>

                    </div>

                </div>

              </div>

          </div>
      </div>

  </div>
    </div>
  )
}

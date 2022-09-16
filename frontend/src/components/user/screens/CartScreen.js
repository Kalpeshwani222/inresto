import React from 'react'
import {useSelector} from "react-redux";
import Navbar from '../../Navbar';

const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;


    return (
    <>
        <section className=''>
            <div className=''>
                <Navbar />
                {cartItems.map((item) =>{
                    return (
                        <>
                            <div style={{
                                border:"1px solid",
                                width:"15rem",
                                margin:"1rem", 
                                padding:"10px",
                            }}>
                            <img src={item.image} style={{
                                width:"100%",
                                height:"100px"
                            }} alt="item-img" />
                                <br />
                                
                                 <p >{item.name}</p>
                            <p>price : {item.quantity} * {item.price} =  {item.price}</p>
                            
                            <h5> &nbsp;
                            <button>+</button> &nbsp;
                            {item.quantity}&nbsp;&nbsp;
                            <button style={{
                                display:"inline-block"
                            }}>-</button>
                            </h5>
                             
                            </div>
                        </>
                    )
                })}
            </div>
        </section>    
    </>
  )
}

export default CartScreen
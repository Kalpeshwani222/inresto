import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from "../../../actions/cartAction";
import {  useParams } from "react-router-dom";

const Items = ({ menuItem }) => {
 const param = useParams();
  const[quantity,setQuantity] = useState(1);
  const[variant,setVariant] = useState('full');

//  console.log(param.tableno);

  const dispatch = useDispatch();

  const addToCartHandler = () =>{
      dispatch(addToCart(menuItem,variant,quantity ))
  }


  return (
    <>
      <div
        style={{
         
          width: "250px",
          height: "270px",
          border: "1px solid",
          justifyContent: "center",
          display: "inline-block",
          margin:"1rem 1rem"
        }}
      >
        <p>{menuItem.name} <strong>{menuItem.price}</strong></p>
        
        <p>{menuItem.desc}</p>

            <select value={variant} onChange={ e=> setVariant(e.target.value)}>
              {menuItem.varients.map((cur) =>{
                return (
                  <>
                    <option >{cur}</option>
                  </>
                )
              })}
            </select>
        
              
              <p>Price : {menuItem.prices[0][variant] * quantity} -/RS</p>
            
          
        

        <button 
        onClick={addToCartHandler}
        style={{
          marginTop:"-10px",
          padding:"5px",
        }}>Add</button>
      </div>
    </>
  );
};

export default Items;

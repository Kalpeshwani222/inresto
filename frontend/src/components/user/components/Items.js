import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from "../../../actions/cartAction";


const Items = ({ menuItem }) => {

  const[quantity,setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addToCartHandler = () =>{
      dispatch(addToCart(menuItem,quantity ))
  }


  return (
    <>
      <div
        style={{
         
          width: "200px",
          height: "180px",
          border: "1px solid",
          justifyContent: "center",
          display: "inline-block",
          margin:"1rem 1rem"
        }}
      >
        <p>{menuItem.name} <strong>{menuItem.price}</strong></p>
        
        <p>{menuItem.desc}</p>

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

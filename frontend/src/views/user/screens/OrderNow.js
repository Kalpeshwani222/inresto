import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../../redux/actions/orderAction";

const OrderNow = ({ subTotal }) => {
  const dispatch = useDispatch();
  const param = useParams();

  const userState = useSelector((state) => state.LoginUserReducer);
  const { userInfo } = userState;

  // console.log(param.tableno);
  // console.log(subTotal);
   let localStorageData = JSON.parse(localStorage.getItem("userInfo"));
  
  const ordernow = () => {
    dispatch(placeOrder(localStorageData['tableNo'], subTotal));
  };

  return (
    <>
      {userInfo ? (
        <>
          <button
            onClick={() => ordernow()}
            style={{
              cursor: "pointer",
            }}
          >
            Order Now
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};

export default OrderNow;

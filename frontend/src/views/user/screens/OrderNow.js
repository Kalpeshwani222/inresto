import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../../actions/orderAction";

const OrderNow = ({ subTotal }) => {
  const dispatch = useDispatch();
  const param = useParams();

  const userState = useSelector((state) => state.LoginUserReducer);
  const { userInfo } = userState;

  // console.log(param.tableno);

  // console.log(subTotal);

  const ordernow = () => {
    dispatch(placeOrder(param.tableno, subTotal));
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

import React from "react";
import {  Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../../redux/actions/orderAction";
import { Button } from "@mui/material";

const OrderNow = ({ subTotal }) => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.LoginUserReducer);
  const { userInfo } = userState;
  let localStorageData = JSON.parse(localStorage.getItem("userInfo"));

  const ordernow = () => {
    dispatch(placeOrder(localStorageData["tableNo"], subTotal));
  };

  return (
    <>
      {userInfo ? (
        <>
          <Button
            variant="contained"
            onClick={() => ordernow()}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              backgroundColor: "#10b981",
            }}
          >
            {" "}
            Order Now
          </Button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
};

export default OrderNow;

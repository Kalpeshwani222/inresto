import { Button } from "@mui/material";
import React from "react";

const OrderSuccessScreen = ({orderDetails}) => {

const goToHome=() =>{
  window.location.reload(true);
  window.location.href = "/";
    }
  return (
    <>
      <div
        className=""
        style={
          {
            //   backgroundColor:"yellow",
          }
        }
      >
        <div>
          <div className="image-div d-flex justify-content-center">
            <img
              src="/images/check.png"
              alt="check-icon"
              style={{
                width: "280px",
                height: "280px",
              }}
            />
          </div>

          <div
            className="order-content d-flex justify-content-center"
            style={{
              marginTop: "6rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "18px",
                }}
              >
                Your Order Placed !
              </h3>
              <br />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p>{`Order ID #${orderDetails.data._id.slice(18,24)}`}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button
          onClick={()=> goToHome()}
            variant="contained"
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              backgroundColor: "#10b981",
              width: "50%",
              height: "48px",
              borderRadius: "7px",
              fontSize: "17px",
              fontWeight: "450",
            }}
          >
            Back To Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessScreen;

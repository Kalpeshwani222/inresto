import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../header/Navbar2";
import {
  addToCart,
  deleteCart,
  removeSingleItem,
} from "../../../redux/actions/cartAction";
import { removeAllItemsFromCart } from "../../../redux/actions/orderAction";
import { useHistory } from "react-router-dom";
import OrderNow from "./OrderNow";
import toast, { Toaster } from "react-hot-toast";
import { Divider, Backdrop, CircularProgress, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cartScreen.css";
import OrderSuccessScreen from "./order/OrderSuccessScreen";

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [price, setPrice] = useState(0);

  //cart state
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  //order state
  const orderState = useSelector((state) => state.createOrder);
  const { loading, success, error } = orderState;

  // const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  const total = () => {
    let price = 0;
    cartItems.map((ele, k) => {
      price = ele.price * ele.quantity + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    if (error) {
      toast.error(`${error}`, {
        position: "top-center",
      });
    }
    if (success) {
      dispatch(removeAllItemsFromCart());
      toast.success(`${success.message}`, {
        position: "top-center",
        duration: 8000,
      });
    }
  }, [error, success]);

  return (
    <>
      <section className="cart-seaction">
        {!success && <Navbar />}
        {loading ? (
          <>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </>
        ) : null}
        {!cartItems.length && !success > 0 ? (
          <>
            <div className="empty-cart">
              <img
                src="/images/emptycart.jpg"
                alt="empty-img"
                className="empty-cart-img"
              />
              <span>Your bag is empty</span>
              <p>Looks like you haven't made your choice yet...</p>
              <Button
                className="back-to-home"
                onClick={() => history.goBack()}
                variant="contained"
                disableElevation
                disableFocusRipple
              >
                Back To Home
              </Button>
            </div>
          </>
        ) : (
          <>
            {!success ? (
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="shopping-cart-title d-flex justify-content-between">
                      <h3>Shopping Cart</h3>
                      <h3>{cartItems.length} Items</h3>
                    </div>
                    <Divider
                      sx={{
                        height: "1px",
                        color: "#e8eaf6",
                        mt: 2,
                      }}
                    />
                    <div className="row table-title d-flex justify-content-between mt-5">
                      <p className="table-title col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                        Product Details
                      </p>
                      <p className="table-title col-lg-3 col-sm-3 col-3 d-flex  justify-content-center">
                        QTY
                      </p>
                      <p className="table-title col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                        Price
                      </p>
                      <p className="table-title col-lg-3 col-sm-3 col-3 d-flex justify-content-centers">
                        Total
                      </p>
                    </div>

                    {cartItems.map((item) => {
                      return (
                        <>
                          <div
                            className="row cartitems d-flex justify-content-between"
                            key={item._id}
                          >
                            <div className="image-div col-lg-3 col-sm-3 col-3">
                              <img src={item.image} alt="item-img" />
                              <p className="item-content">
                                {item.name.slice(0, 15)}..
                              </p>
                            </div>

                            <div className="inc-dec-btn col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                              <p>
                                &nbsp;
                                <button
                                  onClick={() =>
                                    dispatch(addToCart(item, item.quantity + 1))
                                  }
                                  style={{
                                    cursor: "pointer",
                                  }}
                                >
                                  +
                                </button>
                                &nbsp;
                                {item.quantity}&nbsp;&nbsp;
                                <button
                                  onClick={
                                    item.quantity <= 1
                                      ? () => dispatch(deleteCart(item._id))
                                      : () =>
                                          dispatch(
                                            removeSingleItem(
                                              item,
                                              item.quantity - 1
                                            )
                                          )
                                  }
                                  style={{
                                    cursor: "pointer",
                                  }}
                                >
                                  -
                                </button>
                              </p>
                            </div>

                            <div className="col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                              <p className="item-content">{item.price}</p>
                            </div>

                            <div className="col-lg-3 col-sm-3 col-3 d-flex justify-content-centers">
                              <p className="item-content">
                                {" "}
                                {item.price * item.quantity}
                              </p>
                              <DeleteIcon
                                sx={{ ml: 2, color: "red", cursor: "pointer" }}
                                onClick={() => dispatch(deleteCart(item._id))}
                              />
                            </div>
                          </div>
                          <Divider
                            sx={{
                              height: "0.7px",
                              color: "#e8eaf6",
                            }}
                          />
                          <br />
                        </>
                      );
                    })}
                  </div>

                  <div className="order-summary col-lg-4 col-md-12 col-12">
                    <h3 className="summary-title">Order Summary</h3>

                    {price === 0 ? (
                      <price>NO ITEM ADDED</price>
                    ) : (
                      <>
                        <div className="shadow mb-2">
                          <div className="d-flex justify-content-between mt-4">
                            <div className="m-2">
                              <p className="">Total</p>
                            </div>
                            <div className="m-2">
                              <p>RS {price} /- </p>
                            </div>
                          </div>
                          <Divider
                            sx={{
                              height: "0.7px",
                              color: "#e8eaf6",
                            }}
                          />
                          <div className="order-btn mt-3 d-flex justify-content-center">
                            <OrderNow subTotal={price} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <OrderSuccessScreen orderDetails={success} />
            )}
          </>
        )}
      </section>

      <Toaster />
    </>
  );
};

export default CartScreen;

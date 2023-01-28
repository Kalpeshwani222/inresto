import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../header/Navbar";
import {
  addToCart,
  deleteCart,
  removeSingleItem,
} from "../../../redux/actions/cartAction";
import OrderNow from "./OrderNow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const CartScreen = () => {
  const history = useHistory();

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch();

  // const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  const [price, setPrice] = useState(0);
  const total = () => {
    let price = 0;
    cartItems.map((ele, k) => {
      price = ele.price * ele.quantity + price;
    });
    setPrice(price);
  };
  const goback = () => {
    history.goBack();
  };

  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <section className="">
        {/* <ArrowBackIcon onClick={goback} style= {{
          cursor:"pointer"
        }} /> */}
        <div className="">
          <Navbar />
          {cartItems.map((item) => {
            return (
              <>
                <div
                  style={{
                    border: "1px solid",
                    width: "15rem",
                    margin: "1rem",
                    padding: "10px",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "100px",
                    }}
                    alt="item-img"
                  />
                  <br />
                  <p>{item.name}</p>
                  <p>
                    price : {item.quantity} X {item.price} =
                    {item.price * item.quantity}
                  </p>
                  <h5>
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
                                removeSingleItem(item, item.quantity - 1)
                              )
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                  </h5>
                  {/* remove from cart */}
                  <button
                    onClick={() => dispatch(deleteCart(item._id))}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    delete
                  </button>
                  &nbsp;
                  {item.price}&nbsp;&nbsp;
                </div>
              </>
            );
          })}
        </div>

        {price == 0 ? (
          <h1>NO ITEM ADDED</h1>
        ) : (
          <>
            <h1>
              payment
              <h4>subTotal</h4>
              <h4>RS {price} /- </h4>
            </h1>

            <OrderNow subTotal={price} />
          </>
        )}
      </section>
    </>
  );
};

export default CartScreen;

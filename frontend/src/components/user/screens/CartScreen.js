import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Navbar";
import { addToCart, deleteCart } from "../../../actions/cartAction";
import OrderNow from "./OrderNow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const CartScreen = () => {
  const history = useHistory();

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch();

  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  const goback = () => {
    history.goBack();
  };
  return (
    <>
      <section className="">
        <ArrowBackIcon onClick={goback} style= {{
          cursor:"pointer"
        }} />
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
                    price : {item.quantity} X {item.prices[0][item.variant]} =
                    {item.price}
                  </p>

                  <h5>
                    &nbsp;
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart(item, item.variant, item.quantity + 1)
                        )
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
                      onClick={() =>
                        dispatch(
                          addToCart(item, item.variant, item.quantity - 1)
                        )
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                  </h5>

                  <button
                    onClick={() => dispatch(deleteCart(item))}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    delete
                  </button>
                </div>
              </>
            );
          })}
        </div>

        {subTotal == 0 ? (
          <h1>NO ITEM ADDED</h1>
        ) : (
          <>
            <h1>
              payment
              <h4>subTotal</h4>
              <h4>RS {subTotal} /- </h4>
            </h1>

            <OrderNow subTotal={subTotal} />
          </>
        )}
      </section>
    </>
  );
};

export default CartScreen;

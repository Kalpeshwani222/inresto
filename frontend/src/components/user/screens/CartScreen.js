import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Navbar";
import { addToCart, deleteCart } from "../../../actions/cartAction";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch();

  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <section className="">
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
                    price : {item.quantity} X {item.prices[0][item.variant]} ={" "}
                    {item.price}{" "}
                  </p>

                  <h5>
                    {" "}
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
                    </button>{" "}
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

        <h1>
          payment
          <h4>subTotal</h4>
          <h4>RS {subTotal} /- </h4>
        </h1>

         <button
                    // onClick={() => dispatch(deleteCart(item))}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Order Now
                  </button>
      </section>
    </>
  );
};

export default CartScreen;
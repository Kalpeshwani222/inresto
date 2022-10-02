import React from "react";
import { history, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();

  const cartState = useSelector((state) => state.cartReducer);

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/cart/${param.tableno}`);
  };
  return (
    <>
      <p
        onClick={handleClick}
        style={{
          margin: "1rem",
          fontSize: "19px",
          border: "1px solid",
          width: "7rem",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        Cart {cartState.cartItems.length}
      </p>
    </>
  );
};

export default Navbar;

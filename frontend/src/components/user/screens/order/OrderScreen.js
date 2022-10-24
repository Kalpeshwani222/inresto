import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserOrders } from "../../../../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";



const OrderScreen = () => {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.LoginUserReducer.userInfo);

  const getOrders = async () => {
    try {
      const res = await axios.post("/api/order/getorders", {
        userId: user._id,
      });
     console.log(res);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const orderState = useSelector(state => state.getUserOrderReducer);
  // const {loading, error, orders} = orderState;
  // const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      getOrders();
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <div>

      <h6>User specific Orders</h6>
        {orders.length == 0 ? (
          <h1>NOT any ORDERS</h1>
        ) : (
          orders.map((order) => (
            <div
              style={{
                border: "1px solid",
                width: "40rem",
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: "1rem",
              }}

             onClick={() =>history.push(`/orders/${order._id}`)}
            >
            <h2>{order._id}</h2>
              {order.orderItems.map((item) => (
                <div>
                  <p>
                    <br />
                    {item.name}
                    <p>
                      {item.quantity} X {item.prices[0][item.variant]} =
                      {item.price}
                    </p>
                    <p>{}</p>
                  </p>
                </div>
              ))}

              {order.status}
              <p>Order Amount : {order.orderAmount}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default OrderScreen;

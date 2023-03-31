import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUserOrders } from "../../../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import moment from "moment";

const OrderScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //orders list state
  const ordersState = useSelector((state) => state.userOrders);
  const { loading, orders } = ordersState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <>
      <div className="">
        {loading && <LoadingScreen />}
        {orders &&
          orders.map((order) => (
            <div
              style={{
                border: "1px solid rgb(230, 230, 248)",
                margin: "1rem 0.5rem",
              }}
              onClick={() => history.push(`/orders/${order._id}`)}
            >
              <h5
                style={{
                  color: "red",
                  fontWeight: "500",
                  margin: "10px",
                }}
              >
                #{order._id.slice(16, 24)}
              </h5>
              {/* {order.orderItems.map((item) => (
                <div>
                  <p>
                    <br />
                    {item.name}
                    <p>
                      {item.quantity} X {item.price} ={item.price}
                    </p>
                    <p>{}</p>
                  </p>
                </div>
              ))} */}
              <div
                style={{
                  margin: "10px",
                }}
              >
                <p>
                  Table No - <span>{order.tableno}</span>
                </p>
                <p>
                  Status - <span>{order.status}</span>
                </p>
              </div>
              <div
                className=""
                style={{
                  margin: "10px",
                }}
              >
                <p>
                  Order Amount : <span>{order.orderAmount}</span>
                </p>
                <p>
                  Order on :{" "}
                  <span>
                    {moment(order.createdAt).format(" MMMM Do h:mm a")}
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default OrderScreen;

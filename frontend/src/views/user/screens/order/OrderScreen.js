import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUserOrders } from "../../../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";

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
      {
        loading && <LoadingScreen/>
      }
        {orders &&
          orders.map((order) => (
            <div
              style={{
                border: "1px solid",
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: "1rem",
              }}
              onClick={() => history.push(`/orders/${order._id}`)}
            >
              <h2>{order._id}</h2>
              {order.orderItems.map((item) => (
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
              ))}

              <p>Order Amount : {order.orderAmount}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default OrderScreen;

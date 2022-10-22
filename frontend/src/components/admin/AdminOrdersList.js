import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminOrdersList = () => {
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [orderStatus, setOrderStatus] = useState(null);

  const getOrdersList = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/admin/orders");
      setLoading(false);
      setOrdersList(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersList();
  }, []);

  const changeOrderStatus = (event,id) =>{
   
    console.log(event.target.value,id);
    setOrderStatus(event.target.value)
  }
  
console.log(ordersList);
  return (
    <>
      <div>
        {ordersList.length == 0 ? (
          <h1>NOT any ORDERS</h1>
        ) : (
          ordersList.map((order) => (
            <div
              style={{
                border: "1px solid",
                width: "40rem",
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: "1rem",
              }}
            >
              {order.orderItems.map((item) => (
                <div>
                  <p>
                    <br />
                    {item.name}
                    <p>
                      {item.quantity} X {item.prices[0][item.variant]} =
                      {item.price}
                    </p>
               
                  </p>
                </div>
              ))}
                  {order.status}
              <select
                value={order.status}
                onChange={(e) => changeOrderStatus(e,order._id)}
              >
                <option>Order Placed</option>
                <option>confimed</option>
                <option>prepared</option>
                <option>delivered</option>
              </select>
                
                {orderStatus}
              

              <p>Order Amount : {order.orderAmount}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdminOrdersList;

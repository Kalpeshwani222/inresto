import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import socket from "../../.././../socketApi";

const OrderStatus = () => {
  const { id } = useParams("");
  const [orders, setOrders] = useState("");

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.get(`/api/order/${id}`);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetching();
  }, [id]);

  useEffect(() => {
    if (orders) {
      socket.emit("join", `order_${orders._id}`);
    }

    //update the order status
    socket.on("orderUpdated", (data) => {
      setOrders(data);
    });
  });
  return (
    <>
      <div
        style={{
          border: "1px solid",
          width: "40rem",
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "1rem",
        }}
      >
        <h2>{orders._id}</h2>

        {orders.status}
      </div>
    </>
  );
};

export default OrderStatus;

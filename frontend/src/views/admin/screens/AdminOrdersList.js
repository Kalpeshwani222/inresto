import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import socket from "../../../socket/socketApi";


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

  // useEffect(() => {
  //   getOrdersList();
  // }, []);
 

  useEffect(() => {
    getOrdersList();
    socket.emit("join", "adminRoom");

    socket.on("orderPlaced", (data) => {
      //  setOrdersList([...ordersList, data]);
      console.log("I am calling");
     setOrdersList(current => [data, ...current]);
      
    });
  },[]);

  const changeOrderStatus = async (val, id) => {
    console.log(val.target.value);
    console.log(id);

    const status = val.target.value;
    setOrderStatus(val.target.value);
    //  e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/admin/${id}`, { status }, config);
    if (data.message === "OK") {
      window.location.href = "/admin";
    }
  };

  return (
    <>
      {/* <div>
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
      </div> */}

      <section className="">
        <div className="">
          <Card
            style={{
              alignContent: "center",
              alignItems: "center",
              margin: "2rem",
            }}
          >
            <TableContainer
              component={Paper}
              style={{
                margin: "1rem",
              }}
            >
              <Table
                style={{
                  width: "95%",
                }}
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell size="small">Orders</TableCell>
                    <TableCell size="small">Status</TableCell>
                    <TableCell>Table NO</TableCell>
                    <TableCell>Amount&nbsp;(RS)</TableCell>
                    {/* <TableCell>Placed At</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ordersList.length == 0 ? (
                    <h1>NOT any ORDERS</h1>
                  ) : (
                    ordersList.map((order) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {order.name}
                          {order.orderItems.map((item) => (
                            <p>
                              <br />
                              {item.name}
                              <p>
                                {item.quantity} X {item.prices[0][item.variant]}{" "}
                                ={item.price}
                              </p>
                            </p>
                          ))}
                        </TableCell>

                        <TableCell align="left">
                          {order.status}
                          <select
                            value={order.status}
                            onChange={(e) => changeOrderStatus(e, order._id)}
                          >
                            <option>Order Placed</option>
                            <option>confimed</option>
                            <option>prepared</option>
                            <option>delivered</option>
                          </select>
                        </TableCell>
                        <TableCell>{order.tableno}</TableCell>
                        <TableCell>{order.orderAmount}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </div>
      </section>
    </>
  );
};

export default AdminOrdersList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, Box } from "@mui/material";
import socket from "../../../socket/socketApi";
import addNotification from "react-push-notification";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AdminLayout from "../components/AdminLayout";

const AdminOrdersList = () => {
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [orderStatus, setOrderStatus] = useState(null);

  const getOrdersList = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/admin/orders`
      );
      setLoading(false);
      setOrdersList(data);
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  };

  useEffect(() => {
    getOrdersList();

    //join the socket room
    socket.emit("join", "adminRoom");

    //receive the data from backend
    socket.on("orderPlaced", (data) => {
      //notify the admin
      addNotification({
        title: `Order Receive from Table no ${data.tableno}`,
        message: `order Amount is  ${data.orderAmount} `,
        duration: 7000,
        native: true,
      });

      //update the orderList array
      setOrdersList((current) => [data, ...current]);
    });
  }, []);

  //change order status
  const changeOrderStatus = async (val, id) => {
    const status = val.target.value;
    setOrderStatus(val.target.value);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api/admin/${id}`,
      { status },
      config
    );
    // if (data.message === "OK") {
    //   window.location.href = "/admin";
    // }
  };

  return (
    <>
      <AdminLayout>
        <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 2 }}>
          <Card
            style={{
              alignContent: "center",
              alignItems: "center",
              // margin: "2rem",
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
                                {item.quantity} X {item.price}={item.price}
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
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminOrdersList;

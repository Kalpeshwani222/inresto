import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Box,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import socket from "../../../socket/socketApi";
import { useHistory } from "react-router-dom";
import addNotification from "react-push-notification";
import AdminLayout from "../components/AdminLayout";
import "./orderList.css";
import OrderFilters from "../components/OrderFilters";
import moment from "moment";

const columns = [
  { id: "1", label: "SR NO", minWidth: 20 },
  { id: "2", label: "Time", minWidth: 100 },
  // { id: "3", label: "Name", minWidth: 120 },
  // { id: "4", label: "Email/Phone", minWidth: 120 },
  { id: "5", label: "Amount", minWidth: 80 },
  { id: "6", label: "Table no", minWidth: 80 },
  { id: "7", label: "Status", minWidth: 100 },
  { id: "8", label: "Action", minWidth: 120 },
  { id: "9", label: "Details", minWidth: 70 },
];

const AdminOrdersList = () => {
  const history = useHistory();

  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [status, setStatus] = useState([
    "Order Placed",
    "confimed",
    "prepared",
    "delivered",
    "none",
  ]);

  const getOrdersList = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/admin/orders?status=${statusFilter}`
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
  }, [statusFilter]);

  //change order status
  const changeOrderStatus = async (val, id) => {
    try {
      const status = val.target.value;
      // setOrderStatus(val.target.value);
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
      getOrdersList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdminLayout>
        <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 2 }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "10px" }}
            >
              Orders List
            </Typography>
            <Divider />

            <Box
              height={40}
              sx={{ m: 1.8 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OrderFilters status={status} setStatusFilter={setStatusFilter} />
            </Box>
            <Divider />

            <Box>
              {loading ? (
                <CircularProgress
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                    height: "75vh",
                  }}
                />
              ) : (
                <TableContainer sx={{ mt: 2 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {ordersList &&
                        ordersList.map((order, ind) => {
                          return (
                            <>
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={order._id}
                              >
                                <TableCell>{ind + 1}</TableCell>
                                <TableCell>
                                  {" "}
                                  {moment(order.createdAt).format(
                                    " MMMM Do h:mm a"
                                  )}
                                </TableCell>
                                {/* <TableCell>{order.user ? order.user.name : null}</TableCell> */}
                                {/* <TableCell>{order.user ? order.user.email : null}</TableCell> */}
                                <TableCell>{order.orderAmount}</TableCell>
                                <TableCell>{order.tableno}</TableCell>
                                <TableCell>
                                  <p
                                    className={`order-status ${
                                      order.status === "Order Placed"
                                        ? "order-placed"
                                        : order.status === "confimed"
                                        ? "order-confimed"
                                        : order.status === "prepared"
                                        ? "order-prepared"
                                        : "order-deliver"
                                    }`}
                                  >
                                    {order.status.slice(0, 10)}
                                  </p>
                                </TableCell>
                                <TableCell>
                                  <select
                                    style={{
                                      width: "85%",
                                      height: "2rem",
                                      borderRadius: "5px",
                                      paddingLeft: "0.5rem",
                                      paddingRight: "0.5rem",
                                    }}
                                    value={order.status}
                                    onChange={(e) =>
                                      changeOrderStatus(e, order._id)
                                    }
                                  >
                                    {status.map((cur, ind) => {
                                      return (
                                        <>
                                          <option key={cur} value={cur}>
                                            {cur}
                                          </option>
                                        </>
                                      );
                                    })}
                                  </select>
                                </TableCell>
                                <TableCell>
                                  <Button
                                    onClick={() =>
                                      history.push(`/admin/order/${order._id}`)
                                    }
                                    sx={{
                                      height: "31px",
                                    }}
                                    variant="outlined"
                                  >
                                    Detail
                                  </Button>
                                </TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </Paper>
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminOrdersList;

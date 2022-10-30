import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Card, Grid, IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import socket from "../../.././../socket/socketApi";
import CheckIcon from "@mui/icons-material/Check";
import Navbar from "../../../header/Navbar";



const OrderStatus = () => {  
  const steps = [
    {
      id: 1,
      image: "/images/order-placed.png",
      name: "Order Placed",
      text : "Order Placed"
    },
    {
      id: 2,
      image: "/images/order-confirmed.png",
      name: "confimed",
      text : "Order Received"
    },
    {
      id: 3,
      image: "/images/order_prepared.png",
      name: "prepared",
      text : "Order is being prepared"
    },
    {
      id: 4,
      image: "/images/order-deliver.jpg",
      name: "delivered",
      text : "Order Out for Delivered"
    },
  ];

  const { id } = useParams("");
  const [orders, setOrders] = useState("");
  const [orderSteps, setOrderSteps] = useState(steps);

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

  console.log(orders);

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
     <Navbar/>
      <div
        className="order_status"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
     
        <Box sx={{ flexGrow: 2, maxWidth: "90%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={12}>
              <Card
                style={{
                  marginTop: "1rem",
                }}
              >
                <h2>{orders._id}</h2>

                
                <nav aria-label="main mailbox folders">
                  <List
                    style={{
                      margin: "10px",
                    }}
                  >
                    {orderSteps.map((step) => {
                      return (
                        <>
                          <ListItem
                            className={`${
                              orders.status === step.name ? null : "deactive"
                            }`}
                            // disabled={step.status}
                            disablePadding
                            secondaryAction={
                              <IconButton edge="end" aria-label="delete">
                                <CheckIcon
                                  style={{
                                    color: "green",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                  }}
                                />
                              </IconButton>
                            }
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <img
                                  src={step.image}
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                  }}
                                />
                              </ListItemIcon>
                              <div className=""></div>
                              <ListItemText
                                primary={step.text}
                                style={{
                                  marginLeft: "1rem",
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                          <Divider />
                          <br />
                        </>
                      );
                    })}
                  </List>
                </nav>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default OrderStatus;

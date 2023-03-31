import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Paper,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import { adminOrderDetails } from "../../../redux/actions/orderAction";
import moment from "moment";
import OrderItemsDetails from "../components/OrderItemsDetails";

const columns = [
  { id: "1", label: "SR NO", minWidth: 20 },
  { id: "2", label: "PRODUCT Image", minWidth: 100 },
  { id: "3", label: "PRODUCT NAME", minWidth: 130 },
  { id: "4", label: "QUANTITY", minWidth: 80 },
  { id: "5", label: "ITEM PRICE", minWidth: 80 },
  { id: "6", label: "AMOUNT", minWidth: 100 },
];

const AdminOrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams("");

  //orders details state
  const orderDetailsState = useSelector((state) => state.adminOrderDetails);
  const { loading, orderDetail, error } = orderDetailsState;

  console.log(orderDetail);

  useEffect(() => {
    dispatch(adminOrderDetails(id));
  }, [dispatch]);

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
              Orders Details
            </Typography>
            <Divider />

            {/* sdgk */}
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
                <div>
                  {orderDetail.map((orderItem) => (
                    <div key={orderItem._id}>
                      <h3>{orderItem.orderAmount}</h3>
                      <p>{orderItem.tableno}</p>
                      <p>{orderItem.status}</p>
                      <p>{orderItem.user.name}</p>
                    <p>{orderItem.user.email}</p>
                    <OrderItemsDetails items ={ orderItem.orderItems}/>
                    </div>
                  ))}
                </div>
              )}
            </Box>
          </Paper>
        </Box>
      </AdminLayout>
    </>
  );
};

export default AdminOrderDetails;

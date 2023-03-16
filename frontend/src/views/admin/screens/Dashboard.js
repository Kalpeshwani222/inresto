import React from "react";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./dashboard.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AdminLayout from "../components/AdminLayout";
const Dashboard = () => {
  return (
    <>
      <AdminLayout>
        <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction={"row"}>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="card-gradient"
                >
                  <CardContent>
                    <div className="iconstylewhite">
                      <CreditCardIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}
                    >
                      $500.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="card-gradient-light"
                >
                  <CardContent>
                    <div>
                      <ShoppingBagIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}
                    >
                      $900.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Card
                sx={{ minWidth: 49 + "%", height: 150 }}
                className="card-gradient"
              >
                <CardContent>
                  <div className="iconstylewhite">
                    <CreditCardIcon />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#ffffff" }}
                  >
                    $500.00
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "#ccd1d1" }}
                  >
                    Total Earning
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>visualization</Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>Latest Order</Card>
            </Grid>
          </Grid>
        </Box>
      </AdminLayout>
    </>
  );
};

export default Dashboard;

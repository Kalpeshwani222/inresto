import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import Navbar from "./header/Navbar";
import UserCarousels from "./user/components/UserCarousels";
import BottomNavbar from "./user/components/BottomNavbar";
import { useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";

const Home = () => {
  const history = useHistory();

  const navigateScanQR = () => {
    history.push("/scanqr");
  };

  //material UI breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
      </div>

      <UserCarousels />
      {/* <hr /> */}
      {isMatch ? (
        <>
          <BottomNavbar />
        </>
      ) : null}

      <Box  sx={{ display: { xs: "block", lg: "none" } }}
      className=""
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "90%",
        }}
      >
        <div class="row">
          <div class="col-xs-4 auto d-flex justify-content-center">
            <Card
              onClick={navigateScanQR}
              style={{
                cursor: "pointer",
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image="https://assets.ncr.com/content/ncr/us/en/home/blogs/restaurants/future-of-qr-code-menus/_jcr_content/root/container/container_238116401_/container_1439208595/container_copy/image_copy_copy.coreimg.90.1600.jpeg/1663230678756/qr-code-121521.jpeg"
                title="Order through QR"
              />
              <CardContent>
                <Typography component="div">Scan QR</Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay home and order to your doorstep
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div class="col-xs-4 auto d-flex justify-content-center">
            <Card
              sx={{ maxWidth: 400 }}
              onClick={navigateScanQR}
              style={{
                cursor: "pointer",
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                title="Order through QR"
              />
              <CardContent>
                <Typography component="div">Scan QR</Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay home and order to your doorstep
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Box>
      {/* <div className="">
        <Grid
          container
          lg={8}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item lg={5} xs={6}>
            <Box p={1}>
              <Card
                sx={{ maxWidth: 345 }}
                onClick={navigateScanQR}
                style={{
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  sx={{ height: 180 }}
                  image="https://assets.ncr.com/content/ncr/us/en/home/blogs/restaurants/future-of-qr-code-menus/_jcr_content/root/container/container_238116401_/container_1439208595/container_copy/image_copy_copy.coreimg.90.1600.jpeg/1663230678756/qr-code-121521.jpeg"
                  title="Order through QR"
                />
                <CardContent>
                  <Typography component="div">Scan QR</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stay home and order to your doorstep
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Box>
          </Grid>

          <Grid item lg={5} xs={6}>
            <Box p={1}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  sx={{ height: 180 }}
                  image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                  title="Order at Home"
                />
                <CardContent>
                  <Typography component="div">Order Online</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stay home and order to your doorstep
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </div> */}
    </>
  );
};

export default Home;

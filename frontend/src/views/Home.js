import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Slide,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Navbar from "./header/Navbar";
import UserCarousels from "./user/components/UserCarousels";
import BottomNavbar from "./user/components/BottomNavbar";
import { useTheme, useMediaQuery } from "@mui/material";

const Home = () => {
  const history = useHistory();

  const navigateScanQR = () => {
    history.push("/scan-qr");
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      console.log("yes boss");
    } else {
      window.location.href = "/login";
    }
  }, []);

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
      <hr />
      {isMatch ? (
        <>
          <BottomNavbar />
        </>
      ) : null}

      {/* <Card sx={{ maxWidth: 345 }} onClick={navigateScanQR}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              QR Code Scan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Home delivery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </>
  );
};

export default Home;

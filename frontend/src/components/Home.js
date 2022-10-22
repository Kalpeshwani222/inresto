import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
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

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={navigateScanQR}>
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
      </Card>
    </>
  );
};

export default Home;

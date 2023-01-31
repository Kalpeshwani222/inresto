import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Navbar from "./header/Navbar";
import UserCarousels from "./user/components/UserCarousels";
import BottomNavbar from "./user/components/BottomNavbar";
import { useTheme, useMediaQuery, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
// import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
// import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';

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
      <hr />
      {isMatch ? (
        <>
          <BottomNavbar />
        </>
      ) : null}

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

      {/* <div className="products-section">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item lg={5} spacing={2}>
            <Box p={1}>
              <Card
                sx={{ maxWidth: 700, display: "flex" }}
                style={{
                  boxShadow: "none",
                  border: "1px solid #e8eaf6",
                }}
              >
                <CardActionArea sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg"
                    alt="Live from space album cover"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      position: "relative",
                      margin: "5px",
                    }}
                  />

                

                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      style={{
                        fontSize: "18px",
                        lineHeight: "26px",
                        color:"#1a181e",
                        fontWeight:"500"
                      }}
                    >
                      Veg Noodles
                    </Typography>

                    <Typography   style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        color:"#1a181e",
                        fontWeight:"400"
                      }}>
                      Veg Noodles With The Best Taste Ever 🐱
                    </Typography>

                    <Box >
                      <CardActions
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop:"1rem"
                        }}
                      >
                        <div className="price d-flex justify-content-start">
                          <p style={{
                            fontSize:"20px",
                             lineHeight: "18px",
                        color:"#1a181e",
                        fontWeight:"400"
                          }}>₹90₹</p>
                        </div>

                        <div className="add-to-bag-button-with-variants d-flex justify-content-end">
                          <Button variant="outlined" endIcon={<AddIcon />}>
                            ADD
                          </Button>
                        </div>
                      </CardActions>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>

           <Grid item lg={5} spacing={2}>
            <Box p={1}>
              <Card
                sx={{ maxWidth: 700, display: "flex" }}
                style={{
                  boxShadow: "none",
                  border: "1px solid #e8eaf6",
                }}
              >
                <CardActionArea sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg"
                    alt="Live from space album cover"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      position: "relative",
                      margin: "5px",
                    }}
                  />

                  <Box sx={{ display: "flex", flexDirection: "column" }}></Box>

                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      style={{
                        fontSize: "18px",
                        lineHeight: "26px",
                        color:"#1a181e",
                        fontWeight:"500"
                      }}
                    >
                      Veg Noodles
                    </Typography>

                    <Typography   style={{
                        fontSize: "14px",
                        lineHeight: "18px",
                        color:"#1a181e",
                        fontWeight:"400"
                      }}>
                      Veg Noodles With The Best Taste Ever 🐱
                    </Typography>

                    <Box >
                      <CardActions
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop:"1rem"
                        }}
                      >
                        <div className="price d-flex justify-content-start">
                          <p style={{
                            fontSize:"20px",
                             lineHeight: "18px",
                        color:"#1a181e",
                        fontWeight:"400"
                          }}>₹90₹</p>
                        </div>

                        <div className="add-to-bag-button-with-variants d-flex justify-content-end">
                          <Button variant="outlined" endIcon={<AddIcon />}>
                            ADD
                          </Button>
                        </div>
                      </CardActions>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>

          

        
        </Grid>
      </div> */}

      {/* <Card
          sx={{ maxWidth: 700, display: "flex" }}
          style={{
            boxShadow: "none",
            border: "1px solid",
          }}
        >
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b106403-9276-4c02-b446-1200a181733f/1667829777922-jpeg"
              alt="Live from space album cover"
              style={{
                height: "120px",
                width: "120px",
                objectFit: "contain",
                borderRadius: "8px",
                position: "relative",
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}></Box>

            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                style={{
                  fontSize: "18px",
                  lineHeight: "26px",
                }}
              >
                Veg Noodles
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Veg Noodles With The Best Taste Ever 🐱
              </Typography>

              <CardActions>
                <div className="price d-flex justify-content-start">₹90₹</div>

                <div className="add-to-bag-button-with-variants d-flex justify-content-end">
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </div>
              </CardActions>
            </CardContent>

</CardActionArea>
        </Card> */}

      {/* </div> */}

      {/* <div className="product-information">
            <div className="product-name">Veg Noodles</div>

            <div className="product-line">
              Veg Noodles With The Best Taste Ever 🐱
            </div>

            <div className="price-information">
              <div className="price">₹90 ₹150</div>

              <div className="add-to-bag-button-with-variants">button</div>
            </div>
          </div> */}
      {/* <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                QR Code Scan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea> */}
    </>
  );
};

export default Home;

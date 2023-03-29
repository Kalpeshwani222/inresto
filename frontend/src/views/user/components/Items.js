import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartAction";
import AddIcon from "@mui/icons-material/Add";
import "./../screens/products/products.css";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  CardActions,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const Items = ({ menuItem }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(menuItem, quantity));
    toast.success(`Add Successfully`, {
      position: "top-center",
    });
  };

  return (
    <>
      <Grid item lg={6} sx={{ mt: 0.5 }}>
        <Box>
          <Card
            className="product-card"
            sx={{ maxWidth: 450, display: "flex" }}
          >
            <CardActionArea sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={menuItem.image}
                alt="cover-img"
                className="product-image"
              />

              <CardContent
                sx={{
                  flex: "1 0 auto",
                  ...(isSmallScreen && {
                    padding: "9px",
                  }),
                  ...(isLargeScreen && {
                    padding: "12px",
                  }),
                }}
              >
                <div className="wrap-prod-nameprice">
                  <Typography component="div" className="product-title">
                    {menuItem.name.slice(0, 21)}
                  </Typography>

                  <Typography className="product-sub">
                    {menuItem.desc.slice(0, 55)}...
                  </Typography>
                </div>

                <Box>
                  <CardActions className="product-footer-part">
                    <div className="price d-flex justify-content-start">
                      <p
                        style={{
                          fontSize: "17px",
                          lineHeight: "18px",
                          color: "#1a181e",
                          fontWeight: "400",
                        }}
                      >
                        {menuItem.price}
                        -/RS
                      </p>
                    </div>

                    <div className="add-to-bag-button-with-variants d-flex justify-content-end">
                      <Button
                      sx={{
                       height:'31px' 
                      }}
                        variant="outlined"
                        onClick={addToCartHandler}
                        endIcon={<AddIcon />}
                      >
                        ADD
                      </Button>
                    </div>
                  </CardActions>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Divider
          sx={{ display: { xs: "block", lg: "none" } }}
          style={{
            margin: "0px",
            padding: "0px",
            height: "1.5px",
            color: "#e6e6f8",
          }}
        />
      </Grid>
      <Toaster />
    </>
  );
};

export default Items;

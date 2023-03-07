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
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const Items = ({ menuItem }) => {
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
      <Grid item lg={6} sx={{ mt: 1 }}>
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

              <CardContent sx={{ flex: "1 0 auto" }}>
                <div className="wrap-prod-nameprice">
                  <Typography component="div" className="product-title">
                    {menuItem.name.slice(0, 15)}
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
      </Grid>
      <Toaster />
    </>
  );
};

export default Items;

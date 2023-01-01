import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartAction";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

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


const Items = ({ menuItem }) => {
  const param = useParams();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("full");

  //  console.log(param.tableno);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(menuItem, variant, quantity));
  };

  return (
    <>
      <Grid item lg={6} spacing={1}>
        <Box p={1}>
          <Card
            className="product-card"
            sx={{ maxWidth: 700, display: "flex" }}
          >
            <CardActionArea sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={menuItem.image}
                alt="Live from space album cover"
                className="product-image"
              />

              <CardContent sx={{ flex: "1 0 auto" }}>
                <div className="wrap-prod-nameprice">
                  <Typography component="div" className="product-title ">
                    {menuItem.name}
                  </Typography>

                  <Typography className="product-sub">
                    {menuItem.desc}
                  </Typography>
                  {/* <select
                    value={variant}
                    onChange={(e) => setVariant(e.target.value)}
                  >
                    {menuItem.varients.map((cur) => {
                      return (
                        <>
                          <option>{cur}</option>
                        </>
                      );
                    })}
                  </select> */}
                </div>

                <Box>
                  <CardActions className="product-footer-part">
                    <div className="price d-flex justify-content-start">
                      <p
                        // style={{
                        //   fontSize: "20px",
                        //   lineHeight: "18px",
                        //   color: "#1a181e",
                        //   fontWeight: "400",
                        // }}
                      >
                        {/* {menuItem.prices[0][variant] * quantity}  */}
                       {menuItem.price} -/RS
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
    </>
  );
};

export default Items;

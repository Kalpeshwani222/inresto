import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Grid,Box,
  CardActions
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

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
                                          <Typography
                                            component="div"
                                            className="product-title "
                                          >
                                             {menuItem.name}
                                          </Typography>

                                          <Typography className="product-sub">
                                            {menuItem.desc}
                                          </Typography>
                                          <select
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
              </select>
                                        </div>

                                        <Box>
                                          <CardActions className="product-footer-part">
                                            <div className="price d-flex justify-content-start">
                                              <p
                                                style={{
                                                  fontSize: "20px",
                                                  lineHeight: "18px",
                                                  color: "#1a181e",
                                                  fontWeight: "400",
                                                }}
                                              >
                                               {menuItem.prices[0][variant] * quantity} -/RS
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
      {/* <div className="col-lg-4">
        <Card sx={{ maxWidth: 345, marginTop: 2 }}>
          <CardActionArea>
            <img
              src="https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              style={{
                width: "345px",
                height: "200px",
                margin: "5px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {menuItem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {menuItem.desc}
              </Typography>

              <select
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
              </select>

              <p>Price : {menuItem.prices[0][variant] * quantity} -/RS</p>

              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  onClick={addToCartHandler}
                  color="primary"
                  component="span"
                >
                  Add
                </Button>
              </label>
            </CardContent>
          </CardActionArea>
        </Card>
      </div> */}













      {/* <div>
        <nav aria-label="main mailbox folders">
          <List
            style={{
              margin: "10px",
            }}
          >
            <ListItem
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
                    src="https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </ListItemIcon>
                <div className=""></div>
                <ListItemText
                  primary={menuItem.name}
                  style={{
                    marginLeft: "1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </nav>
      </div> */}
    </>
  );
};

export default Items;

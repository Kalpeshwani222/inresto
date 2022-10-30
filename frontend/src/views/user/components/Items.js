import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cartAction";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  List,
  Divider,
  ListItem,
  IconButton,
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
      <div className="col-lg-4">
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
      </div>













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

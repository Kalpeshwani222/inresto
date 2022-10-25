import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartAction";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
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
    </>
  );
};

export default Items;

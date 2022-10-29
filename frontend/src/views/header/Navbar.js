import React from "react";
import { history, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import DrawerComp from "./DrawerComp";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();

  const cartState = useSelector((state) => state.cartReducer);

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/cart/${param.tableno}`);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  console.log(cartState.cartItems.length);
  return (
    <>
      {/* <p
        onClick={handleClick}
        style={{
          margin: "1rem",
          fontSize: "19px",
          border: "1px solid",
          width: "7rem",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        Cart {cartState.cartItems.length}
      </p> */}

      {/* <AppBar>
          <Toolbar>
            
              {
                isMatch ? (
                  <>
                    <DrawerComp />
                  </>
                ) : (
                  <>
                     Other Tabs 
                  </>
                )
               
                
              }
          
          </Toolbar>
      </AppBar> */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  sx={{ bgcolor: "white" }} style={{
          boxShadow: "rgb(0 0 0 / 20%) 0px 8px 6px -6px"
        }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2,color:"black" }}
            >
              {/* <MenuIcon /> */}
              <ArrowBackIcon onClick={() => history.goBack()} style= {{
          cursor:"pointer"
        }} />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{
              color:"black"
            }}>
              RestoBaba
            </Typography>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cartState.cartItems.length} color="error">
                <ShoppingCartIcon onClick={handleClick} sx={{color:"black"}} />
              </Badge>
            </IconButton>
            <Button color="inherit" onClick = {()=> history.push('/login')} sx={{color:"black"}} >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

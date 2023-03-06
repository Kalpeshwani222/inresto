import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import UserNotifications from "./UserNotifications";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  height: "2.5rem",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [show, setShow] = useState(false);

  //cart state
  const cartState = useSelector((state) => state.cartReducer);

  //user state
  const userState = useSelector((state) => state.LoginUserReducer);
  const { userInfo } = userState;

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/cart`);
  };

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  const isMatch = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <div>
        <AppBar
          component={"nav"}
          sx={{
            backgroundColor: "#10b981",
          }}
        >
          <Toolbar
            style={{
              marginLeft: isMatch ? "5px" : "1.5rem",
              marginRight: isMatch ? "5px" : "1.5rem",
            }}
            // className="py-2"
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "8px" }}
              style={{
                color: "black",
              }}
            >
              <Link onClick={() => history.push("/home")}>
                <Box
                  component="img"
                  sx={{ height: 54 }}
                  alt="Logo"
                  src="/images/logo.svg"
                  style={{
                    // height: "3rem",
                    // width: "7rem",
                    height: isMatch ? "2rem" : "3rem",
                    width: isMatch ? "4renm" : "7rem",
                  }}
                />
              </Link>
            </Typography>

            <Search>
              <InputBase placeholder="search..." />
            </Search>

            {userInfo ? (
              <>
                {/* notifications */}
                <Box>
                  <UserNotifications />
                </Box>

                {/* cart */}
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <IconButton size="large" aria-label="show 4 new mails">
                    <Badge
                      badgeContent={cartState.cartItems.length}
                      color="error"
                    >
                      <ShoppingCartOutlinedIcon
                        onClick={handleClick}
                        sx={{ color: "white", fontSize: "1.7rem" }}
                      />
                    </Badge>
                  </IconButton>
                </Box>

                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={() => setShow(!show)}
                    >
                      <PersonOutlineOutlinedIcon
                        sx={{ color: "white", fontSize: "1.7rem" }}
                      />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={show}
                      onClose={() => setShow(false)}
                      onClick={() => setShow(false)}
                    >
                      <MenuItem component={Link} to="/orders">
                        Orders
                      </MenuItem>
                      <MenuItem onClick={logoutHandler}>LogOut</MenuItem>
                    </Menu>
                  </div>
                </Box>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  onClick={() => history.push("/login")}
                  sx={{ color: "black" }}
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>

              </div>
    </>
  );
};

export default Navbar;

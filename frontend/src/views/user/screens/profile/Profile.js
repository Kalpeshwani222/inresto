import React, { useState } from "react";
import Navbar from "../../../header/Navbar2";
import {
  Card,
  Container,
} from "@mui/material";
import "./profile.css";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { logout } from "../../../../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import OrderScreen from "../order/OrderScreen";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [dashboard, setDashboard] = useState(true);
  const [orders, setOrders] = useState(false);
  const [profile, setProfile] = useState(false);
  const [changePass, setChangePass] = useState(false);


  const handleListItemClick = (event, index) => {
     setDashboard(index === 0);
  setOrders(index === 1);
  setProfile(index === 2);
  setChangePass(index === 3);
  };

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      <section className="profile-section">
        <div className="header">
          <Navbar />
        </div>

        <div className="profile-detail">
          <Container>
            <Card>
              <Box>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    // selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <ListItemIcon>
                      <GridViewOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                  <ListItemButton
                    // selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemIcon>
                      <FormatListBulletedOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                  </ListItemButton>
                </List>
                <ListItemButton
                  //   selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemIcon>
                    <ManageAccountsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Update Profile" />
                </ListItemButton>

                <ListItemButton
                  //   selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemIcon>
                    <LockResetOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItemButton>

                <ListItemButton
                  //   selected={selectedIndex === 5}
                  onClick={logoutHandler}
                >
                  <ListItemIcon>
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </Box>
            </Card>

            <Card sx={{ mt: 3 }}>
            {dashboard && <p>User Dashboard</p>}
            {orders && <OrderScreen />}
            {profile && <p>Profile</p>}
            { changePass && <p>Change Password</p>}
            </Card>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Profile;

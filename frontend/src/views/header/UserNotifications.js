import React, { useState, useEffect } from "react";
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  styled,
  Box,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import axios from "axios";
import { yellow } from "@mui/material/colors";
import moment from "moment";
// import socket from "../../.././../socket/socketApi";
import socket from "../../socket/socketApi";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

const UserNotifications = ({ userId }) => {
  const [notifishow, setNotifiShow] = useState(false);
  const [notifications, setnotifications] = useState([]);

  const notificationsList = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/notification/orderstatus/${userId}`
      );
      setnotifications(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    notificationsList();
  }, []);

 

  return (
    <>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={() => setNotifiShow(!notifishow)}
      >
        <Badge
          badgeContent={notifications ? notifications.length : null}
          color="error"
        >
          <NotificationsNoneIcon sx={{ color: "black" }} />
        </Badge>
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{ horizontal: "center", vertical: "center" }}
        open={notifishow}
        onClose={() => setNotifiShow(false)}
        onClick={() => setNotifiShow(false)}
      >
        <Box sx={{ m: 1 }}>
          {notifications.map((noti) => {
            return (
              <>
                <MenuItem>
                  <p style={{ color: "red" }}>
                    {" "}
                    {noti.orderId.slice(18, 24)} :{" "}
                    <span style={{ color: "black" }}>{noti.message}</span>
                    <span style={{ color: "gray", marginLeft: "5px" }}>
                      {moment(noti.createdAt).format("Do h:mm a")}
                    </span>
                  </p>
                </MenuItem>
              </>
            );
          })}
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ColorButton variant="contained" size="small">
            Mark as Read
          </ColorButton>
        </Box>
      </Menu>
    </>
  );
};

export default UserNotifications;

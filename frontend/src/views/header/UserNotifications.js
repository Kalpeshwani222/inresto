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
import { yellow } from "@mui/material/colors";
import moment from "moment";
import socket from "../../socket/socketApi";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotifications } from "../../redux/actions/userNotifiAction";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

const UserNotifications = () => {
  
  const dispatch = useDispatch();
  const [notifishow, setNotifiShow] = useState(false);

  //category load state
  const userNotificationState = useSelector((state) => state.userNotifications);
  const { userNoti, loading } = userNotificationState;
  
  
  useEffect(() => {
    // notificationsList();
    dispatch(getUserNotifications());
    //join userRoom
    socket.emit("join", "userRoom");
    
    //on it userRoom socket
    socket.on("orderNotification", (data) => { 
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: data
      });
    });
  }, [dispatch]);

  return (
    <>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={() => setNotifiShow(!notifishow)}
      >
        <Badge badgeContent={userNoti ? userNoti.length : null} color="error">
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
          {userNoti
            ? userNoti.map((noti) => {
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
              })
            : null}
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

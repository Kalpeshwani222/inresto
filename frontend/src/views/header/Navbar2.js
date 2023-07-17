import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Navbar2 = ({name}) => {
  const history = useHistory();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
          >
            <Box onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
              <WestOutlinedIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </Box>
            <Typography
              style={{
                marginLeft: "0.8rem",
                fontSize: "17px",
              }}
            >
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar2;

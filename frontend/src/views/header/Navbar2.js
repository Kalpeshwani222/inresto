import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppBar, Toolbar, Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar2 = () => {
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
              <ArrowBackIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar2;

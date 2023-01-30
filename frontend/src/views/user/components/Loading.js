import React from "react";
import {CircularProgress,Box} from "@mui/material";
const Loading = () => {
  return (
    <>
      <div className="loading-style">
      
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
   
      </div>
    </>
  );
};

export default Loading;

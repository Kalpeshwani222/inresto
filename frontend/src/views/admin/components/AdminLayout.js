import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Box className="bgcolor">
        <Navbar />
        <Box height={50} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;

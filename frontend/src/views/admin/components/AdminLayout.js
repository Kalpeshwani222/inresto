import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const toggleSidebar = () => {
    const newState = !open;
    setOpen(newState);
    localStorage.setItem("isSidebarOpen", newState);
  };

  useEffect(() => {
    const storedState = localStorage.getItem("isSidebarOpen");
    setOpen(storedState === "true");
  }, []);

  return (
    <>
      <Box className="bgcolor">
        <Navbar toggleSidebar={toggleSidebar} />
        <Box height={50} />
        <Box sx={{ display: "flex" }}>
          <Sidebar open={open} />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;

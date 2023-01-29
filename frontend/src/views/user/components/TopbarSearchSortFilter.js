import React from 'react'
import Box from "@mui/material/Box";
import Navbar from "./../../header/Navbar"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomNavbar from "./../components/BottomNavbar";
import { useTheme, useMediaQuery } from "@mui/material";

const TopbarSearchSortFilter = () => {

  //material UI breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
         {/* display navbar only desktop hide in mobile and md screen sizes */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Navbar />
      </Box>
      {/* end navbar */}



      

      {/* bottom bar shows only mobile  */}
      {isMatch ? (
        <>
          <BottomNavbar />
        </>
      ) : null}
      {/* end bottombar */}

      {/* SEARCH SORT FILTER SECTION IN MOBILE ONLY */}
      {isMatch ? (
        <>
          <div
            className="top-header-search"
            style={{
              padding: "1px",
              display: "block",
            }}
          >
            <div className="search-div container d-flex justify-content-center products-bottom-header">
              <div className="back-arrow">
                <ArrowBackIcon />
              </div>
              
              <input
                type="text"
                className="search-box"
                placeholder="Search for products..."
              />{" "}
            </div>

            <hr
              style={{
                 border: "1px solid #e8eaf6",
                marginTop: "4rem",
              }}
            />

            <div
              className="custom-mobile-sort-button"
              style={{
                display: "flex",
              }}
            >
              <button type="button">
                <span>Sort</span>
              </button>

              <div className="mobile-filter-button-divider"></div>

              <button type="button">
                <span>Filter</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
      {/* end FILTER */}
    </>
  )
}

export default TopbarSearchSortFilter
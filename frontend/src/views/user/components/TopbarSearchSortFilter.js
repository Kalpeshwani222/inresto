import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Navbar from "./../../header/Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BottomNavbar from "./../components/BottomNavbar";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton,Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { useHistory } from "react-router-dom";

const TopbarSearchSortFilter = ({ setSearch,setPage,filterCategory,setFilterCategory}) => {

  const history = useHistory();

  //material UI breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [obj, setObj] = useState();
  const [checked, setChecked] = useState(false);
  //Filter dial
  const [openFilter, setOpenFilter] = useState(false);
  const openFilterDial = () => {
    setOpenFilter(true);
  };

  const closeFilterDial = () => {
    setOpenFilter(false);
  };

  const onChange = ({ currentTarget: input }) => {
    setPage(1);
    if (input.checked) {
      const state = [...filterCategory, input.value];
      setFilterCategory(state);
    } else {
      const state = filterCategory.filter((val) => val !== input.value);
      setFilterCategory(state);
    }
  };

  //get all categories
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/admin/category`
        );
        setObj(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

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
              padding: "0.1px",
              display: "block",
            }}
          >
            <div className="search-div d-flex justify-content-center products-bottom-header">
              <div className="back-arrow">
                     <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <ArrowBackIcon
              style={{
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => history.goBack()}
            />
          </Typography>
              </div>
              <input
                type="text"
                className="search-box"
                placeholder="Search for products..."
                onChange={({ currentTarget: input }) => setSearch(input.value)}
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
              {/* filter */}
              <button type="button" onClick={openFilterDial}>
                <span>Filter</span>
              </button>

              <Dialog fullScreen open={openFilter} onClose={closeFilterDial}>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={closeFilterDial}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>

                <div className="">
                  {obj &&
                    obj.map((category) => {
                      return (
                        <>
                          <div
                            className=""
                            key={category.name}
                            style={{
                              minWidth: "90px",
                              display: "flex",
                              alignItems: "center",
                              margin: "2px 0",
                            }}
                          >
                            <input
                              className=""
                              type="checkbox"
                              checked={
                                filterCategory.includes(category.name)
                                  ? true
                                  : false
                              }
                              value={category.name}
                              onChange={onChange}
                              style={{
                                height: "20px",
                                width: "18px",
                              }}
                            />
                            <p
                              className=""
                              style={{
                                margin: "5px",
                              }}
                            >
                              {category.name}
                            </p>
                          </div>
                        </>
                      );
                    })}
                </div>
              </Dialog>

              {/* end filter */}

              <div className="mobile-filter-button-divider"></div>

              <button type="button">
                <span>Sort</span>
              </button>
            </div>
            <hr style={{
              border: "1px solid #e8eaf6",
              marginTop: "12px",
            }}/>
          </div>
        </>
      ) : null}
      {/* end FILTER */}
    </>
  );
};

export default TopbarSearchSortFilter;

import React, { useEffect } from "react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../../../redux/actions/menuItemsAction";
import Navbar from "../../header/Navbar2";
import { useParams } from "react-router-dom";
import { useTheme, useMediaQuery, IconButton } from "@mui/material";
import BottomNavbar from "../components/BottomNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const prices = [
  {
    name: "₹1 - ₹50",
    value: "1-50",
  },
  {
    name: "₹51 - ₹100",
    value: "51-100",
  },
  {
    name: "₹101 - ₹150",
    value: "101-150",
  },
  {
    name: "₹151 - ₹200",
    value: "151-200",
  },
  {
    name: "₹201 - ₹250",
    value: "201-250",
  },
];



const MenuItems = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error } = itemsState;

  useEffect(() => {
    dispatch(getAllMenuItems());
  }, [dispatch]);


   //material UI breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
      {/* <section>
        <Navbar />
        <div className="">
          {loading ? (
            <h1>load.........</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <>
              

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ flexGrow: 2, maxWidth: "90%" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={12}>
                      {items.map((cur) => {
                        return (
                          <>
                            <Items menuItem={cur} />
                          </>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </>
          )}
        </div>
      </section> */}


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
              {/* <SearchIcon style={{
                 position:"absolute",
                 left:"15px",
                 top:"12px"
               }}/> */}
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


        {/* topbar for sorting and backScrenn */}

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div className="container d-flex justify-content-center products-bottom-header">
            <div className="back-arrow">
              <ArrowBackIcon />
            </div>

            <div className="sort-by-container">Sort by Discount</div>
          </div>
        </Box>

        <hr
          style={{
             border: "1px solid #e8eaf6",
            margin: "6px 1px",
          }}
        />

        {/* filters & displays all the products */}
        <section className="product-view-filters d-flex justify-content-center">
          <Grid container spacing={1} className="filter-product-sections-grid">
            {/* for filters section */}

            <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
              <Box>
                <div className="sort-filter">
                  <p className="filter-heading">Filters</p>

                  <hr
                    style={{
                      margin: " 0px",
                      padding: " 0px",
                    }}
                  />

                  <div className="price-filter">
                    <p className="">Price</p>
                    {prices.map((p) => {
                      return (
                        <>
                          <p className="price-heading">{p.name}</p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </Box>
            </Grid>

            {/* for displays products section */}
            <Grid item xs={8}>
              <Box>
                <div className="main-products">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={1}
                    className="main-prod-grid"
                  >
                    {/* <ProductsScreen /> */}
                    <div className="products-section">
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={1}
                        className="main-prod-grid"
                      >
                        {items.map((product) => {
                          return (
                            <>
                             <Items menuItem={product} />
                            </>
                          );
                        })}
                      </Grid>
                    </div>
                    </Grid>
                </div>
              </Box>
            </Grid>
          </Grid>
        </section>
    

    </>
  );
};

export default MenuItems;

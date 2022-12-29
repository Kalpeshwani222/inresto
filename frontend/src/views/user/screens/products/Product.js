import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import Navbar from "../../../header/Navbar";
import data from "../../../../dummyData";
import "./products.css";
import { useTheme, useMediaQuery, IconButton } from "@mui/material";
import BottomNavbar from "../../components/BottomNavbar";
import SearchIcon from "@mui/icons-material/Search";

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

const Products = () => {
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

      <div className="product-section">
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
                        {data.map((product) => {
                          return (
                            <>
                              <Grid item lg={6} spacing={1}>
                                <Box p={1}>
                                  <Card
                                    className="product-card"
                                    sx={{ maxWidth: 700, display: "flex" }}
                                  >
                                    <CardActionArea sx={{ display: "flex" }}>
                                      <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={product.image}
                                        alt="Live from space album cover"
                                        className="product-image"
                                      />

                                      <CardContent sx={{ flex: "1 0 auto" }}>
                                        <div className="wrap-prod-nameprice">
                                          <Typography
                                            component="div"
                                            className="product-title "
                                          >
                                            {product.prodName}
                                          </Typography>

                                          <Typography className="product-sub">
                                            {product.words}
                                          </Typography>
                                        </div>

                                        <Box>
                                          <CardActions className="product-footer-part">
                                            <div className="price d-flex justify-content-start">
                                              <p
                                                style={{
                                                  fontSize: "20px",
                                                  lineHeight: "18px",
                                                  color: "#1a181e",
                                                  fontWeight: "400",
                                                }}
                                              >
                                                {product.price}
                                              </p>
                                            </div>

                                            <div className="add-to-bag-button-with-variants d-flex justify-content-end">
                                              <Button
                                                variant="outlined"
                                                endIcon={<AddIcon />}
                                              >
                                                ADD
                                              </Button>
                                            </div>
                                          </CardActions>
                                        </Box>
                                      </CardContent>
                                    </CardActionArea>
                                  </Card>
                                </Box>
                              </Grid>
                            </>
                          );
                        })}
                      </Grid>
                    </div>
                    {/* 
                    {data.map((product) => {
                      return (
                        <>
                          <Grid item lg={6} spacing={2}>
                            <Box p={1}>
                              <Card
                                sx={{ maxWidth: 700, display: "flex" }}
                                className="product-card">
                                <CardActionArea sx={{ display: "flex" }}>
                                  <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={product.image}
                                    alt="Live from space album cover"
                                    className="product-image"
                                  
                                  />

                                  <CardContent sx={{ flex: "1 0 auto" }}>
                                    <div className="wrap-prod-nameprice">
                                      
                                      <Typography
                                    className="product-title">
                                      {product.prodName}
                                    </Typography>


                                      <Typography
                                    className="product-sub">
                                      {product.words}
                                    </Typography>

                                    </div>
                                    
                                    <Box>
                                      <CardActions className="product-footer-part" >
                                        
                                        <div className="price d-flex justify-content-start">
                                          <p className="product-price">
                                            {product.price}
                                          </p>
                                        </div>

                                        <div className="add-to-bag-button-with-variants d-flex justify-content-end">
                                          <Button
                                            variant="outlined"
                                            endIcon={<AddIcon />}
                                          >
                                            ADD
                                          </Button>
                                        </div>
                                        
                                      </CardActions>
                                    </Box>
                                  </CardContent>
                                </CardActionArea>
                              </Card>
                            </Box>
                          </Grid>
                        </>
                      );
                    })} */}
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
};

export default Products;

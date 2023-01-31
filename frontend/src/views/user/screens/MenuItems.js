import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../../../redux/actions/menuItemsAction";
import { useTheme, useMediaQuery } from "@mui/material";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid } from "@mui/material";
import TopbarSearchSortFilter from "../components/TopbarSearchSortFilter";
import Loading from "../components/Loading";

import { useHistory } from "react-router-dom";

const MenuItems = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error } = itemsState;

  //material UI breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [obj, setObj] = useState();
  const [sort, setSort] = useState({ sort: "price", order: "desc" });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(
      getAllMenuItems(
        page,
        sort.sort,
        sort.order,
        filterCategory.toString(),
        search
      )
    );
  }, [search, page, dispatch, sort, filterCategory]);

  //get all the category
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
      <div className="">
        <div className="">
          <TopbarSearchSortFilter
            setSearch={(search) => setSearch(search)}
            filterCategory={filterCategory}
            setFilterCategory={(filterCategory) =>
              setFilterCategory(filterCategory)
            }
          />
        </div>

        <div className="main-item-section product-view-filters d-flex justify-content-center">
          <Grid container spacing={1} className="filter-product-sections-grid">
            {/* for displays products section */}
            <Grid item xs={8}>
              <Box>
                <div className="main-products">
                  <Grid
                    container
                    // rowSpacing={1}
                    // columnSpacing={1}
                    className="main-prod-grid"
                  >
                    {/* <ProductsScreen /> */}
                    <div className="products-section">
                      <Grid
                        container
                        // rowSpacing={1}
                        columnSpacing={1}
                        className="main-prod-grid"
                      >
                        {loading && <Loading />}
                        {items.items &&
                          items.items.map((cur, ind) => {
                            return (
                              <>
                                <Items menuItem={cur} />
                              </>
                            );
                          })}
                      </Grid>
                      <div
                        className="all-products-btn d-flex justify-content-center"
                        onClick={() => history.push("/products")}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <p
                          style={{
                            maxWidth: "202px",
                            fontWeight: "500",
                            backgroundColor: "#f2f2f2",
                            borderRadius: "4px",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "16px auto",
                            padding: "4px 6px 4px 16px",
                            display: "flex",
                            marginTop: "0px",
                          }}
                        >
                          See all Items
                          <ArrowForwardIosIcon
                            style={{
                              fontSize: "16px",
                              margin: "5px",
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MenuItems;

import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useTheme, useMediaQuery } from "@mui/material";
import TopbarSearchSortFilter from "../../components/TopbarSearchSortFilter";
import SubNavbar from "../../components/SubNavbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMenuItems,
  loadMoreMenuItems,
} from "../../../../redux/actions/menuItemsAction";
import Items from "../../components/Items";
import Loading from "../../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const dispatch = useDispatch();
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error, loadingMore } = itemsState;

  const showLoadMore = items.item && items.item.length < items.total;

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
  }, [search, dispatch, sort, filterCategory]);

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

  const loadMore = () => {
    setPage(page + 1);
    dispatch(
      loadMoreMenuItems(
        page + 1,
        sort.sort,
        sort.order,
        filterCategory.toString(),
        search
      )
    );
  };

  return (
    <>
      <div className="">
        <div className="">
          <TopbarSearchSortFilter
            setSearch={(search) => setSearch(search)}
             setPage={setPage}
            filterCategory={filterCategory}
            setFilterCategory={(filterCategory) =>
              setFilterCategory(filterCategory)
            }
          />
        </div>

        <div className="">
          {/* topbar for sorting and backScrenn */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <SubNavbar
              sort={sort}
              setSort={(sort) => setSort(sort)}
              setSearch={(search) => setSearch(search)}
            />
          </Box>
          {/* end */}
        </div>

        <div className="main-item-section product-view-filters d-flex justify-content-center">
          <Grid container spacing={1} className="filter-product-sections-grid">
            <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
              <Box>
                <Sidebar
                  categories={obj ? obj : []}
                  filterCategory={filterCategory}
                  setPage={setPage}
                  setFilterCategory={(filterCategory) =>
                    setFilterCategory(filterCategory)
                  }
                />
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
                        {loading && <Loading />}
                        {items.item &&
                          items.item.map((cur) => {
                            return (
                              <>
                                <Items menuItem={cur} />
                              </>
                            );
                          })}
                      </Grid>
                      {showLoadMore && (
                        <button variant="outline-primary" onClick={loadMore}>
                          {loadingMore ? "Loading..." : "Load More"}
                        </button>
                      )}
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

export default Products;

import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import "./products.css";
import { useTheme, useMediaQuery } from "@mui/material";
import TopbarSearchSortFilter from "../../components/TopbarSearchSortFilter";
import SubNavbar from "../../components/SubNavbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../../../../redux/actions/menuItemsAction";
import Items from "../../components/Items";
import Pagination from "../../components/Pagination";

const Products = () => {

  const dispatch = useDispatch();
  
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error } = itemsState;
const [obj, setObj] = useState(items);
  //material UI breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
    <>
      <div className="">
        <div className="">
          <TopbarSearchSortFilter />
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
                  // categories={items.category ? items.category : []}
                  categories={obj.category ? obj.category : []}
                  filterCategory={filterCategory}
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
                        {items.items &&
                          items.items.map((cur, ind) => {
                            return (
                              <>
                                <Items menuItem={cur} key={ind} />
                              </>
                            );
                          })}
                      </Grid>
                      <Pagination
                        page={page}
                        limit={items.limit ? items.limit : 0}
                        total={items.total ? items.total : 0}
                        setPage={(page) => setPage(page)}
                      />
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

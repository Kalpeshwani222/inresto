import React, { useEffect } from "react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../../../redux/actions/menuItemsAction";
import Navbar from "../../header/Navbar2";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const MenuItems = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error } = itemsState;

  useEffect(() => {
    dispatch(getAllMenuItems());
  }, [dispatch]);

  return (
    <>
      <section>
        <Navbar />
        <div className="">
          {loading ? (
            <h1>load.........</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <>
              {/* <div className="container">
                <div className="row">
                  {items.map((cur) => {
                    return (
                      <>
                        <Items menuItem={cur} />
                      </>
                    );
                  })}
                </div>
              </div> */}

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
      </section>
    </>
  );
};

export default MenuItems;

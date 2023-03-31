import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

const OrderFilters = ({ status, setStatusFilter }) => {
  const orderStatusFilters = ({ currentTarget: input }) => {
    setStatusFilter(input.value === "none" ? "" : input.value);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <Box>
            {" "}
            <TextField
              placeholder="search..."
              fullWidth
              inputProps={{
                style: {
                  height: 50,
                  padding: "0 14px",
                },
              }}
              //   onChange={({ currentTarget: input }) => setSearchVal(input.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box>
            <select
              onChange={orderStatusFilters}
              className=""
              //   defaultValue={sort.sort}
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "4px",
                padding: "5px",
              }}
            >
              {status.map((cur) => {
                return (
                  <>
                    <option key={cur} value={cur}>
                      {cur}
                    </option>
                  </>
                );
              })}
            </select>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box>
            <select
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "4px",
                padding: "5px",
              }}
              //   onChange={onSelectCategory}
            >
              <option>Last 5 days orders</option>
              <option>Last 7 days orders</option>
              <option>Last 15 days orders</option>
            </select>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box>
            <Button
              variant="contained"
              endIcon={<CloudDownloadOutlinedIcon />}
              sx={{
                mr: 1,
                ml: 1,
                bgcolor: "#0e9f6e !important",
                height: "50px",
                width: "95%",
              }}
            >
              Download all Orders
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderFilters;

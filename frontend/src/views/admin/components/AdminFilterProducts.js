import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, TextField, Typography, Button, Box, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AdminFilterProducts = ({
  setSearch,
  setPage,
  filterCategory,
  sort,
  setSort,
  setFilterCategory,
  handleOpen,
}) => {
  const [obj, setObj] = useState();

  const onSelectCategory = ({ currentTarget: input }) => {
    // console.log(input.value);
    setPage(1);

    const state = [...filterCategory, input.value];
    setFilterCategory(state);

    // if (input.select) {
    //   const state = [...filterCategory, input.value];
    //   setFilterCategory(state);
    // } else {
    //   const state = filterCategory.filter((val) => val !== input.value);
    //   setFilterCategory(state);
    // }
  };

  //low -> && high -> low
  const onSelectChange = ({ currentTarget: input }) => {
    setPage(1);
    if (input.value === "asc") {
      setSort({ sort: sort.sort, order: "asc" });
    } else {
      setSort({ sort: sort.sort, order: "desc" });
    }
  };

  const setSearchVal = (val) => {
    setPage(1);
    setSearch(val);
  };

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
              onChange={({ currentTarget: input }) => setSearchVal(input.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box>
            <select
              onChange={onSelectChange}
              className=""
              defaultValue={sort.sort}
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "4px",
                padding: "5px",
              }}
            >
              <option value="desc">&uarr;Price high to low</option>
              <option value="asc">&darr; Price low to high</option>
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
              onChange={onSelectCategory}
            >
              {obj &&
                obj.map((category) => {
                  return (
                    <>
                      <option
                     key={category._id}
                        // id={cur._id}
                        style={{
                          width: "30rem",
                          height: "10px",
                          fontSize: "14px",
                        }}
                        value={category._id}
                      >
                        {category.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box>
            <Button
              onClick={handleOpen}
              variant="contained"
              startIcon={<AddCircleIcon />}
              sx={{
                mr: 1,
                ml: 1,
                bgcolor: "#0e9f6e",
                height: "50px",
                width: "95%",
              }}
            >
              Add Product
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminFilterProducts;

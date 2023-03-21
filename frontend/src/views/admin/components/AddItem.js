import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addMenuItem,
  clearErrors,
} from "../../../redux/actions/menuItemsAction";
import toast, { Toaster } from "react-hot-toast";

const AddItem = ({ closeEvent }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  //add MENU ITEM state
  const addItemState = useSelector((state) => state.addMenu);
  const { loading, success, error } = addItemState;

  //onchage category
  const onSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  //onchange type of product
  const onSelectType = (event) => {
    setType(event.target.value);
  };

  //ADD ITEM
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMenuItem(name, image, price, desc, selectedCategory, type));
  };

  //get all the category
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/admin/category`
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  const resetHandler = () => {
    setName("");
    setImage("");
    setDesc("");
    setPrice("");
    setType("");
    setSelectedCategory("");
  };
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        duration: 3000,
      });
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Menu Added Successfully", {
        position: "top-center",
        duration: 3000,
      });
      dispatch({ type: "ADD_MENU_ITEMS_RESET" });
      resetHandler();
    }
  }, [dispatch, error, success]);

  return (
    <>
      <Box>
        <Typography variant="h5" align="center">
          Add Product
        </Typography>
        <IconButton
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
          onClick={closeEvent}
        >
          <CloseOutlinedIcon />
        </IconButton>
        <Box height={20} />

        {loading ? (
          <>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </>
        ) : null}

        <Box component="form" onSubmit={submitHandler} noValidate>
          <Grid container spacing={1}>
            <Grid item lg={12}>
              <TextField
                fullWidth
                label="Product Name"
                variant="outlined"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </Grid>

            <Grid item lg={12} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                autoComplete="off"
                label="Product Image URL"
                variant="outlined"
                value={image || ""}
                onChange={(e) => setImage(e.target.value)}
              />
            </Grid>

            <Grid item lg={12} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                autoComplete="off"
                label="Product Description"
                variant="outlined"
                multiline
                maxRows={2}
                value={desc || ""}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Grid>

            <Grid item lg={6} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                autoComplete="off"
                label="Price"
                variant="outlined"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} sx={{ mt: 1 }}>
              <TextField
                select
                fullWidth
                label="Type"
                variant="outlined"
                defaultValue="Select Type"
                onChange={onSelectType}
              >
                <MenuItem value="Select Type">
                  <em>Select Type</em>
                </MenuItem>
                <MenuItem key="1" value="veg">
                  Veg
                </MenuItem>
                <MenuItem key="2" value="nonVeg">
                  NonVeg
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item lg={12} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                select
                label="Select Category"
                defaultValue="Select Category"
                helperText="Please select Item Category"
                onChange={onSelectCategory}
              >
                <MenuItem value="Select Category">
                  <em>Select Category</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item lg={12} sx={{ mt: 1 }}>
              <Typography variant="h5" align="center">
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Toaster />
    </>
  );
};

export default AddItem;

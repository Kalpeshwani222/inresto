import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AdminLayout from "../components/AdminLayout";
import {
  Box,
  Typography,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  getAllMenuItems,
  loadMoreMenuItems,
} from "../../../redux/actions/menuItemsAction";
import AdminFilterProducts from "../components/AdminFilterProducts";
import Modal from "@mui/material/Modal";
import AddItem from "../components/AddItem";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: "8", label: "#id", minWidth: 10 },
  { id: "1", label: "PRODUCT NAME", minWidth: 200 },
  { id: "2", label: "IMAGE", minWidth: 140 },
  { id: "3", label: "CATEGORY", minWidth: 130 },
  { id: "4", label: "PRICE", minWidth: 100 },
  { id: "5", label: "DESCRIPTION", minWidth: 100 },
  { id: "6", label: "DATE", minWidth: 140 },
  { id: "7", label: "ACTIONS", minWidth: 130 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //all products list state
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error, loadingMore } = itemsState;

  const [sort, setSort] = useState({ sort: "price", order: "desc" });
  const [filterCategory, setFilterCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const showLoadMore = items.item && items.item.length < items.total;

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

  return (
    <AdminLayout>
      <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 2, mr: 1 }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "10px" }}
          >
            Products List
          </Typography>
          <Divider />

          <Box
            height={40}
            sx={{ m: 1.8 }}
            style={{
              // backgroundColor:'red',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AdminFilterProducts
              setSearch={(search) => setSearch(search)}
              setPage={setPage}
              filterCategory={filterCategory}
              sort={sort}
              setSort={(sort) => setSort(sort)}
              setFilterCategory={(filterCategory) =>
                setFilterCategory(filterCategory)
              }
              handleOpen={handleOpen}
            />
          </Box>
          <Divider />

          {/* <Box height={10} /> */}
          <Box>
            {loading ? (
              <CircularProgress
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  height: "75vh",
                }}
              />
            ) : (
              <TableContainer sx={{ mt: 2 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.item &&
                      items.item.map((cur, ind) => {
                        return (
                          <>
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={cur.name}
                            >
                              <TableCell>{ind + 1}</TableCell>
                              <TableCell>{cur.name}</TableCell>
                              <TableCell>
                                <div>
                                  <img
                                    src={cur.image}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "5px",
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
                              </TableCell>
                              <TableCell>{cur.category.name}</TableCell>
                              <TableCell>{cur.price}</TableCell>
                              <TableCell>
                                {cur.desc.slice(0, 100)}....
                              </TableCell>
                              <TableCell>
                                {moment(cur.createdAt).format("Do h:mm a")}
                              </TableCell>
                              <TableCell>
                                <Box sx={{ m: 2 }}>
                                  <ModeOutlinedIcon sx={{ color: "gray" }} />
                                  <DeleteOutlinedIcon sx={{ color: "gray" }} />
                                </Box>
                              </TableCell>
                            </TableRow>
                          </>
                        );
                      })}
                  </TableBody>
                </Table>
                {showLoadMore && (
                  <Button
                    variant="contained"
                    sx={{ mr: 2.5, ml: 2.5, bgcolor: "#0e9f6e" }}
                    onClick={loadMore}
                  >
                    {loadingMore ? "Loading..." : "Load More"}
                  </Button>
                )}
              </TableContainer>
            )}
          </Box>
        </Paper>
      </Box>

      {/* add item model */}
      <div>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddItem closeEvent={handleClose} />
          </Box>
        </Modal>
      </div>
    </AdminLayout>
  );
}

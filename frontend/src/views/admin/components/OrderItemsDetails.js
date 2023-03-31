import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
const columns = [
  { id: "1", label: "Sr no", minWidth: 20 },
  { id: "2", label: "Product Name", minWidth: 100 },
  { id: "3", label: "Product Image", minWidth: 130 },
  { id: "4", label: "Quantity", minWidth: 80 },
  { id: "5", label: "Item Price", minWidth: 80 },
  { id: "6", label: "Amount", minWidth: 100 },
];

const OrderItemsDetails = ({ items }) => {
  return (
    <>
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
            {items &&
              items.map((item, ind) => {
                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={item.product._id}
                    >
                      <TableCell>{ind + 1}</TableCell>
                      <TableCell>{item.product.name}</TableCell>
                      <TableCell> <div>
                              <img
                                src={item.product.image}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "5px",
                                  objectFit: "contain",
                                }}
                              />
                            </div></TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.product.price}</TableCell>
                            <TableCell>{item.product.price * item.quantity}</TableCell>
                    </TableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderItemsDetails;

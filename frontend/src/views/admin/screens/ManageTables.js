import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import axios from "axios";
import { saveAs } from "file-saver";
import socket from "../../../socket/socketApi";
import addNotification from "react-push-notification";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/material";
import AdminLayout from "../components/AdminLayout";
import "./tables.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Button } from "@mui/material";

const ManageTables = () => {
  const history = useHistory();
  const [qrcode, setQrcode] = useState("");
  const [table, setTables] = useState([]);

  //generate QR
  const GenerateQRCode = async (url, tableno) => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383ff",
        },
      },
      (err, url) => {
        if (err) return console.log(err);
        setQrcode(url);
      }
    );
  };

  //download QR
  const downloadQRCode = () => {
    saveAs(qrcode, `tableno`);
  };

  //API call for get all the tables
  const getAllTables = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/table/get-all-tables`
      );

      setTables(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  //API call for update the Update the Table Status
  const updateTableStatus = async (tableID) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/table/free/${tableID}`,
        config
      );
      history.push("./admin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTables();

    socket.emit("join", "adminRoom");

    //receive the data from backend
    socket.on("tableBook", (data) => {
      addNotification({
        title: `Table No ${data.tableno} Book`,
        message: `order ID is  ${data._id} `,
        duration: 7000,
        native: true,
      });
      getAllTables();
    });
  }, []);
  return (
    <>
      <AdminLayout>
        <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 2 }}>
          <div className="table-div">
            <div>
              <Button variant="contained" size="medium"  sx={{ mr: 2.5, ml: 2.5, bgcolor: "#0e9f6e" }}>
                ADD Table
              </Button>
            </div>
            <div class="container mt-5">
              <div class="row">
                {table.map((cur, ind) => {
                  return (
                    <div class="col-lg-1 m-1" key={ind}>
                      <div
                        className="table"
                        style={{
                          backgroundColor:
                            cur.status === "free" ? "#f1f1f1" : "red",
                        }}
                      >
                        <p> {cur.tableno}</p>
                        <div className="table-btns">
                          <button
                            onClick={() =>
                              GenerateQRCode(
                                `${process.env.REACT_APP_HOSTED_URL}/menu/${cur.tableno}`,
                                cur.tableno
                              )
                            }
                          >
                            QR
                          </button>

                          <IconButton
                            aria-label="delete"
                            onClick={() => updateTableStatus(cur._id)}
                          >
                            <CloseIcon
                              style={{
                                fontSize: "30px",
                              }}
                            />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="qrCodeimg"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            {qrcode && (
              <>
                <img
                  src={qrcode}
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "block",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />

                <button type="submit" onClick={() => downloadQRCode()}>
                  Download
                </button>
              </>
            )}
          </div>
        </Box>
      </AdminLayout>
    </>
  );
};

export default ManageTables;

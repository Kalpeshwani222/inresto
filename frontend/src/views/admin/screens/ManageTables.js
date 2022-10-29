import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import axios from "axios";
import { saveAs } from "file-saver";
import socket from "../../../socket/socketApi";
import addNotification from "react-push-notification";

const ManageTables = () => {
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
        "http://localhost:8000/api/table/get-all-tables"
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
      const { data } = await axios.put(`/api/table/free/${tableID}`, config);
      console.log(data);
      if (data.message === "FREE") {
        window.location.href = "/admin/home";
      }
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
        title:`Table No ${data.tableno} Book`,
        message:`order ID is  ${data._id} `,
        duration:7000,
        native:true,
      })
      getAllTables();
    });
  }, []);
  return (
    <>
      {/* all tables */}
      <table
        style={{
          width: "100%",
          margin: "5rem",
        }}
      >
        <tr>
          {table.map((cur, ind) => {
            return (
              <>
                {cur.status === "free" ? (
                  <>
                    <div
                      style={{
                        width: "200px",
                        height: "130px",
                        border: "1px solid",
                        margin: "1px",
                        display: "flex",
                        justifyContent: "center",
                        display: "inline-block",
                        backgroundColor: "green",
                      }}
                    >
                      <h1
                        style={{
                          marginRight: "auto",
                          marginLeft: "auto",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        {cur.tableno}
                      </h1>
                      <p>{cur.status}</p>

                      <button
                        style={{}}
                        onClick={() =>
                          GenerateQRCode(
                            `http://localhost:3000/menu-items/${cur.tableno}`,
                            cur.tableno
                          )
                        }
                      >
                        Generate
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        width: "200px",
                        height: "130px",
                        border: "1px solid",
                        margin: "1px",
                        display: "flex",
                        justifyContent: "center",
                        display: "inline-block",
                        backgroundColor: "red",
                      }}
                    >
                      <h1
                        style={{
                          marginRight: "auto",
                          marginLeft: "auto",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        {cur.tableno}
                      </h1>
                      <p>{cur.status}</p>
                      <button
                        style={{}}
                        onClick={() =>
                          GenerateQRCode(
                            `http://localhost:3000/menu/${cur.tableno}`,
                            cur.tableno
                          )
                        }
                      >
                        generate
                      </button>
                      &nbsp;
                      <button onClick={() => updateTableStatus(cur._id)}>
                        Free Table
                      </button>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </tr>
      </table>

      <div className="qrCodeimg">
        {qrcode && (
          <>
            <img
              src={qrcode}
              style={{
                width: "200px",
                height: "200px",
                display: "block",
                alignItems: "center",
              }}
            />

            <button type="submit" onClick={() => downloadQRCode()}>
              Download
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ManageTables;

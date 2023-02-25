import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import Navbar from "../../../header/Navbar";
import { useSelector } from "react-redux";
import {Redirect, useHistory} from "react-router-dom";

const ScanqrCode = () => {
  const history = useHistory();

  const [showDialog, setDiaglog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [precScan, setPrecScan] = useState("Not found");

  const [selected, setSelected] = useState("environment");
  const [errorMessage, setErrorMessage] = useState(null);

  //user state
  const userState = useSelector((state) => state.LoginUserReducer);
  const { userInfo } = userState;

  const handleScan = async (scanData) => {
    // console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "" && !showDialog && !processing) {
      setPrecScan(scanData);
      setDiaglog(true);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    if (precScan === "Not found") {
      // console.error("exe");
    } else {
      let urlString = precScan;
      let tableno = urlString.substring(urlString.lastIndexOf("/") + 1);

      //localstorage to update the table no
      let localStorageData = JSON.parse(localStorage.getItem("userInfo"));
      let updateData = {
        email: userInfo.email,
        name: userInfo.name,
        tableNo: tableno,
        _id: userInfo._id,
      };

      Object.keys(updateData).forEach((key) => {
        localStorageData[key] = updateData[key];
      });

      //set the updated data to the localstorage
      localStorage.setItem("userInfo", JSON.stringify(localStorageData));

      history.push(`/menu/${tableno}`)
    }
  }, [precScan]);

  return (
    <>
      <div>
        <div className="">
          <Navbar />

          <div
            className=""
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              //  marginTop:"40%",
            }}
          >
            {precScan === "Not found" ? (
              <>
                <QrReader
                  facingMode={selected}
                  delay={500}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "240px", heigth: "100px" }}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanqrCode;

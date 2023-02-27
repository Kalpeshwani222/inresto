import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./qr.css";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

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

    }else if(!precScan.includes(process.env.REACT_APP_HOSTED_URL)){
        setErrorMessage("Not Sure What Went Wrong. Try Scanning Again Please Using The QR in Table.");
    }else {
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

      history.push(`/menu/${tableno}`);
    }
  }, [precScan]);

  return (
    <>
      <section className="qrscan">
        <IconButton
          onClick={() => history.goBack()}
          edge="start"
          color="inherit"
          className="close-btn"
          aria-label="close"
        >
          <ClearIcon
            style={{
              color: "white",
              fontSize: "2.5rem",
            }}
          />
        </IconButton>
        <br />
        <br />
        <br />
        <div className="btn-para">
          <p>Scan QR code To Explore A Menu Made From 100% Safe Ingredients</p>
        </div>
        <div className="qrdiv">
          {precScan === "Not found" ? (
            <>
              <QrReader
                facingMode={selected}
                delay={500}
                onError={handleError}
                onScan={handleScan}
                className="qr-scanner"
              />
            </>
          ) : null}
        </div>
        <p>{errorMessage}</p>
      </section>
    </>
  );
};

export default ScanqrCode;

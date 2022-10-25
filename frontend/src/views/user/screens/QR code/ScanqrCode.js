import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

const ScanqrCode = () => {
  const [showDialog, setDiaglog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [precScan, setPrecScan] = useState("Not found");

  const [selected, setSelected] = useState("environment");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
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
      console.error("exe");
    } else {
      let urlString = precScan;
      let tableno = urlString.substring(urlString.lastIndexOf("/") + 1);

      window.location.href = `/menu-items/${tableno}`;
    }
  }, [precScan]);

  return (
    <>
      {/* <h2>{precScan}</h2> */}

      {/* {!showDialog && !processing && ( */}
      {precScan === "Not found" ? (
        <>
          {" "}
          <QrReader
            facingMode={selected}
            delay={500}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "200px", heigth: "100px" }}
          />
        </>
      ) : null}
    </>
  );
};

export default ScanqrCode;

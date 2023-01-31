import React from "react";
import { Toolbar, Tooltip, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SubNavbar = ({ setSearch, sort, setSort }) => {

  //low -> && high -> low
  const onSelectChange = ({ currentTarget: input }) => {
    if (input.value === "asc") {
      setSort({ sort: sort.sort, order: "asc" });
    } else {
      setSort({ sort: sort.sort, order: "desc" });
    }
  };

  return (
    <>
      <div
        className="add-button-subHeader"
        style={{
          border: "1px solid #e6e6e6",
          width: "99%",
          marginTop: "0px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            <ArrowBackIcon
              style={{
                fontSize: "30px",
                cursor: "pointer",
              }}
              // onClick={() => history.goBack()}
            />
          </Typography>

          <input
            type="text"
            placeholder="search here........"
            onChange={({ currentTarget: input }) => setSearch(input.value)}
          />

          <Tooltip title="Add Primary Category">
            <div className="">
              <select
                onChange={onSelectChange}
                className=""
                defaultValue={sort.sort}
              >
              <option value="desc">&uarr;Price high to low</option>
                <option value="asc">&darr; Price low to high</option>
                
              </select>
            </div>
          </Tooltip>
        </Toolbar>
      </div>
    </>
  );
};

export default SubNavbar;

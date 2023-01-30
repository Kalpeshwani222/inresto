import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ categories, filterCategory, setFilterCategory }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [show, setShow] = useState(false);

  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCategory, input.value];
      setFilterCategory(state);
    } else {
      const state = filterCategory.filter((val) => val !== input.value);
      setFilterCategory(state);
    }
  };

  return (
    <>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              width: "16%",
              height: 400,
              mt: 16,
              border: "1px solid #e6e6e6",
              ml: "5px",
            },
          }}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <div
            style={{
              margin: "1rem",
            }}
          >
            Category
            <div className="">
              {categories &&
                categories.map((category) => {
                  return (
                    <>
                      <div
                        className=""
                        key={category.name}
                        style={{
                          minWidth: "90px",
                          display: "flex",
                          alignItems: "center",
                          margin: "2px 0",
                        }}
                      >
                        <input
                          className=""
                          type="checkbox"
                          value={category.name}
                          onChange={onChange}
                          style={{
                            height: "20px",
                            width: "18px",
                          }}
                        />
                        <p
                          className=""
                          style={{
                            margin: "5px",
                          }}
                        >
                          {category.name}
                        </p>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </Drawer>
      </div>

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Sidebar;

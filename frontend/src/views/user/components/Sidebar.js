import React, { useState } from "react";
import { Drawer, IconButton ,Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ categories, filterCategory, setFilterCategory ,setPage}) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [show, setShow] = useState(false);

  const onChange = ({ currentTarget: input }) => {
    setPage(1);
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
      {/* <div
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
      </IconButton> */}
      
      
      <Box
      flex={2}
      p={2}
      mt={2}
      >
    <Box position='fixed'  sx={{
        display: {
          xs: "none",
          sm: "block",
          border:"1px solid #e6e6e6",
          borderRadius:'8px'
        },
      }}>
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
      </Box>
    </Box>
    </>
  );
};

export default Sidebar;

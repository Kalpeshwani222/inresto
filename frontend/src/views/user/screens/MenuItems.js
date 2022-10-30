import React, { useEffect } from "react";
import Items from "../components/Items";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuItems } from "../../../redux/actions/menuItemsAction";
import Navbar from "../../header/Navbar";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const MenuItems = () => {

  const dispatch = useDispatch();
  const param = useParams();
  const itemsState = useSelector((state) => state.getAllItemsReducer);
  const { loading, items, error } = itemsState;

  useEffect(() => {
    dispatch(getAllMenuItems());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <section>
      {/* <ArrowBackIcon /> */}
        <div className="">
          {loading ? (
            <h1>load.........</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <>
              <div className="container">
                <div className="row">
                  {items.map((cur) => {
                    return (
                      <>
                        <Items menuItem={cur} />
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MenuItems;

import React,{useEffect} from "react";
import Items from "../components/Items";
import {useDispatch,useSelector} from "react-redux";
import {getAllMenuItems} from "../../../actions/menuItemsAction"
import Navbar from "../../Navbar";

const MenuItems = () => {

  const dispatch = useDispatch();

  const itemsState = useSelector(state => state.getAllItemsReducer);
  const{loading,items,error} = itemsState;


    useEffect(() =>{
      dispatch(getAllMenuItems());
    },[dispatch])

  return (
    <>
    <Navbar />
      <section>

        <div>
          <table>
          {loading ? <h1>load.........</h1> 
          : error ? <h1>{error}</h1> 
          : <>
              <tr style={{
              display:"flex",
              justifyContent:"center"
            }}>
              {items.map((cur) => {
                return (
                  <>
                    <Items menuItem={cur} />
                  </>
                );
              })}
            </tr>
          </>
          }
            
          </table>
        </div>
      </section>
    </>
  );
};

export default MenuItems;

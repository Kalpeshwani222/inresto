import React from 'react'
import {BottomNavigation ,BottomNavigationAction,Box } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useHistory} from "react-router-dom";


const navigationData = [
  {
    label: "Home",
    value: "",
    icon: <HomeIcon />
  },
  {
    label: "Cart",
    value: "cart",
    icon: <ShoppingBagIcon />
  },
  {
    label: "Account",
    value: "account",
    icon: <PersonOutlineIcon />
  },

  // {
  //   label: "Orders",
  //   value: "orders",
  //   icon: <ShoppingCartIcon />
  // }
];


const BottomNavbar = () => {
    const history = useHistory();

    const [value, setValue] = React.useState(0);
const handleChange = (event, newValue) => {
    setValue(newValue);
     history.push(newValue);
    console.log(newValue);
  };
  return (
    <>
        <BottomNavigation sx={{width:'100%', position:"absolute", bottom:'0' }} 
        value={value} 
        component={Box}
        boxShadow={5}
        onChange={handleChange}
        showLabels>


              {/* <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction label="Cart" icon={<ShoppingBagIcon />} />
        <BottomNavigationAction label="Account" icon={<PersonOutlineIcon />} /> */}

         {navigationData.map((item, index) => (
        <BottomNavigationAction key={index} {...item} />
      ))}
        </BottomNavigation>
    </>
  )
}

export default BottomNavbar
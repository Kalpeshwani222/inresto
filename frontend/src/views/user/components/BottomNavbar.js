import React from 'react'
import {BottomNavigation ,BottomNavigationAction,Box } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useHistory} from "react-router-dom";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const navigationData = [
  {
    label: "Home",
    value: "/home",
    icon: <HomeIcon />
  },
  {
    label: "QR Scan",
    value: "/scanqr",
    icon: <QrCodeScannerIcon />
  },
  {
    label: "cart",
    value: "/cart",
    icon: <ShoppingBagIcon />
  },
  {
    label: "Account",
    value: "/profile",
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
    // console.log(newValue);
  };
  return (
    <>
        <BottomNavigation sx={{width:'100%', bottom:'0',position:"fixed", zIndex:"2" }} 
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
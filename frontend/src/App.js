import React from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import AdminHome from './components/admin/AdminHome';
import Home from './components/Home';
import CartScreen from './components/user/screens/CartScreen';
import MenuItems from './components/user/screens/MenuItems';
import Register from './components/user/screens/Register';
import Login from "./components/user/screens/Login";
import OrderScreen from './components/user/screens/order/OrderScreen';


const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/admin/home" component={AdminHome} exact />
           <Route path="/menu-items/:tableno" component={() => <MenuItems />} />
           <Route path="/cart/:tableno" component={CartScreen} exact />
           <Route path="/orders" component={OrderScreen} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
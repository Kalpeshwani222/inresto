import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManageTables from "./views/admin/screens/ManageTables";
import Home from "./views/Home";
import CartScreen from "./views/user/screens/CartScreen";
import MenuItems from "./views/user/screens/MenuItems";
import Register from "./views/user/screens/auth/Register";
import Login from "./views/user/screens/auth/Login";
import OrderScreen from "./views/user/screens/order/OrderScreen";
import AdminOrdersList from "./views/admin/screens/AdminOrdersList";
import ScanqrCode from "./views/user/screens/QR code/ScanqrCode";
import OrderStatus from "./views/user/screens/order/OrderStatus";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/scan-qr" component={ScanqrCode} exact />
        <Route path="/menu-items/:tableno" component={() => <MenuItems />} />
        <Route path="/cart/:tableno" component={CartScreen} exact />
        <Route path="/orders" component={OrderScreen} exact />
        {/* for single order status */}
        <Route path="/orders/:id" component={OrderStatus} exact />

        {/* admin routes */}
        <Route path="/admin/home" component={ManageTables} exact />
        <Route path="/admin/" component={AdminOrdersList} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

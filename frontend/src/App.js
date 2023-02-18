import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
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
import Products from "./views/user/screens/products/Product";
import Dummy from "./views/user/Dummy";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector, useDispatch } from "react-redux";
import UserRoutes from "./routes/UserRoutes";

const App = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.LoginUserReducer);
  const { error, success, loading, userInfo } = userLogin;

  return (
    <>
      <HashRouter>
        {/* login and register */}
        <Switch>
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />

          {/* <ProtectedRoutes 
          path="/"
          component={Home} 
          user={userInfo} 
          exact /> */}

          <ProtectedRoutes
            path="/scanqr"
            component={ScanqrCode}
            user={userInfo}
            exact
          />

          <ProtectedRoutes
            path="/menu/:id"
            component={MenuItems}
            user={userInfo}
            exact
          />

          <ProtectedRoutes
            path="/products"
            component={Products}
            user={userInfo}
            exact
          />

          <ProtectedRoutes
            path="/cart"
            component={CartScreen}
            user={userInfo}
            exact
          />

          <ProtectedRoutes
            path="/orders"
            component={OrderScreen}
            user={userInfo}
            exact
          />

          <ProtectedRoutes
            path="/orders/:id"
            component={OrderStatus}
            user={userInfo}
            exact
          />

          {/* admin */}

          <Route path="/admin/tables" component={ManageTables} />
          <Route path="/admin/" component={AdminOrdersList} />
          <Route path="/dummy" component={Dummy} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;

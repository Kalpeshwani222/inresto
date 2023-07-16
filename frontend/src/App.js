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
import Profile from "./views/user/screens/profile/Profile";
import Dashboard from "./views/admin/screens/Dashboard";
import ProductList from "./views/admin/screens/ProductList";
import AdminOrderDetails from "./views/admin/screens/AdminOrderDetails";
import Policy from "./views/Policy";



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
          <Route path="/" component={Login} exact />

          <ProtectedRoutes 
          path="/home"
          component={Home} 
          user={userInfo} 
           role="user"
          exact />

          <ProtectedRoutes
            path="/scanqr"
            component={ScanqrCode}
            user={userInfo}
            role="user"
            exact
          />

          <ProtectedRoutes
            path="/menu/:id"
            // component={MenuItems}
            component={Products}
            user={userInfo}
             role="user"
            exact
          />

          <ProtectedRoutes
            path="/products"
            component={Products}
            user={userInfo}
             role="user"
            exact
          />

          <ProtectedRoutes
            path="/cart"
            component={CartScreen}
            user={userInfo}
             role="user"
            exact
          />

          <ProtectedRoutes
            path="/orders"
            component={OrderScreen}
            user={userInfo}
             role="user"
            exact
          />

          <ProtectedRoutes
            path="/orders/:id"
            component={OrderStatus}
            user={userInfo}
             role="user"
            exact
          />
            <ProtectedRoutes
            path="/profile"
            component={Profile}
            user={userInfo}
             role="user"
            exact
          />

          {/* admin */}

          <ProtectedRoutes
            path="/dashboard"
            component={Dashboard}
            user={userInfo}
            role="admin"
            exact
          />

           <ProtectedRoutes
            path="/admin/tables"
            component={ManageTables}
            user={userInfo}
            role="admin"
            exact
          />
            <ProtectedRoutes
            path="/admin/orders"
            component={AdminOrdersList}
            user={userInfo}
            role="admin"
            exact
          />

           <ProtectedRoutes
            path="/admin/order/:id"
            component={AdminOrderDetails}
            user={userInfo}
            role="admin"
            exact
          />

          <ProtectedRoutes
            path="/admin/products"
            component={ProductList}
            user={userInfo}
            role="admin"
            exact
          />
    <Route path="/privacy-policy" component={Policy} exact />
          {/* <Route path="/admin/tables" component={ManageTables} />
          <Route path="/admin/" component={AdminOrdersList} /> */}


          {/* <Route path="/dummy" component={Dummy} /> */}
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;

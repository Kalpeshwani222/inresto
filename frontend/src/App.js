import React from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import AdminHome from './components/admin/AdminHome';
import Home from './components/Home';
import MenuItems from './components/user/MenuItems';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/admin/home" component={AdminHome} exact />
           <Route path="/menu-items/:tableno" component={() => <MenuItems />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ user, component: Component, role, ...rest }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     if (user && user.role === role) {
    //       return <Component {...props} />;
    //     } else if (user && user.role !== role) {
    //       return (
    //         <Redirect to={{ path: `${process.env.REACT_APP_HOSTED_URL}` }} />
    //       );
    //     } else {
    //       return (
    //         <Redirect to={{ path: `${process.env.REACT_APP_HOSTED_URL}` }} />
    //       );
    //     }
    //   }}
    // />



     <Route
      {...rest}
      render={(props) => {
        if(user && user.role === "user" && user.role === role){
          return <Component {...props} />;
        }else if(user && user.role === "admin" && user.role === role){
            return <Component {...props} />;
        }else{
          return <Redirect to={{path : `${process.env.REACT_APP_HOSTED_URL}`}} /> 
        }
        
      }}
    />
  );
};

export default ProtectedRoutes;

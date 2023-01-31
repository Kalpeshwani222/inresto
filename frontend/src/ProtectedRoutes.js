import React from 'react';
import {Route,Redirect} from "react-router-dom";

const ProtectedRoutes = ({user,component : Component, ...rest}) => {
  return (
         <Route {...rest} render={(props) =>{
            if(user) return <Component {...props} />;
            if(!user) return <Redirect to={{path : `${process.env.REACT_APP_HOSTED_URL}`}} />
        }} />  
  )
}

export default ProtectedRoutes
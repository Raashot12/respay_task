import React from "react";
import { Route, Redirect, withRouter  } from "react-router-dom";
// import { useSelector } from "react-redux";

 const PrivateRoute = ( { component: Component, auth, ...rest } ) => {
  //  const isAuthenticated = useSelector( state => state.auth.isAuthenticated );
   const isAuthenticated = localStorage.getItem("token")
  return (
    <Route { ...rest } render={ props => isAuthenticated ? <Component { ...props } /> : <Redirect to={ {
      pathname: "/",
      state: {
        from: props.location
      }
    } } /> } />

  )
}
export default withRouter(PrivateRoute)
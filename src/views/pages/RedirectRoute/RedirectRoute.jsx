import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
// import { useSelector } from "react-redux";

const RedirectRoute = ( { component: Component, auth, ...rest } ) => {
  const isAuthenticated = localStorage.getItem( "token" )

  return (
    <Route { ...rest } render={ props => !isAuthenticated ? <Component { ...props } /> : <Redirect to={ {
      pathname: "/home",
      state: {
        from: props.location
      }
    } } /> } />

  )
}
export default withRouter( RedirectRoute )
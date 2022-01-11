import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectRoute = ( { component: Component, auth, ...rest } ) => {
  const isAuthenticated = useSelector( state => state.auth.isAuthenticated );
  console.log( isAuthenticated )
  return (
    <Route { ...rest } render={ props => isAuthenticated && <Redirect to={ {
      pathname: "/home",
      state: {
        from: props.location
      }
    } } />  } />

  )
}
export default withRouter( RedirectRoute )
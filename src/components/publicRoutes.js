import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoutes(props) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/landing" />;
  } else {
    return props.children;
  }
}

export default PublicRoutes;

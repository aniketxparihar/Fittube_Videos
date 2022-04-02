import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";

const PrivateRoute = () => {
  const { foundUser, createdUser } = useAuth();
  if (createdUser || foundUser) return <Outlet />;
  else return <Navigate replace to={"/login"} />;
};
export default PrivateRoute;

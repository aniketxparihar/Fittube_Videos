import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";

const AuthRoute = () => {
  const { foundUser,createdUser } = useAuth();
  return foundUser||createdUser ? <Navigate to={"/"} /> : <Outlet />;
};

export default AuthRoute;

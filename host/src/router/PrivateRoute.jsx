import React from "react";
import { useAuth } from "@shared/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <p className="text-center text-lg font-medium text-green-500 animate-pulse">
        Loading...
      </p>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location?.pathname }} />;
  }

  return children;
};

export default PrivateRoute;

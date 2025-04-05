import { Navigate } from "react-router-dom";
import { useAuth } from "@shared/AuthProvider";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return children;
  }

  return <Navigate to={"/"} />;
};

export default PublicRoute;

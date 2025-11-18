import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const loggedIn = localStorage.getItem("auth") === "true";

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}


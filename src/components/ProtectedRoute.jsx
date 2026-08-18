import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // 1. Wait for Firebase to determine auth status on refresh
  if (loading) {
    return <div className="loading-spinner">Checking authentication...</div>;
  }

  // 2. Redirect if not logged in
  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, staffOnly = false }) {
  const { isLoggedIn, isStaff, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <section className="section page-section">
        <p>Loading...</p>
      </section>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (staffOnly && !isStaff) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;

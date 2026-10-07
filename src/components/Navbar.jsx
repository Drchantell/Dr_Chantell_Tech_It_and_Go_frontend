import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, isStaff, user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Tech It and Go home">
        <img src="/Tech%26Gologo.svg" alt="Tech It & Go!" />
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/equipment">Catalog</NavLink>

        {isLoggedIn && <NavLink to="/dashboard">Dashboard</NavLink>}
        {isStaff && <NavLink to="/manage/equipment">Manage</NavLink>}

        {!isLoggedIn ? (
          <>
            <NavLink to="/login">Log In</NavLink>
            <NavLink className="nav-button" to="/register">
              Sign Up
            </NavLink>
          </>
        ) : (
          <>
            <span className="nav-user">Hi, {user?.name?.split(" ")[0]}</span>
            <button className="nav-logout" type="button" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

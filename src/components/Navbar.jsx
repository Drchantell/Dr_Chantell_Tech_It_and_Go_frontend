import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Tech It and Go home">
        <img src="/Tech%26Gologo.svg" alt="Tech It & Go!" />
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/equipment">Catalog</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink className="nav-button" to="/register">
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

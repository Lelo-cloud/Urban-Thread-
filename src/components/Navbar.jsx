import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <header className="navbar">
      <Link className="logo" to="/">
        Urban Threads
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>

        {currentUser && <NavLink to="/cart">Cart</NavLink>}

        {!currentUser ? (
          <>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        ) : (
          <>
            <span className="user-email">{currentUser.email}</span>
            <button onClick={handleLogout}>Log Out</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
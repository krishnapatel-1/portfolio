import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LEFT SIDE LOGO */}
        <div className="navbar-logo">
          <NavLink to="/">Krishna Patel</NavLink>
        </div>

        {/* RIGHT SIDE LINKS */}
        <ul className="navbar-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/project" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/work" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Work
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

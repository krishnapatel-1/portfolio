import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ButtonIcon from "../ButtonIcon";
import logo from "@/assets/logo.jpg"

export default function Navbar() {
  return (
    <nav className="glass-navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <NavLink to="/">
            <img id ="logo" src={logo} alt="krishna patel" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Work
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

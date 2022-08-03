import { useState } from "react";

//import Navlink for navigtion in the navbar
import { NavLink } from "react-router-dom";

//import logo svg from the shared folder
import logo from "../assets/shared/logo.svg";

export default function Navbar() {
  const [openNav, setOpenNav] = useState("false");

  const handleOpen = () => {
    if (openNav === "false") {
      setOpenNav("true");
    } else {
      setOpenNav("false");
    }
  };

  return (
    <header>
      <img src={logo} alt="space travel logo" />
      <nav>
        <ul className="primary-navigation" data-visible={openNav}>
          <li>
            <NavLink
              to="/"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={handleOpen}
            >
              {" "}
              00 <span className="link-txt">home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={handleOpen}
            >
              {" "}
              01 <span>destination</span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={handleOpen}
            >
              {" "}
              02 <span>crew</span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              onClick={handleOpen}
            >
              {" "}
              03 <span>technology</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="mobile-navigation"
        aria-expanded={openNav}
        onClick={handleOpen}
      >
        <span className="sr-only">menu</span>
      </button>
    </header>
  );
}

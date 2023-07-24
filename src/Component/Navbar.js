import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <nav className="navbar">
      <img
        className="logo"
        alt=""
        src="/image-9@2x.png"
        onClick={onClickHome}
        style={{ cursor: "pointer" }}
      />
      <ul
        className={open ? "nav-links-mobile" : "nav-links"}
        onClick={() => setOpen(false)}
      >
        <Link to="/platforms" className="nav-items">
          <li className={location.pathname === "/platforms" ? "active" : ""}>
            Platforms
          </li>
        </Link>
        <Link to="/use-cases" className="nav-items">
          <li className={location.pathname === "/use-cases" ? "active" : ""}>
            Use Cases
          </li>
        </Link>
        <Link to="/industries" className="nav-items">
          <li className={location.pathname === "/industries" ? "active" : ""}>
            Industries
          </li>
        </Link>
        <Link to="/services" className="nav-items">
          <li className={location.pathname === "/services" ? "active" : ""}>
            Services
          </li>
        </Link>
        <Link to="/resource" className="nav-items">
          <li className={location.pathname === "/resource" ? "active" : ""}>
            Resource
          </li>
        </Link>
      </ul>
      <button className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

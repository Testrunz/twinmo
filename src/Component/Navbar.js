import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HomeLogo from "../Asset/HomeLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const navRef = useRef(null);
  const onClickHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  // Add a click event listener to close the menu when clicking outside
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleMenuClick = (event) => {
    event.stopPropagation(); // Prevent the click from propagating to document
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <img
        className="logo"
        alt=""
        src={HomeLogo}
        onClick={onClickHome}
        style={{ cursor: "pointer" }}
      />
      <ul ref={navRef} className={open ? "nav-links-mobile" : "nav-links"}>
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
          {/* <Link to="/resource" className="nav-items">
          <li className={location.pathname === "/resource" ? "active" : ""}>
            Resource
          </li>
        </Link> */}
          <Link to="/blog" className="nav-items">
            <li className={location.pathname === "/blog" ? "active" : ""}>
              Blog
            </li>
          </Link>
        {/* </ul> */}
      </ul>
      <button className="menu-icon" onClick={handleMenuClick}>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
};

export default Navbar;

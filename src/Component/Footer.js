import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Footer.css";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

import Logo from "../Asset/Logo.png";
const Footer = () => {
  const navigate = useNavigate();

  // Event handlers for navigating to different pages
  const onClickHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const onClickPlatform = () => {
    window.scrollTo(0, 0);
    navigate("/platforms");
  };

  const onClickUsecase = () => {
    window.scrollTo(0, 0);
    navigate("/use-cases");
  };

  const onClickIndustries = () => {
    window.scrollTo(0, 0);
    navigate("/industries");
  };

  const onClickServices = () => {
    window.scrollTo(0, 0);
    navigate("/services");
  };

  // const onClickResource = () => {
  //   window.scrollTo(0, 0);
  //   navigate("/resource");
  // };

  const onClickBlog = () => {
    window.scrollTo(0, 0);
    navigate("/blog");
  };

  const onClickPrivacyPolicy = () => {
    window.scrollTo(0, 0);
    navigate("/privacy-policy");
  };

  const onClickCookiePolicy = () => {
    window.scrollTo(0, 0);
    navigate("/cookie-policy");
  };
  return (
    <div>
      {/* <hr/> */}
      <div className="footer-row-1">
        <div className="footer-col-1">
          <img
            className="footer-logo"
            alt=""
            src={Logo}
            onClick={onClickHome}
          />
        </div>
        <div className="footer-col-2">
          <p className="about-us-title">About us</p>
          <ul className="footer-links">
            <Link to="/" className="footer-items">
              <li onClick={onClickHome}>Home</li>
            </Link>
            <Link to="/platforms" className="footer-items">
              <li onClick={onClickPlatform}>Platforms</li>
            </Link>
            <Link to="/use-cases" className="footer-items">
              <li onClick={onClickUsecase}>Use Cases</li>
            </Link>
            <Link to="/industries" className="footer-items">
              <li onClick={onClickIndustries}>Industries</li>
            </Link>
            <Link to="/services" className="footer-items">
              <li onClick={onClickServices}>Services</li>
            </Link>
            {/* <Link to="/resource" className="footer-items">
              <li onClick={onClickResource}>Resource</li>
            </Link> */}
             <Link to="/blog" className="footer-items">
              <li onClick={onClickBlog}>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="footer-col-3">
          <p className="contact-us-title">Contact us</p>
          <ul className="footer-social-icons">
            <li className="footer-social-links">
              <FaTwitter />
            </li>
            <li className="footer-social-links">
              <FaLinkedin />
            </li>
            <li className="footer-social-links">
              <AiOutlineGithub />
            </li>
            <li className="footer-social-links">
              <GrMail />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-row-2">
        <div className="footer-col-5">
          <p>© 2023 Twinmo, Inc. All rights reserved</p>
        </div>
        <div className="footer-col-4">
          <ul className="footer-links-2">
            <Link to="/privacy-policy" className="footer-items-2">
              <li onClick={onClickPrivacyPolicy}>Privacy Policy | </li>
            </Link>
            <Link
              // to="/terms-service"
              className="footer-items-2"
            >
              <li>Terms of Service | </li>
            </Link>
            <Link to="/cookie-policy" className="footer-items-2">
              <li onClick={onClickCookiePolicy}>Cookie Policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

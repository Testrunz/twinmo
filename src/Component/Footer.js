import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Logo from "../Asset/HomeLogo.png";

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
      <hr/>
      <div className="footer-row-1">
        <div className="footer-col-1">
          <img
            className="footer-logo"
            alt=""
            src={Logo}
            onClick={onClickHome}
          />
          {/* <p>Our innovative all-in-one solution revolutionizes <br/> the way industries approach experimentation and <br/> product development.</p> */}
        </div>
        <div className="footer-col-2">
          {/* <p className="about-us-title">Quick Links</p> */}
          <ul className="footer-links">
            <li className="footer-items" onClick={onClickHome}>
              Home
            </li>
            <li className="footer-items" onClick={onClickPlatform}>
              Platforms
            </li>
            <li className="footer-items" onClick={onClickUsecase}>
              Use Cases
            </li>
            <li className="footer-items" onClick={onClickIndustries}>
              Industries
            </li>
            <li className="footer-items" onClick={onClickServices}>
              Services
            </li>
              <li className="footer-items" onClick={onClickBlog}>
                Blog
              </li>
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
            <li className="footer-items-2" onClick={onClickPrivacyPolicy}>
              Privacy Policy |{" "}
            </li>
            <li className="footer-items-2">Terms of Service | </li>
            <li className="footer-items-2" onClick={onClickCookiePolicy}>
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

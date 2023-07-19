// Importing necessary modules and styles
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// Defining the Service component
const Services = () => {
  const navigate = useNavigate();

  // Event handlers for navigating to different pages
  const onClickHome = () => {
    window.scrollTo(0, 0);
    navigate("/");
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

  const onClickResource = () => {
    window.scrollTo(0, 0);
    navigate("/resource");
  };

  const onPrivacyPolicyClick = () => {
    window.scrollTo(0, 0);
    navigate("/privacy-policy");
  };

  const onCookiePolicyTextClick = () => {
    window.scrollTo(0, 0);
    navigate("/cookie-policy");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault("");

    emailjs
      .sendForm(
        "service_zgvwjpe",
        "template_wstbxgm",
        form.current,
        "PpCBYhF138ELTjh3o"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          alert("Message sent!!!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="services1">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>
          Tailored Support for Product Development | Twinmo Services
        </title>
        <meta name="keyword" content="Consultation for Innovation" />
        <meta
          name="description"
          content="At Twinmo, we offer tailored support for your product development journey. From consultation to quality control, discover our range of services."
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      {/* Service page content */}
      <div className="vector-group">
        <img className="rectangle-icon" alt="" src="/rectangle-33.svg" />
        <img className="rectangle-icon" alt="" src="/rectangle-34.svg" />
        <div className="frame-parent9">
          <div className="customized-support-for-your-pr-parent">
            <h1 className="customized-support-for">
              Customized Support for Your Product Needs
            </h1>
            <div className="we-understand-the-container">
              {/* <p className="blank-line">&nbsp;</p> */}
              <p className="blank-line">
                We understand the uniqueness of every product, and we're ready
                to provide tailored support. Fill in our contact form and let us
                know whether your focus is Innovation, Testing, or Quality
                Control. Tell us about your problem or objective, and we'll
                schedule a consultation.
              </p>
            </div>
            {/* <div className="button-type-24">
              <div className="button9">Get Started</div>
            </div> */}
          </div>
          <img className="group-icon" alt="" src="/group-181@2x.png" />
        </div>
      </div>
      <div className="services-inner">
        <div className="frame-parent10">
          <div className="interested-to-talk-wrapper">
            <b className="interested-to-talk">Contact form</b>
          </div>
          {/*    <div className="achieve-your-most">
            Achieve your most ambitious content goals with Rock Content’s Global
            Talent Network. Let’s get ready to rock!
          </div>*/}
        </div>
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form">
          <div className="input-group">
            <div className="input-parent">
              <div className="input">
                <div className="input-title-section">
                  <div className="input-section">
                    <input
                      className="base-input-rounded-not-sel"
                      placeholder="Name"
                      type="text"
                      name="user_name"
                      required
                    ></input>
                    <div className="mini-title-contaier">
                      <div className="title">First name</div>
                      <div className="div">*</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input1">
                <div className="input-title-section">
                  <div className="input-section">
                    <input
                      className="base-input-rounded-not-sel"
                      placeholder="Lastname"
                      required
                    ></input>
                    <div className="mini-title-contaier">
                      <div className="title">Last name</div>
                      <div className="div">*</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input2">
              <div className="input-title-section">
                <div className="input-section">
                  <input
                    className="base-input-rounded-not-sel"
                    placeholder="yourmail@gmail.com"
                    type="email"
                    name="user_email"
                    required
                  ></input>
                  <div className="mini-title-contaier">
                    <div className="title">E-mail</div>
                    <div className="div">*</div>
                  </div>
                  <div className="input-right-section">
                    <img
                      className="icon-duotone-envelope"
                      alt=""
                      src="/icon--duotone--envelope.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="input5">
              <div className="input-title-section">
                <div className="input-section">
                  <textarea
                    className="base-input-rounded-not-sel"
                    placeholder="Your Message"
                    name="message"
                    required
                    style={{ height: "150px", fontFamily: "Poppins" }}
                  ></textarea>
                  <div className="mini-title-contaier1">
                    <div className="title">Message</div>
                    <div className="div">*</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="button10" type="submit">
          <div className="enter">Submit</div>
        </button>
      </form>
      {/* Main navigation */}
      <nav className="main-nav">
        <ul className="main-nav__list">
          {/* Home button */}
          <img
            className="image-9-icon11"
            alt=""
            src="/image-9@2x.png"
            onClick={onClickHome}
            style={{ cursor: "pointer" }}
          />
          <div className="main-nav__box">
            {/* Navigation links */}
            <li className="main-nav__item">
              <div
                className="main-nav__link"
                onClick={onClickPlatform}
                style={{ cursor: "pointer" }}
              >
                Platforms
              </div>
            </li>
            <li className="main-nav__item">
              <div
                className="main-nav__link"
                onClick={onClickUsecase}
                style={{ cursor: "pointer" }}
              >
                Use Cases
              </div>
            </li>
            <li className="main-nav__item">
              <div
                className="main-nav__link"
                onClick={onClickIndustries}
                style={{ cursor: "pointer" }}
              >
                Industries
              </div>
            </li>
            <li className="main-nav__item">
              <div
                className="main-nav__link"
                // onClick={onClickServices}

                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Service
                <div
                  className="underline"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#F1C232",
                  }}
                ></div>
              </div>
            </li>
            <li className="main-nav__item">
              <div
                className="main-nav__link"
                onClick={onClickResource}
                style={{ cursor: "pointer" }}
              >
                Resource
              </div>
            </li>
          </div>
        </ul>
      </nav>
      {/* Footer */}
      <div className="footerdefault1">
        <div className="footer1">
          <div className="frame-parent11">
            {/* Navigation links */}
            <div className="frame-parent12">
              <div className="home-container" onClick={onClickHome}>
                <div className="footer-options">Home</div>
              </div>
              <div className="home-container" onClick={onClickPlatform}>
                <div className="footer-options">Platforms</div>
              </div>
              <div className="home-container" onClick={onClickUsecase}>
                <div className="footer-options">Use Cases</div>
              </div>
              <div className="home-container" onClick={onClickIndustries}>
                <div className="footer-options">Industries</div>
              </div>
              <div className="home-container" onClick={onClickServices}>
                <div className="footer-options">Services</div>
              </div>
              <div className="home-container" onClick={onClickResource}>
                <div className="footer-options">{`Resource `}</div>
              </div>
            </div>
          </div>
          <div className="frame-parent13">
            {/* <div className="contact-container">
              <b className="interested-to-talk">Contact</b>
            </div> */}
            <div className="twinmo-container">
              <div className="footer-options">Contact us</div>
            </div>
            {/* <div className="twinmo-container">
              <div className="twinmo-ay-1101">
              No. 21, 1st Main Road, Ambal Nagar, Pondicherry 605009
              </div>
            </div> */}
          </div>
          <div className="image-19-group">
            <img className="image-19-icon1" alt="" src="/image-19@2x.png" />
            <img className="image-17-icon1" alt="" src="/image-17@2x.png" />
            <img className="image-18-icon1" alt="" src="/image-18@2x.png" />
            <img className="image-20-icon1" alt="" src="/image-20@2x.png" />
          </div>
          <div className="footer-item" />
          <img className="image-9-icon3" alt="" src="/image-91@2x.png" />
          <div className="twinmo-inc-all1">
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className="privacy-policy-group">
          <div
            className="privacy-policy1"
            onClick={onPrivacyPolicyClick}
          >{`Privacy Policy | `}</div>
          <div className="terms-of-service1">{`Terms of Service | `}</div>
          <div className="cookie-policy1" onClick={onCookiePolicyTextClick}>
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

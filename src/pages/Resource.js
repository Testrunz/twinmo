// Importing necessary modules and styles
import { useNavigate } from "react-router-dom";
import "./Resource.css";
import { Helmet } from "react-helmet-async";

// Defining the Resource component
const Resource = () => {
  const navigate = useNavigate();

  // Defining the LandingPage component
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

  return (
    <div className="resource">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Resources for Advanced DOE and Systems Thinking | Twinmo</title>
        <meta
          name="keyword"
          content="Resources for advanced DOE and systems thinking"
        />
        <meta
          name="description"
          content="Explore our resources to learn more about advanced DOE and systems thinking. Dive into our case studies, methods, and tools for experimentation and analysis."
        />
        <link rel="canonical" href="/resource" />
      </Helmet>
      {/* Resource page content */}
      <div className="vector-parent">
        <img className="frame-child" alt="" src="/rectangle-33.svg" />
        <img className="frame-child" alt="" src="/rectangle-34.svg" />
        <div className="frame-parent">
          <div className="experimentation-and-beyond-tw-parent">
            <h1 className="experimentation-and-beyond">
              Experimentation and Beyond: Twinmo's Resource Collection for
              Next-Level Product Development
            </h1>
            <div className="explore-our-resources-container">
              <p className="explore-our-resources">
                Explore our resources to dive deeper into topics such as
                advanced DOE, systems thinking, thought maps, and process maps.
                Read our case studies to discover how other businesses have
                transformed their product development process with Twinmo.
              </p>
              <p className="explore-our-resources">
                Transform your product development today. Get faster to market
                and stay ahead of the competition with Twinmo. Contact us now.
                Your success is our mission.
              </p>
              <p className="explore-our-resources">
                Remember to include relevant images and videos to make the
                content more engaging and visually appealing.
              </p>
            </div>
          </div>
          <img className="frame-inner" alt="" src="/group-18@2x.png" />
        </div>
      </div>
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
                onClick={onClickServices}
                style={{ cursor: "pointer" }}
              >
                Service
              </div>
            </li>
            <li className="main-nav__item">
              <div
                className="main-nav__link"
                // onClick={onClickResource}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Resource
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
          </div>
        </ul>
      </nav>
      <div className="footerdefault">
        <div className="footer">
          <div className="frame-container">
            {/* Navigation links */}
            <div className="frame-parent1">
              <div className="home-wrapper" onClick={onClickHome}>
                <div className="twinmo">Home</div>
              </div>
              <div className="home-wrapper" onClick={onClickPlatform}>
                <div className="twinmo">Platforms</div>
              </div>
              <div className="home-wrapper" onClick={onClickUsecase}>
                <div className="twinmo">Use Cases</div>
              </div>
              <div className="home-wrapper" onClick={onClickIndustries}>
                <div className="twinmo">Industries</div>
              </div>
              <div className="home-wrapper" onClick={onClickServices}>
                <div className="twinmo">Services</div>
              </div>
              <div className="home-wrapper" onClick={onClickResource}>
                <div className="twinmo">Resource</div>
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="twinmo-wrapper">
              <div className="twinmo">Contact us</div>
            </div>
          </div>
          <div className="image-19-parent">
            <img className="image-19-icon" alt="" src="/image-19@2x.png" />
            <img className="image-17-icon" alt="" src="/image-17@2x.png" />
            <img className="image-18-icon" alt="" src="/image-18@2x.png" />
            <img className="image-20-icon" alt="" src="/image-20@2x.png" />
          </div>
          <div className="footer-child" />
          <img className="image-9-icon1" alt="" src="/image-91@2x.png" />
          <div className="twinmo-inc-all">
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className="privacy-policy-parent">
          <div className="privacy-policy" onClick={onPrivacyPolicyClick}>
            Privacy Policy |{" "}
          </div>
          <div className="terms-of-service">Terms of Service | </div>
          <div className="cookie-policy" onClick={onCookiePolicyTextClick}>
            Cookie Policy
          </div>
        </div>
      </div>
      <b className="methods-and-tools">
        Methods and Tools for Experimentation and Analysis
      </b>
      <div className="frame-parent3">
        <div className="huge-iconinterfacebulkshiel-wrapper">
          <img
            className="huge-iconinterfacebulkshiel"
            alt=""
            src="/hugeiconinterfacebulkshieldcheck.svg"
          />
        </div>
        <div className="button">Experimentation Quotes</div>
      </div>

      <div className="frame-parent4">
        <div className="huge-iconinterfacebulkshiel-wrapper">
          <img
            className="huge-iconinterfacebulkshiel"
            alt=""
            src="/hugeiconinterfacesolidlove.svg"
          />
        </div>
        <div className="button">Systems thinking</div>
      </div>
      <div className="frame-parent5">
        <div className="huge-iconinterfacebulkpaint-wrapper">
          <img
            className="huge-iconinterfacebulkpaint"
            alt=""
            src="/hugeiconinterfacebulkpaint-bucket.svg"
          />
        </div>
        <div className="button">Process maps</div>
      </div>
      <div className="frame-parent6">
        <div className="huge-iconinterfacebulkshiel-wrapper">
          <img
            className="huge-iconinterfacebulkshiel"
            alt=""
            src="/hugeiconinterfacebulklocation-01.svg"
          />
        </div>
        <div className="button">Thought maps - Track the work</div>
      </div>
      <div className="frame-parent7">
        <div className="huge-iconinterfacebulkopen-wrapper">
          <img
            className="huge-iconinterfacebulkpaint"
            alt=""
            src="/hugeiconinterfacebulkopen-book.svg"
          />
        </div>
        <div className="button">Case studies</div>
      </div>
      <div className="frame-parent8">
        <div className="huge-iconinterfacebulkshiel-wrapper">
          <img
            className="huge-iconinterfacebulkshiel"
            alt=""
            src="/hugeiconinterfacebulkzoomtext.svg"
          />
        </div>
        <div className="button">DOE advanced</div>
      </div>
    </div>
  );
};

export default Resource;

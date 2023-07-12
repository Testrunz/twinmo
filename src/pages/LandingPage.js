import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { Helmet } from "react-helmet-async";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();

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
  const [open, setOpen] = useState(false);

  const clickMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="landing-page">
      <Helmet>
        <title>Twinmo - AI-powered Experimentation Platform | Home</title>
        <meta name="keyword" content="AI-powered experimentation platform" />
        <meta name="description" content="Welcome to Twinmo, the AI-powered experimentation platform revolutionizing product development" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="vector-parent3">
        <img className="frame-child27" alt="" src="/rectangle-331.svg" />
        <img className="frame-child27" alt="" src="/rectangle-341.svg" />
        <div className="frame-parent38">
          <div className="unleash-the-power-of-ai-based-parent">
            <div className="unleash-the-power-container">
              <h1 className="unleash-the-power">
                Unleash the Power of AI based Experimentation in Product
                Decisions
              </h1>
            </div>
            <div className="twinmo-is-revolutionizing">
              Twinmo is revolutionizing the way companies develop products. With
              Testrunz, our AI-powered experimentation platform, businesses can
              accelerate every phase of product development, from discovery and
              innovation to compliance testing and manufacturing.
            </div>
            <div className="twinmo-is-revolutionizing">
              Testrunz is trusted by hundreds of businesses, harnessing
              artificial intelligence to streamline their product development
              processes with unmatched speed and precision. It's not just about
              faster innovation - it's about smarter, data-driven decision
              making that drives successful products.
            </div>
            <div className="twinmo-is-revolutionizing">
              Experience the future of product development with Testrunz by
              Twinmo. Because great products start with great experiments.
            </div>
            <div className="twinmo-is-revolutionizing">
              Revolutionize your product testing with Twinmo's innovative
              all-in-one solution, Testrunz.
            </div>
            {/* <div className="button-type-216">
              <div className="predefined-test-procedure">Get Started</div>
            </div> */}
          </div>
          <img className="frame-child29" alt="" src="/group-185@2x.png" />
        </div>
      </div>
      <div className="frame-parent39">
        <div className="the-power-of-rapid-experimenta-parent">
          <b className="the-power-of">The Power of Rapid Experimentation</b>
          <div className="transform-the-way">
            Transform the way you discover, test, and learn. Our
            state-of-the-art Experimentation Platform is designed to accelerate
            your experimentation process, allowing you to make informed
            decisions quickly. Plan and execute experiments with ease, without
            ever beating around the bush.
          </div>
          {/* <div className="button-type-216">
            <div className="predefined-test-procedure">Get Started</div>
          </div> */}
        </div>
        <div className="confident-teacher-explaining-l-wrapper">
          <img
            className="confident-teacher-explaining-l-icon"
            alt=""
            src="/car.png"
          />
        </div>
      </div>
      <div className="frame-parent40">
        <div className="confident-teacher-explaining-l-wrapper">
          <img
            className="confident-teacher-explaining-l-icon"
            alt=""
            src="/home.png"
          />
        </div>
        <div className="the-power-of-rapid-experimenta-parent">
          <b className="the-power-of">One Unified Platform</b>
          <div className="transform-the-way">
            No more juggling multiple tools and platforms. With Twinmo's
            Testrunz, you have a single unified platform for every aspect of
            product development. This includes all stakeholders - engineers, lab
            managers, technicians, research, development, and production teams.
            Streamline every type of experiment or test, and manage all units
            under test, from components to subsystems to the full product.
          </div>
          {/* <div className="button-type-216">
            <div className="predefined-test-procedure">Get Started</div>
          </div> */}
        </div>
      </div>
      <div className="frame-parent41">
        <div className="rectangle-parent9">
          <div className="frame-child30" />
          <img className="twinmoimg" src="Twinmo_Hardware.png"></img>
          {/* <img
            className="screenshot-2023-06-27-at-447-icon"
            alt=""
            src="/screenshot-20230627-at-447-1@2x.png"
          />
          <img
            className="mockup-screen-removebg-preview-icon"
            alt=""
            src="/mockup-screenremovebgpreview-1@2x.png"
          />
          <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" /> */}
        </div>
        <div className="vertically-integrated-solution-parent">
          <b className="vertically-integrated-solution">
            Vertically Integrated Solution
          </b>
          <div className="weve-taken-the">
            We've taken the hassle out of the experimentation process. Twinmo's
            Testrunz offers a seamlessly integrated hardware and software
            solution, eliminating setup time and enhancing your productivity.
            Our platform streamlines experiment execution like never before.
          </div>
          {/* <div className="button-type-216">
            <div className="predefined-test-procedure">Get Started</div>
          </div> */}
        </div>
      </div>
      <div className="frame-parent42">
        <div className="frame-wrapper">
          <div className="frame-parent43">
            <div className="key-features-wrapper">
              <div className="key-features1">Key Features</div>
            </div>
            <div className="frame-parent44">
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick.svg"
                />
                <div className="predefined-test-procedure">
                  Predefined test procedure library
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick1.svg"
                />
                <div className="predefined-test-procedure">
                  Comprehensive test input and inventory management
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick2.svg"
                />
                <div className="predefined-test-procedure">
                  Step-by-step digital work instructions
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick.svg"
                />
                <div className="predefined-test-procedure">
                  Integrated test instruments for time-efficient data collection
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick1.svg"
                />
                <div className="predefined-test-procedure">
                  Interactive charts for real-time test progress tracking
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick.svg"
                />
                <div className="predefined-test-procedure">
                  Advanced AI engine for automatic calculations and results
                  analysis
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick2.svg"
                />
                <div className="predefined-test-procedure">
                  Simplified test report generation
                </div>
              </div>
              <div className="charmcircle-tick-parent">
                <img
                  className="charmcircle-tick-icon"
                  alt=""
                  src="/charmcircletick1.svg"
                />
                <div className="predefined-test-procedure">
                  Advanced analytics for further data analysis
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embrace-the-future-container">
          {/* <p className="unleash-the-power">&nbsp;</p> */}
          <p>
            Embrace the Future of Experimentation Access your test runs from
            anywhere, on any device. Our AI-powered platform extracts critical
            insights, eliminating the need for traditional tools like Excel.
            Generate compliant, ready-to-submit reports effortlessly, and never
            worry about losing valuable data. Join us on this journey to reshape
            the future of product testing. Welcome to Twinmo, where experiments
            are transformed into insights!
          </p>
        </div>
      </div>
      <div className="footerdefault5">
        <div className="footer5">
          <div className="frame-parent45">
            {/* <div className="twinmo-wrapper3">
              <b className="vertically-integrated-solution">Twinmo</b>
            </div> */}
            <div className="frame-parent46">
              <div className="home-wrapper3" onClick={onClickHome}>
                <div className="vertically-integrated-solution">Home</div>
              </div>
              <div className="home-wrapper3" onClick={onClickPlatform}>
                <div className="vertically-integrated-solution">Platforms</div>
              </div>
              <div className="home-wrapper3" onClick={onClickUsecase}>
                <div className="vertically-integrated-solution">Use Cases</div>
              </div>
              <div className="home-wrapper3" onClick={onClickIndustries}>
                <div className="vertically-integrated-solution">Industries</div>
              </div>
              <div className="home-wrapper3" onClick={onClickServices}>
                <div className="vertically-integrated-solution">Services</div>
              </div>
              <div className="home-wrapper3" onClick={onClickResource}>
                <div className="vertically-integrated-solution">Resource</div>
              </div>
            </div>
          </div>
          <div className="frame-parent47">
            {/* <div className="contact-wrapper3">
              <b className="vertically-integrated-solution">Contact</b>
            </div> */}
            <div className="twinmo-wrapper3">
              <div className="vertically-integrated-solution">Contact us</div>
            </div>
            {/* <div className="twinmo-wrapper3">
              <div className="twinmo-ay-1105">
                No. 21, 1st Main Road, Ambal Nagar, Pondicherry 605009
              </div>
            </div> */}
          </div>
          <div className="image-19-parent3">
            <img className="image-19-icon5" alt="" src="/image-19@2x.png" />
            <img className="image-17-icon5" alt="" src="/image-17@2x.png" />
            <img className="image-18-icon5" alt="" src="/image-18@2x.png" />
            <img className="image-20-icon5" alt="" src="/image-20@2x.png" />
          </div>
          <div className="footer-child2" />
          <img className="image-9-icon10" alt="" src="/image-91@2x.png" />
          <div className="twinmo-inc-all5">
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className="privacy-policy-parent3">
          <div className="privacy-policy5" onClick={onPrivacyPolicyClick}>
            Privacy Policy |
          </div>
          <div className="terms-of-service5">Terms of Service | </div>
          <div className="cookie-policy5" onClick={onCookiePolicyTextClick}>
            Cookie Policy
          </div>
        </div>
      </div>

      <div className="header5">
        <div className="header-child3" />
        <div className="image-9-parent3">
          <img
            className="image-9-icon11"
            alt=""
            src="/image-9@2x.png"
            onClick={onClickHome}
            style={{ cursor: "pointer" }}
          />
          <div className="button-hover-line-parent3">
            <div className="button-hover-line25">
              <div
                className="vertically-integrated-solution"
                onClick={onClickPlatform}
                style={{ cursor: "pointer" }}
              >
                Platforms
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className="vertically-integrated-solution"
                onClick={onClickUsecase}
                style={{ cursor: "pointer" }}
              >
                Use Cases
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className="vertically-integrated-solution"
                onClick={onClickIndustries}
                style={{ cursor: "pointer" }}
              >
                Industries
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className="vertically-integrated-solution"
                onClick={onClickServices}
                style={{ cursor: "pointer" }}
              >
                Service
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className="vertically-integrated-solution"
                onClick={onClickResource}
                style={{ cursor: "pointer" }}
              >
                Resource
              </div>
            </div>
          </div>
          {/* <div className="button-hover-line25">
            <div className="vertically-integrated-solution">
              <div className="toggle-btn" onClick={clickMenu}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </div>
          </div> */}
        </div>
        {/* {open && (
          <ul className="header-list">
            <li>Platforms</li>
            <li>Use Cases</li>
            <li>Industries</li>
            <li>Service</li>
            <li>Resource</li>
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default LandingPage;

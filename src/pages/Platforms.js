import { useNavigate } from "react-router-dom";
import "./Platforms.css";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import "./Slick.css";
import "./Slick-theme.css";

const Platforms = () => {
  const navigate = useNavigate();

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

  const onClickService = () => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="platforms4">
      <Helmet>
        <title>
          Testrunz: Unified Platform for Product Experiments | Twinmo
        </title>
        <meta
          name="keyword"
          content="Unified platform for product experiments"
        />
        <meta
          name="description"
          content="Explore Testrunz, our AI-powered platform designed to streamline product experiments. Accelerate your product development with real-time data analysis."
        />
        <link rel="canonical" href="/platforms" />
      </Helmet>
      <div className="vector-parent2">
        <img className="frame-child15" alt="" src="/rectangle-331.svg" />
        <img className="frame-child15" alt="" src="/rectangle-341.svg" />
        <div className="frame-parent28">
          <div className="your-all-in-one-experimentatio-parent">
            <h1 className="your-all-in-one-experimentatio">
              Your All-in-One Experimentation Platform for Data Driven Decisions
            </h1>
            <p className="we-provide-a">
              We provide a unified platform, Testrunz, for tracking, analyzing,
              and reporting your product experiments throughout the entire
              development lifecycle. Paired with our state-of-the-art hardware
              module, Unity, you're now equipped to make data-driven decisions
              with confidence and precision.
            </p>
            {/* <div className="button-type-211">
<div className="button32">Get Started</div>
</div> */}
          </div>
          <img className="frame-child17" alt="" src="/group-184@2x.png" />
        </div>
      </div>
      <div className="footerdefault4">
        <div className="footer4">
          <div className="frame-parent29">
            {/* <div className="twinmo-wrapper2">
<b className="digital-experimentation">Twinmo</b>
</div> */}
            <div className="frame-parent30">
              <div className="home-wrapper2" onClick={onClickHome}>
                <div className="footer-options">Home</div>
              </div>
              <div className="home-wrapper2" onClick={onClickPlatform}>
                <div className="footer-options">Platforms</div>
              </div>
              <div className="home-wrapper2" onClick={onClickUsecase}>
                <div className="footer-options">Use Cases</div>
              </div>
              <div className="home-wrapper2" onClick={onClickIndustries}>
                <div className="footer-options">Industries</div>
              </div>
              <div className="home-wrapper2" onClick={onClickService}>
                <div className="footer-options">Services</div>
              </div>
              <div className="home-wrapper2" onClick={onClickResource}>
                <div className="footer-options">Resource</div>
              </div>
            </div>
          </div>
          <div className="frame-parent31">
            {/* <div className="contact-wrapper2">
<b className="digital-experimentation">Contact</b>
</div> */}
            <div className="twinmo-wrapper2">
              <div className="footer-options">Contact us</div>
            </div>
            {/* <div className="twinmo-wrapper2">
<div className="twinmo-ay-1104">
No. 21, 1st Main Road, Ambal Nagar, Pondicherry 605009
</div>
</div> */}
          </div>
          <div className="image-19-parent2">
            <img className="image-19-icon4" alt="" src="/image-19@2x.png" />
            <img className="image-17-icon4" alt="" src="/image-17@2x.png" />
            <img className="image-18-icon4" alt="" src="/image-18@2x.png" />
            <img className="image-20-icon4" alt="" src="/image-20@2x.png" />
          </div>
          <div className="footer-child1" />
          <img className="image-9-icon8" alt="" src="/image-91@2x.png" />
          <div className="twinmo-inc-all4">
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className="privacy-policy-parent2">
          <div
            className="privacy-policy4"
            onClick={onPrivacyPolicyClick}
          >{`Privacy Policy | `}</div>
          <div className="terms-of-service4">{`Terms of Service | `}</div>
          <div className="cookie-policy4" onClick={onCookiePolicyTextClick}>
            Cookie Policy
          </div>
        </div>
      </div>
      {/* <b className="our-products">Our Products</b> */}
      <div className="frame-parent32">
        <div className="digital-experimentation-parent">
          <b className="digital-experimentation">Digital Experimentation</b>
          <div className="a-web-based-application">
            A web-based application that streamlines the experimentation
            workflow by digitizing test steps, processing the test data
            post-experimentation, and automatically generating reports.
          </div>
          {/* <div className="button-type-211">
<div className="button32">Get Started</div>
</div> */}
        </div>
        <div className="my-page-4-1-wrapper">
          <img className="my-page-4-1" alt="" src="/my-page-4-1@2x.png" />
        </div>
      </div>

      <div class="key-features">
        <b>Key Features</b>
      </div>

      {/* <div className="frame-parent33"> */}

      <Slider className="slider_list" {...settings}>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="edit-24-outline1"
              alt=""
              src="/edit--24--outline1.svg"
            />
          </div>
          <br />
          <b className="slider_title">Predefined Test Procedure Library</b>
          <p>
            Unleash efficiency with our expansive, predefined procedure library,
            tailored for a seamless testing experience.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="edit-24-outline1"
              alt=""
              src="/messages--24--outline1.svg"
            />
          </div>
          <br />
          <b className="slider_title">
            Comprehensive Test Input and Inventory Management
          </b>
          <p>
            Optimize your workflows with our holistic test input and inventory
            management system.
          </p>
        </div>
        <div className="slide_box">
          <img className="rectangle-parent9" alt="" src="/frame-181.svg" />
          <br />
          <b className="slider_title">Step-by-step Digital Work Instructions</b>
          <p>
            Navigate your experiments with ease, courtesy of our detailed
            digital work instructions
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="edit-24-outline1"
              alt=""
              src="/grid--24--outline1.svg"
            />
          </div>
          <br />
          <b className="slider_title">
            Integrated Test Instruments for Time-Efficient Data Collection
          </b>
          <p>
            Simplify data collection with our integrated testing instruments,
            designed for speedy and accurate results.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="edit-24-outline1"
              alt=""
              src="/users--24--outline1.svg"
            />
          </div>
          <br />
          <b className="slider_title">
            Interactive Charts for Real-time Test Progress Tracking
          </b>
          <p>
            Track your tests' progress in real-time with our interactive and
            dynamic charts.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="edit-24-outline1"
              alt=""
              src="/setting--24--outline1.svg"
            />
          </div>
          <br />
          <b className="slider_title">
            Advanced AI Engine for Automatic Calculations and Results Analysis
          </b>
          <p>
            Leave the heavy lifting to our advanced AI engine, taking care of
            calculations and providing insightful results analysis.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="mdireport-bell-curve-cumulati-icon1"
              alt=""
              src="/mdi_report-bell-curve-cumulative.png"
            />
          </div>
          <br />
          <b className="slider_title">Simplified Test Report Generation</b>
          <p>
            Easily generate comprehensive test reports with our streamlined
            reporting tool.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            {/* <div className="frame-child12" /> */}
            <img
              className="iconoirreports1"
              alt=""
              src="/iconoirreports1.svg"
            />
          </div>
          <br />
          <b className="slider_title">
            Advanced Analytics for Further Data Analysis
          </b>
          <p>
            Dive deep into your data with our advanced analytics capabilities,
            for insightful and detailed data examination.
          </p>
        </div>
      </Slider>

      {/* </div> */}
      {/* <div className="section-parent">
<div className="section">
<b className="procedures">Procedures</b>
<div className="over-1000-experimentation">
Over 1,000 experimentation procedures have been digitized.
</div>
<div className="section-child">
<div className="frame-child18" />
<img
className="edit-24-outline"
alt=""
src="/edit--24--outline.svg"
/>
</div>
</div>
<div className="section">
<b className="procedures">Notification</b>
<div className="over-1000-experimentation">
Once users submit their Runz, other users will be notified.
</div>
<div className="section-child">
<div className="frame-child18" />
<img
className="edit-24-outline"
alt=""
src="/messages--24--outline.svg"
/>
</div>
</div>
<div className="section">
<b className="runz-report">Runz report</b>
<div className="over-1000-experimentation">
The experimentation workflow is streamlined through the
digitization of test steps and automatic report generation.
</div>
<img className="section-child" alt="" src="/frame-18.svg" />
</div>
</div>
<div className="section-parent">
<div className="section">
<b className="runz-report">Monitoring</b>
<div className="over-1000-experimentation">
Users can easily identify calculation mistakes.
</div>
<div className="section-child">
<div className="frame-child18" />
<img
className="edit-24-outline"
alt=""
src="/grid--24--outline.svg"
/>
</div>
</div>
<div className="section">
<b className="runz-report">{`Teams & Collaboration`}</b>
<div className="there-is-no">
There is no need to manually calculate the result as submitted
Runz display the actual result.
</div>
<div className="section-child">
<div className="frame-child18" />
<img
className="edit-24-outline"
alt=""
src="/users--24--outline.svg"
/>
</div>
</div>
<div className="section">
<b className="runz-report">Saves time</b>
<div className="over-1000-experimentation">
No need to calculate the result. Submitted runz shows the actual
result.
</div>
<div className="section-child">
<div className="frame-child18" />
<img
className="edit-24-outline"
alt=""
src="/setting--24--outline.svg"
/>
</div>
</div>
</div> */}
      <div className="frame-parent34">
        <div className="digital-experimentation">
          Platforms
        </div>
        <div className="frame-parent35">
          <div className="rectangle-parent7">
            <div className="frame-child23" />
            <div className="frame-parent36">
              <img className="frame-child24" alt="" src="/Testrunz.png" />
              <div className="testrunz-parent">
                <div className="testrunz">Testrunz</div>
                <div className="software">Software</div>
              </div>
              <div className="introducing-testrunz-your-str-wrapper">
                <div className="introducing-testrunz-your">
                  Introducing Testrunz, your streamlined solution for executing
                  and tracking product experiments. Testrunz connects to
                  industry-standard test instruments, providing real-time data,
                  analyzing results, and generating reports.
                </div>
              </div>
              {/* <div className="button-type-213">
<div className="button32">Get Started</div>
</div> */}
            </div>
          </div>
          <div className="rectangle-parent7">
            <div className="frame-child23" />
            <div className="frame-parent36">
              <img className="frame-child24" alt="" src="/Unity.png" />
              <div className="unity-parent">
                <div className="testrunz">Unity</div>
                <div className="software">Hardware</div>
              </div>
              <div className="introducing-testrunz-your-str-wrapper">
                <div className="introducing-testrunz-your">
                  Meet Unity, our advanced hardware module designed to interface
                  with lab instruments and facilitate a seamless connection to
                  Testrunz. With its 20-channel capacity for thermocouple, AI,
                  DI, DO measurements and power product measurement features.
                </div>
              </div>
              {/* <div className="button-type-213">
<div className="button32">Get Started</div>
</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="testrunz-wrapper">
        <div className="testrunz1">Testrunz</div>
      </div>
      <div className="group-parent1">
        <div className="my-page-4-1-wrapper">
          <img className="my-page-4-1" alt="" src="/my-page-4-11@2x.png" />
        </div>
        <div className="digital-experimentation-parent">
          <b className="digital-experimentation">
            Detailed Statistics of your RunZ
          </b>
          <div className="a-web-based-application">
            Users carry out their laboratory experiments using predefined test
            procedures and experiment libraries, which streamlines the
            experimentation and learning process. Additionally, Testrunz
            provides the capability for individuals to collaborate in real-time.
          </div>
          {/* <div className="button-type-211">
<div className="button32">Get Started</div>
</div> */}
        </div>
      </div>
      <div className="header4">
        <div className="header-child2" />
        <div className="image-9-parent2">
          <img
            className="image-9-icon9"
            alt=""
            src="/image-9@2x.png"
            onClick={onClickHome}
          />
          <div className="button-hover-line-parent2">
            <div className="button-hover-line20">
              <div
                className="Header-options"
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Platforms
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
            </div>
            <div className="button-hover-line20">
              <div
                className="Header-options"
                onClick={onClickUsecase}
                style={{ cursor: "pointer" }}
              >
                Use Cases
              </div>
            </div>
            <div className="button-hover-line20">
              <div
                className="Header-options"
                onClick={onClickIndustries}
                style={{ cursor: "pointer" }}
              >
                Industries
              </div>
            </div>
            <div className="button-hover-line20">
              <div
                className="Header-options"
                onClick={onClickService}
                style={{ cursor: "pointer" }}
              >
                Service
              </div>
            </div>
            <div className="button-hover-line20">
              <div
                className="Header-options"
                onClick={onClickResource}
                style={{ cursor: "pointer" }}
              >
                Resource
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;

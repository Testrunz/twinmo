// Importing necessary modules and styles
import "./Platforms.css";
import "./Slick.css";
import "./Slick-theme.css";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import Footer from "../Component/Footer";

// Importing Images and SVG from Asset
import PlatformHome from "../Asset/PlatformHome.png";
import Testrunz from "../Asset/Testrunz.png";
import Unity from "../Asset/Unity.png";
import TestrunzMypage from "../Asset/TestrunzMypage.png";
import Mypage from "../Asset/Mypage.png";
import EditIcon from "../Asset/EditIcon.svg";
import MessageIcon from "../Asset/MessageIcon.svg";
import Step from "../Asset/Step.svg";
import Analytics from "../Asset/Analytics.svg";
import Report from "../Asset/Report.png";
import Setting from "../Asset/Setting.svg";
import User from "../Asset/User.svg";
import DataIcon from "../Asset/DataIcon.svg";

// Defining the Platforms component
const Platforms = () => {
  // Settings for the slider component
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="platformpage">
      {/* Helmet component for setting document metadata */}
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
      {/* Row - 1 */}
      <div className="row-21">
        <div className="col-21">
          <h1>
            Your All-in-One Experimentation Platform for Data Driven Decisions
          </h1>
          <h2>
            We provide a unified platform, Testrunz, for tracking, analyzing,
            and reporting your product experiments throughout the entire
            development lifecycle. Paired with our state-of-the-art hardware
            module, Unity, you're now equipped to make data-driven decisions
            with confidence and precision.
          </h2>
        </div>
        <div className="col-22">
          <img className="product21" alt="" src={PlatformHome} />
        </div>
      </div>

      <h2 className="row-title">Platforms</h2>
      {/* Row - 2 */}
      <div className="row-22">
        <div className="col-23">
          <img className="testrunz-img" alt="" src={Testrunz} />
          <h3>Testrunz</h3>
          <h4>Software</h4>
          <h5>
            Introducing Testrunz, your streamlined solution for executing and
            tracking product experiments. Testrunz connects to industry-standard
            test instruments, providing real-time data, analyzing results, and
            generating reports.
          </h5>
        </div>
        <div className="col-24">
          <img className="unity-img" alt="" src={Unity} />
          <h3>Unity</h3>
          <h4>Hardware</h4>
          <h5>
            Meet Unity, our advanced hardware module designed to interface with
            lab instruments and facilitate a seamless connection to Testrunz.
            With its 20-channel capacity for thermocouple, AI, DI, DO
            measurements and power product measurement features.
          </h5>
        </div>
      </div>
      <h6 className="testrunz-title">TestRunZ</h6>
      {/* Row - 3 */}
      <div className="row-23">
        <div className="col-26">
          <h2>Digital Experimentation</h2>
          <h3>
            A web-based application that streamlines the experimentation
            workflow by digitizing test steps, processing the test data
            post-experimentation, and automatically generating reports.
          </h3>
        </div>
        <div className="col-25">
          <img className="product23" alt="" src={Mypage} />
        </div>
      </div>
      {/* Row 4 */}
      <div className="row-24">
        <div className="col-28">
          <img className="product24" alt="" src={TestrunzMypage} />
        </div>
        <div className="col-27">
          <h2>Detailed Statistics of your RunZ</h2>
          <h3>
            Users carry out their laboratory experiments using predefined test
            procedures and experiment libraries, which streamlines the
            experimentation and learning process. Additionally, Testrunz
            provides the capability for individuals to collaborate in real-time.
          </h3>
        </div>
      </div>

      {/* Key features slide */}
      <div class="key-features">
        <b>Key Features</b>
      </div>
      <Slider className="slider_list" {...settings}>
        <div className="slide_box">
          <div className="rectangle-parent9">
            <img className="edit-24-outline1" alt="" src={EditIcon} />
          </div>
          <br />
          <b className="slider_title">Predefined Test Procedure Library</b>
          <p className="feature-list">
            Unleash efficiency with our expansive, predefined procedure library,
            tailored for a seamless testing experience.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            <img className="edit-24-outline1" alt="" src={MessageIcon} />
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
          <img className="rectangle-parent9" alt="" src={Step} />
          <br />
          <b className="slider_title">Step-by-step Digital Work Instructions</b>
          <p>
            Navigate your experiments with ease, courtesy of our detailed
            digital work instructions.
          </p>
        </div>
        <div className="slide_box">
          <div className="rectangle-parent9">
            <img className="edit-24-outline1" alt="" src={DataIcon} />
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
            <img className="edit-24-outline1" alt="" src={User} />
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
            <img className="edit-24-outline1" alt="" src={Setting} />
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
            <img
              className="mdireport-bell-curve-cumulati-icon1"
              alt=""
              src={Report}
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
            <img className="iconoirreports1" alt="" src={Analytics} />
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
      <Footer className="footer" />
    </div>
  );
};

export default Platforms;

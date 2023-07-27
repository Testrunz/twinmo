// Importing necessary modules and styles
import Footer from "../Component/Footer";
import "./LandingPage.css";
import { Helmet } from "react-helmet-async";
import Landing from "../Asset/LandingHome.png"
import Unified from "../Asset/Unified.png"
import Rapid from "../Asset/Rapid.png"
import ImageTwinmo from "../Asset/ImageTwinmo.png"
import Tick from "../Asset/charmcircletick.svg"


// Defining the LandingPage component
const LandingPage = () => {
  return (
    <div className="homepage">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Twinmo - AI-powered Experimentation Platform | Home</title>
        <meta name="keyword" content="AI-powered experimentation platform" />
        <meta
          name="description"
          content="Welcome to Twinmo, the AI-powered experimentation platform revolutionizing product development"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* Landing page content */}
      <div className="row-1">
        <div className="col-1">
          <h1>
            Unleash the Power of AI based Experimentation in Product Decisions
          </h1>
          <h2>
            Twinmo is revolutionizing the way companies develop products. With
            Testrunz, our AI-powered experimentation platform, businesses can
            accelerate every phase of product development, from discovery and
            innovation to compliance testing and manufacturing.
          </h2>
          <h2>
            Testrunz is trusted by hundreds of businesses, harnessing artificial
            intelligence to streamline their product development processes with
            unmatched speed and precision. It's not just about faster innovation
            - it's about smarter, data-driven decision making that drives
            successful products.
          </h2>
          <h2>
            Experience the future of product development with Testrunz by
            Twinmo. Because great products start with great experiments.
          </h2>
          <h2>
            Revolutionize your product testing with Twinmo's innovative
            all-in-one solution, Testrunz.
          </h2>
        </div>
        <div className="col-2">
          <img className="product1" alt="" src={Landing} />
        </div>
      </div>

      <div className="row-2">
        <div className="col-4">
          <img className="product2" alt="" src={Unified} />
        </div>
        <div className="col-3">
          <h2>One Unified Platform</h2>
          <h3>
            No more juggling multiple tools and platforms. With Twinmo's
            Testrunz, you have a single unified platform for every aspect of
            product development. This includes all stakeholders - engineers, lab
            managers, technicians, research, development, and production teams.
            Streamline every type of experiment or test, and manage all units
            under test, from components to subsystems to the full product.
          </h3>
        </div>
      </div>

      <div className="row-3">
        <div className="col-6">
          <h2>The Power of Rapid Experimentation</h2>
          <h3>
            Transform the way you discover, test, and learn. Our
            state-of-the-art Experimentation Platform is designed to accelerate
            your experimentation process, allowing you to make informed
            decisions quickly. Plan and execute experiments with ease, without
            ever beating around the bush.
          </h3>
        </div>
        <div className="col-5">
          <img className="product3" alt="" src={Rapid} />
        </div>
      </div>

      <div className="row-4">
        <div className="col-8">
          <img className="product4" src={ImageTwinmo} />
        </div>
        <div className="col-7">
          <h2>Vertically Integrated Solution</h2>
          <h3>
            We've taken the hassle out of the experimentation process. Twinmo's
            Testrunz offers a seamlessly integrated hardware and software
            solution, eliminating setup time and enhancing your productivity.
            Our platform streamlines experiment execution like never before.
          </h3>
        </div>
      </div>

      <div class="key-feature">
        <b>Key Features</b>
      </div>
      <ul>
        <li className="feature-list">
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp; Predefined test procedure library.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp; Comprehensive test input and inventory management.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp; Step-by-step digital work instructions.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp;Integrated test instruments for time-efficient data collection.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp;Interactive charts for real-time test progress tracking.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp;Advanced AI engine for automatic calculations and results
          analysis.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp;Simplified test report generation.
        </li>
        <li>
          <img
            className="charmcircle-tick-icon"
            alt=""
            src={Tick}
          />
          &nbsp;Advanced analytics for further data analysis.
        </li>
      </ul>
      <p style={{ textAlign: "justify" }}>
        Embrace the Future of Experimentation Access your test runs from
        anywhere, on any device. Our AI-powered platform extracts critical
        insights, eliminating the need for traditional tools like Excel.
        Generate compliant, ready-to-submit reports effortlessly, and never
        worry about losing valuable data. Join us on this journey to reshape the
        future of product testing. Welcome to Twinmo, where experiments are
        transformed into insights!
      </p>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

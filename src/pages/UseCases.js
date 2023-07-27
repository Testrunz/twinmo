// Importing necessary modules and styles
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import "./UseCases.css";
import { useState } from "react";
import Footer from "../Component/Footer";

// Importing Images and SVG from Asset
import UsecaseHome from "../Asset/UsecaseHome.png";
import Discover from "../Asset/Discover.png";
import Quality from "../Asset/Quality.png";
import Verify from "../Asset/Verify.png";

// Defining the Usecase component
const UseCases = () => {
  // Event handlers for toggle to different slides
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="usecasepage">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Accelerate Innovation with Testrunz | Twinmo Use Cases</title>
        <meta name="keywords" content="Smart Experiment Planning" />
        <meta
          name="description"
          content="Discover how Testrunz can transform your product development process. Learn about our smart experiment planning, real-time analysis, and predictive insights."
        />
        <link rel="canonical" href="/use-cases" />
      </Helmet>
      {/* Usecase page content */}
      {/* Row - 1 */}
      <div className="row-31">
        <div className="col-31">
          <h1>
            Revolutionize your Product Testing with Twinmo's Innovative
            All-in-One Solution, Testrunz
          </h1>
          <h2>
            Twinmo's Testrunz brings the power of AI and structured
            experimentation to product development, transforming the processes
            of discovery, compliance testing, and manufacturing. It employs AI
            to accelerate idea generation, automate regulatory compliance, and
            predict quality control issues. With its data-driven approach,
            Testrunz ensures a seamless and efficient transition between product
            development stages, resulting in rapid time-to-market and superior
            product quality. Experience the future of product development with
            Twinmo's Testrunz.
          </h2>
        </div>
        <div className="col-32">
          <img className="product31" alt="" src={UsecaseHome} />
        </div>
      </div>
      {/* Typewriter component */}
      <h4 className="experiment-to">
        Experiment to&nbsp;
        <span style={{ color: "#F1C232" }}>
          <Typewriter
            words={[
              "learn",
              "decide",
              "innovate",
              "launch",
              "optimize",
              "save",
              "market",
              "sell",
              "engage",
              "solve",
            ]}
            loop={0}
            cursor
            typeSpeed={120}
            deleteSpeed={60}
          />
        </span>
      </h4>

      <div className="component-9">
        <div className="frame-parent23">
          <div
            className={
              toggle === 1 ? "discover-innovate active" : "discover-innovate"
            }
            onClick={() => updateToggle(1)}
          >
            Discover/Innovate
          </div>

          <div
            className={
              toggle === 2 ? "discover-innovate active" : "discover-innovate"
            }
            onClick={() => updateToggle(2)}
          >
            Verify/Comply
          </div>

          <div
            className={
              toggle === 3 ? "discover-innovate active" : "discover-innovate"
            }
            onClick={() => updateToggle(3)}
          >
            Manufacture/QC
          </div>
        </div>
        <div className={toggle === 1 ? "show-content" : "content"}>
          <div className="frame-parent24">
            <h4 className="sub-title">
              Discover/Innovate: Accelerate Innovation with DOE and AI
            </h4>
            <p className="revolutionize-your-product">
              When it comes to innovation, speed is of the essence. You need to
              test quickly, learn rapidly, and iterate promptly. At Twinmo, we
              understand this need for speed. That's why Testrunz is not just
              designed to support Design of Experiments (DOE), but also
              leverages the power of modern artificial intelligence to
              streamline and optimize your discovery and innovation cycle.
            </p>
            <p className="revolutionize-your-product">
              AI enables us to generate the most effective DOE matrix to
              facilitate faster learning. The intelligence inherent in our
              software helps in the efficient design of experiments, helping you
              understand how different factors interact to affect outcomes. This
              helps reduce the number of tests required and consequently shrinks
              the time taken in the discovery and innovation phase.
            </p>
            <p className="revolutionize-your-product">How does it work?</p>
            <div></div>
            <img className="frame-child14" alt="" src={Discover} />
            <b className="discover-innovate">Smart Experiment Planning</b>
            <p className="the-ai-engine">
              The AI engine takes into account the factors, levels, and
              responses you've identified for your experiment, and generates an
              optimized DOE matrix that captures all interactions in the least
              number of runs.
            </p>
            <div className="discover-innovate">Real-Time Analysis</div>
            <div className="the-ai-engine">
              As your experiments progress, the AI engine in Testrunz analyzes
              results in real-time, identifying significant factors and their
              interactions quickly and accurately.
            </div>
            <div className="discover-innovate">Predictive Insights</div>
            <div className="the-ai-engine">
              The AI engine takes into account the factors, levels, and
              responses you've identified for your experiment, and generates an
              optimized DOE matrix that captures all interactions in the least
              number of runs.
            </div>
            <div className="discover-innovate">Smart Experiment Planning</div>
            <div className="the-ai-engine">
              Learning from each experiment, the AI engine continually refines
              your DOE matrix, promoting an iterative learning process that
              supports faster, more effective innovation.
            </div>
          </div>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="frame-parent24">
            <h4 className="sub-title">
              Verify-Comply: Streamline Compliance with AI and Testrunz
            </h4>
            <p className="revolutionize-your-product">
              The next crucial phase in your product journey is verification and
              compliance. Regulatory requirements are often complex and
              multi-faceted, and meeting these requirements is mandatory to
              ensure market access. At Twinmo, we've combined the power of
              artificial intelligence with the capabilities of Testrunz to
              simplify and streamline this process for you.
            </p>
            <p className="revolutionize-your-product">
              Utilizing AI, Testrunz can automatically generate a comprehensive
              test plan based on your product specifications and regulatory
              requirements of your target markets. This eliminates the
              time-consuming task of manually translating regulations into
              testable parameters and ensures all necessary tests are planned
              and executed. Here's how Testrunz supports you during the
              Verify-Comply phase:
            </p>
            <img className="frame-child14" alt="" src={Verify} />
            <b className="discover-innovate">Automated Test Plan Generation</b>
            <p className="the-ai-engine">
              Our AI engine reviews your product specifications and pairs them
              with relevant regulatory requirements, creating a detailed and
              comprehensive test plan. This ensures that no compliance aspect is
              overlooked.
            </p>
            <b className="discover-innovate">Compliance Tracking</b>
            <p className="the-ai-engine">
              Testrunz helps you track the progress of your compliance tests,
              providing real-time updates and detailed insights. It creates a
              clear visual path to see how close you are to achieving full
              compliance.
            </p>
            <b className="discover-innovate">Regulation Updates</b>
            <p className="the-ai-engine">
              As regulations change, Testrunz's AI engine keeps up, updating
              your test plan to reflect new or altered requirements. This
              ensures your product stays compliant even as market regulations
              evolve.
            </p>
            <b className="discover-innovate">Regulation-Specific Templates</b>
            <p className="the-ai-engine">
              Testrunz has a library of predefined templates for various
              regulatory standards, such as IS 4250 for mixer grinders, saving
              you the time of creating test protocols from scratch.
            </p>
          </div>
        </div>
        {/* Show content for responsive Titles */}
        <div className={toggle === 3 ? "show-content" : "content"}>
          <div className="frame-parent24">
            <h4 className="sub-title">
              Manufacture/Quality Control: Elevate Standards with Testrunz
            </h4>
            <p className="revolutionize-your-product">
              Manufacturing and quality control form the bedrock of your
              product's reputation in the market. It's here that the
              consistency, reliability, and integrity of your product are truly
              tested. With Testrunz, you can enhance these critical phases to
              meet and exceed industry standards.
            </p>
            <p className="revolutionize-your-product">
              Testrunz equips you with data-driven tools that can:
            </p>

            <img className="frame-child14" alt="" src={Quality} />

            <b className="discover-innovate">Monitor Manufacturing Process</b>
            <p className="the-ai-engine">
              Track the manufacturing process in real-time with Testrunz, and
              ensure that every product leaving the line meets the defined
              standards.
            </p>

            <b className="discover-innovate">Automated Quality Control</b>
            <p className="the-ai-engine">
              Use Testrunz to automate routine quality checks, allowing for
              greater consistency and significantly reducing the likelihood of
              human error.
            </p>

            <b className="discover-innovate">Analyze and Improve</b>
            <p className="the-ai-engine">
              Our platform’s advanced analysis tools enable you to identify
              patterns, anomalies, or areas of improvement in your manufacturing
              process.
            </p>

            <b className="discover-innovate">Smart Experiment Planning </b>
            <p className="the-ai-engine">
              The AI engine takes into account the factors, levels, and
              responses you've identified for your experiment, and generates an
              optimized DOE matrix that captures all interactions in the least
              number of runs.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UseCases;

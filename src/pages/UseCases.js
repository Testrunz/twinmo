import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import {Helmet} from "react-helmet-async"
import "./UseCases.css";
import { useState } from "react";

const UseCases = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  const navigate = useNavigate();

  const onClickHome = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  const onClickPlatform = () => {
    window.scrollTo(0, 0);
    navigate("/platforms");
  };

  const onClickIndustries = () => {
    window.scrollTo(0, 0);
    navigate("/industries");
  };

  const onClickUsecase = () => {
    window.scrollTo(0, 0);
    navigate("/use-cases");
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

  return (
    <div className="use-cases3">
      <Helmet>
        <title>Accelerate Innovation with Testrunz | Twinmo Use Cases</title>
        <meta name="keywords" content="Smart Experiment Planning" />
        <meta
          name="description"
          content="Discover how Testrunz can transform your product development process. Learn about our smart experiment planning, real-time analysis, and predictive insights."
        />
        <link rel="canonical" href="/use-cases" />
      </Helmet>
      <div className="vector-parent1">
        <img className="frame-child10" alt="" src="/rectangle-33.svg" />
        <img className="frame-child10" alt="" src="/rectangle-34.svg" />
        <div className="frame-parent22">
          <div className="revolutionize-your-product-tes-parent">
            <div className="revolutionize-your-product-container">
              <h1 className="revolutionize-your-products">
                Revolutionize your Product Testing with Twinmo's Innovative
                All-in-One Solution, Testrunz
              </h1>
            </div>
            <p className="twinmos-testrunz-brings">
              Twinmo's Testrunz brings the power of AI and structured
              experimentation to product development, transforming the processes
              of discovery, compliance testing, and manufacturing. It employs AI
              to accelerate idea generation, automate regulatory compliance, and
              predict quality control issues. With its data-driven approach,
              Testrunz ensures a seamless and efficient transition between
              product development stages, resulting in rapid time-to-market and
              superior product quality. Experience the future of product
              development with Twinmo's Testrunz.
            </p>
            {/* <div className="button-type-210">
              <div className="discover-innovate">Get Started</div>
            </div> */}
          </div>
          <img className="frame-child123" alt="" src="/group-183@2x.png" />
        </div>
      </div>
      <div className="group-div">
        <h4 className="experiment-to">
          Experiment to{" "}
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
            <div className="discover-innovate-wrapper">
              <div
                className={
                  toggle === 1
                    ? "discover-innovate active"
                    : "discover-innovate"
                }
                onClick={() => updateToggle(1)}
              >
                Discover/Innovate
              </div>
            </div>
            <div className="verify-comply-wrapper">
              <div
                className={
                  toggle === 2
                    ? "discover-innovate active"
                    : "discover-innovate"
                }
                onClick={() => updateToggle(2)}
              >
                Verify/Comply
              </div>
            </div>
            <div className="verify-comply-wrapper">
              <div
                className={
                  toggle === 3
                    ? "discover-innovate active"
                    : "discover-innovate"
                }
                onClick={() => updateToggle(3)}
              >
                Manufacture/QC
              </div>
            </div>
          </div>
          <div className={toggle === 1 ? "show-content" : "content"}>
            <div className="frame-child13" />
            <div className="frame-parent24">
              <div className="discover-innovate-accelerate-parent">
                <div className="discover-innovate-accelerate">
                  Discover/Innovate: Accelerate Innovation with DOE and AI
                </div>
                <div className="when-it-comes-container">
                  <p className="revolutionize-your-product">
                    When it comes to innovation, speed is of the essence. You
                    need to test quickly, learn rapidly, and iterate promptly.
                    At Twinmo, we understand this need for speed. That's why
                    Testrunz is not just designed to support Design of
                    Experiments (DOE), but also leverages the power of modern
                    artificial intelligence to streamline and optimize your
                    discovery and innovation cycle.
                  </p>
                  <p className="revolutionize-your-product">
                    AI enables us to generate the most effective DOE matrix to
                    facilitate faster learning. The intelligence inherent in our
                    software helps in the efficient design of experiments,
                    helping you understand how different factors interact to
                    affect outcomes. This helps reduce the number of tests
                    required and consequently shrinks the time taken in the
                    discovery and innovation phase.
                  </p>
                  <p className="revolutionize-your-product">
                    How does it work?
                  </p>
                </div>
              </div>
              <img className="frame-child14" alt="" src="/Discover04.png" />
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Smart Experiment Planning{" "}
                </div>
                <div className="the-ai-engine">
                  The AI engine takes into account the factors, levels, and
                  responses you've identified for your experiment, and generates
                  an optimized DOE matrix that captures all interactions in the
                  least number of runs.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">Real-Time Analysis</div>
                <div className="the-ai-engine">
                  As your experiments progress, the AI engine in Testrunz
                  analyzes results in real-time, identifying significant factors
                  and their interactions quickly and accurately.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">Predictive Insights</div>
                <div className="the-ai-engine">
                  The AI engine takes into account the factors, levels, and
                  responses you've identified for your experiment, and generates
                  an optimized DOE matrix that captures all interactions in the
                  least number of runs.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Smart Experiment Planning
                </div>
                <div className="the-ai-engine">
                  Learning from each experiment, the AI engine continually
                  refines your DOE matrix, promoting an iterative learning
                  process that supports faster, more effective innovation.
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="frame-child13" />
            <div className="frame-parent24">
              <div className="discover-innovate-accelerate-parent">
                <div className="discover-innovate-accelerate">
                  Verify-Comply: Streamline Compliance with AI and Testrunz
                </div>
                <div className="when-it-comes-container">
                  <p className="revolutionize-your-product">
                    The next crucial phase in your product journey is
                    verification and compliance. Regulatory requirements are
                    often complex and multi-faceted, and meeting these
                    requirements is mandatory to ensure market access. At
                    Twinmo, we've combined the power of artificial intelligence
                    with the capabilities of Testrunz to simplify and streamline
                    this process for you.
                  </p>
                  <p className="revolutionize-your-product">
                    Utilizing AI, Testrunz can automatically generate a
                    comprehensive test plan based on your product specifications
                    and regulatory requirements of your target markets. This
                    eliminates the time-consuming task of manually translating
                    regulations into testable parameters and ensures all
                    necessary tests are planned and executed. Here's how
                    Testrunz supports you during the Verify-Comply phase:
                  </p>
                </div>
              </div>
              <img className="frame-child14" alt="" src="/graph02.png" />
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Automated Test Plan Generation
                </div>
                <div className="the-ai-engine">
                  Our AI engine reviews your product specifications and pairs
                  them with relevant regulatory requirements, creating a
                  detailed and comprehensive test plan. This ensures that no
                  compliance aspect is overlooked.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">Compliance Tracking</div>
                <div className="the-ai-engine">
                  Testrunz helps you track the progress of your compliance
                  tests, providing real-time updates and detailed insights. It
                  creates a clear visual path to see how close you are to
                  achieving full compliance.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">Regulation Updates</div>
                <div className="the-ai-engine">
                  As regulations change, Testrunz's AI engine keeps up, updating
                  your test plan to reflect new or altered requirements. This
                  ensures your product stays compliant even as market
                  regulations evolve.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Regulation-Specific Templates
                </div>
                <div className="the-ai-engine">
                  Testrunz has a library of predefined templates for various
                  regulatory standards, such as IS 4250 for mixer grinders,
                  saving you the time of creating test protocols from scratch.
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 3 ? "show-content" : "content"}>
            <div className="frame-child13" />
            <div className="frame-parent24">
              <div className="discover-innovate-accelerate-parent">
                <div className="discover-innovate-accelerate">
                  Manufacture/Quality Control: Elevate Standards with Testrunz
                </div>
                <div className="when-it-comes-container">
                  <p className="revolutionize-your-product">
                    Manufacturing and quality control form the bedrock of your
                    product's reputation in the market. It's here that the
                    consistency, reliability, and integrity of your product are
                    truly tested. With Testrunz, you can enhance these critical
                    phases to meet and exceed industry standards.
                  </p>
                  <p className="revolutionize-your-product">
                    Testrunz equips you with data-driven tools that can:
                  </p>
                </div>
              </div>
              <img className="frame-child14" alt="" src="/Quality01.png" />
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Monitor Manufacturing Process
                </div>
                <div className="the-ai-engine">
                  Track the manufacturing process in real-time with Testrunz,
                  and ensure that every product leaving the line meets the
                  defined standards.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Automated Quality Control
                </div>
                <div className="the-ai-engine">
                  Use Testrunz to automate routine quality checks, allowing for
                  greater consistency and significantly reducing the likelihood
                  of human error.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">Analyze and Improve</div>
                <div className="the-ai-engine">
                  Our platform’s advanced analysis tools enable you to identify
                  patterns, anomalies, or areas of improvement in your
                  manufacturing process.
                </div>
              </div>
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">
                  Smart Experiment Planning{" "}
                </div>
                <div className="the-ai-engine">
                  The AI engine takes into account the factors, levels, and
                  responses you've identified for your experiment, and generates
                  an optimized DOE matrix that captures all interactions in the
                  least number of runs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header3">
        <div className="header-child1" />
        <div className="image-9-parent1">
          <img
            className="image-9-icon6"
            style={{ cursor: "pointer" }}
            alt=""
            src="/image-9@2x.png"
            onClick={onClickHome}
          />
          <div className="button-hover-line-parent1">
            <div className="button-hover-line15">
              <div
                className="button27"
                onClick={onClickPlatform}
                style={{ cursor: "pointer" }}
              >
                Platforms
              </div>
            </div>
            <div className="button-hover-line15">
              <div
                className="header-options"
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Use Cases
                <div
                  className="header-option"
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
            <div className="button-hover-line15">
              <div
                className="button27"
                onClick={onClickIndustries}
                style={{ cursor: "pointer" }}
              >
                Industries
              </div>
            </div>
            <div className="button-hover-line15">
              <div
                className="button27"
                onClick={onClickService}
                style={{ cursor: "pointer" }}
              >{`Service `}</div>
            </div>
            <div className="button-hover-line15">
              <div
                className="button27"
                onClick={onClickResource}
                style={{ cursor: "pointer" }}
              >
                Resource
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerdefault3">
        <div className="footer3">
          <div className="frame-parent25">
            {/* <div className="twinmo-wrapper1">
              <b className="button27">Twinmo</b>
            </div> */}
            <div className="frame-parent26">
              <div className="home-wrapper1" onClick={onClickHome}>
                <div className="button27">Home</div>
              </div>
              <div className="home-wrapper1" onClick={onClickPlatform}>
                <div className="button27">Platforms</div>
              </div>
              <div className="home-wrapper1" onClick={onClickUsecase}>
                <div className="button27">Use Cases</div>
              </div>
              <div className="home-wrapper1" onClick={onClickIndustries}>
                <div className="button27">Industries</div>
              </div>
              <div className="home-wrapper1" onClick={onClickService}>
                <div className="button27">Services</div>
              </div>
              <div className="home-wrapper1" onClick={onClickResource}>
                <div className="button27">Resource</div>
              </div>
            </div>
          </div>
          <div className="frame-parent27">
            {/* <div className="contact-wrapper1">
              <b className="button27">Contact</b>
            </div> */}
            <div className="twinmo-wrapper1">
              <div className="button27">Contact us</div>
            </div>
            {/* <div className="twinmo-container">
              <div className="twinmo-ay-1101">
                No. 21, 1st Main Road, Ambal Nagar, Pondicherry 605009
              </div>
            </div> */}
          </div>
          <div className="image-19-parent1">
            <img className="image-19-icon3" alt="" src="/image-19@2x.png" />
            <img className="image-17-icon3" alt="" src="/image-17@2x.png" />
            <img className="image-18-icon3" alt="" src="/image-18@2x.png" />
            <img className="image-20-icon3" alt="" src="/image-20@2x.png" />
          </div>
          <div className="line-div" />
          <img className="image-9-icon7" alt="" src="/image-91@2x.png" />
          <div className="twinmo-inc-all3">
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className="privacy-policy-parent1">
          <div
            className="privacy-policy3"
            onClick={onPrivacyPolicyClick}
          >{`Privacy Policy | `}</div>
          <div className="terms-of-service3">{`Terms of Service | `}</div>
          <div className="cookie-policy3" onClick={onCookiePolicyTextClick}>
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;

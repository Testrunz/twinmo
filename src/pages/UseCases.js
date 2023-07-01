import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UseCases.css";
const UseCases = () => {
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onClickPlatform = () => {
    navigate("/platforms");
  };

  const onClickIndustries = () => {
    navigate("/industries");
  };

  const onClickService = () => {
    navigate("/services");
  };

  const onClickResource = () => {
    navigate("/resource");
  };
  const onPrivacyPolicyClick = useCallback(() => {
    // Please sync "Privacy and policy" to the project
  }, []);

  const onCookiePolicyTextClick = useCallback(() => {
    // Please sync "Cookie Policy" to the project
  }, []);

  return (
    <div className="use-cases3">
      <div className="vector-parent1">
        <img className="frame-child10" alt="" src="/rectangle-33.svg" />
        <img className="frame-child10" alt="" src="/rectangle-34.svg" />
        <div className="frame-parent22">
          <div className="revolutionize-your-product-tes-parent">
            <div className="revolutionize-your-product-container">
              <p className="revolutionize-your-product">
                Revolutionize your Product Testing with Twinmo's Innovative
                All-in-One Solution, Testrunz
              </p>
            </div>
            <div className="twinmos-testrunz-brings">
              Twinmo's Testrunz brings the power of AI and structured
              experimentation to product development, transforming the processes
              of discovery, compliance testing, and manufacturing. It employs AI
              to accelerate idea generation, automate regulatory compliance, and
              predict quality control issues. With its data-driven approach,
              Testrunz ensures a seamless and efficient transition between
              product development stages, resulting in rapid time-to-market and
              superior product quality. Experience the future of product
              development with Twinmo's Testrunz.
            </div>
            <div className="button-type-210">
              <div className="discover-innovate">Get Started</div>
            </div>
          </div>
          <img className="frame-child12" alt="" src="/group-183@2x.png" />
        </div>
      </div>
      <div className="group-div">
        <div className="experiment-to-parent">
          <div className="experiment-to">Experiment to</div>
          <div className="auto-typing">
            <div className="component-7">
              <div className="mask-group">
                <div className="learn">learn</div>
              </div>
              <div className="component-7-child" />
            </div>
          </div>
        </div>
        <div className="component-9">
          <div className="frame-parent23">
            <div className="discover-innovate-wrapper">
              <div className="discover-innovate">Discover /Innovate</div>
            </div>
            <div className="verify-comply-wrapper">
              <div className="discover-innovate">Verify-Comply</div>
            </div>
            <div className="verify-comply-wrapper">
              <div className="discover-innovate">Manufacture/QC</div>
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child13" />
            <div className="frame-parent24">
              <div className="discover-innovate-accelerate-parent">
                <div className="discover-innovate-accelerate">
                  Discover-Innovate: Accelerate Innovation with DOE and AI
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
              <img className="frame-child14" alt="" src="/group-24.svg" />
              <div className="smart-experiment-planning-parent">
                <div className="discover-innovate">{`Smart Experiment Planning `}</div>
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
                <div className="discover-innovate">{`Smart Experiment Planning `}</div>
                <div className="the-ai-engine">
                  Learning from each experiment, the AI engine continually
                  refines your DOE matrix, promoting an iterative learning
                  process that supports faster, more effective innovation.
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
              <div className="button27" style={{ cursor: "pointer" }}>
                Use Cases
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
            <div className="twinmo-wrapper1">
              <b className="button27">Twinmo</b>
            </div>
            <div className="frame-parent26">
              <div className="home-wrapper1" onClick={onClickHome}>
                <div className="button27">Home</div>
              </div>
              <div className="home-wrapper1" onClick={onClickPlatform}>
                <div className="button27">Platforms</div>
              </div>
              <div className="home-wrapper1">
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
            <div className="contact-wrapper1">
              <b className="button27">Contact</b>
            </div>
            <div className="twinmo-wrapper1">
              <div className="button27">Contact us</div>
            </div>
            <div className="twinmo-wrapper1">
              <div className="twinmo-ay-1103">
                Twinmo ,ay 110 Plaza WestSan Jose, CA 95128 USA
              </div>
            </div>
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

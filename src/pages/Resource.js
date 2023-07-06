import { useNavigate } from "react-router-dom";
import "./Resource.css";
const Resource = () => {
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
      <div className="vector-parent">
        <img className="frame-child" alt="" src="/rectangle-33.svg" />
        <img className="frame-child" alt="" src="/rectangle-34.svg" />
        <div className="frame-parent">
          <div className="experimentation-and-beyond-tw-parent">
            <div className="experimentation-and-beyond">
              Experimentation and Beyond: Twinmo's Resource Collection for
              Next-Level Product Development
            </div>
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
            <div className="button-type-2">
              <div className="button">Get Started</div>
            </div>
          </div>
          <img className="frame-inner" alt="" src="/group-18@2x.png" />
        </div>
      </div>
      <div className="header">
        <div className="header-child" />
        <div className="image-9-parent">
          <img
            className="image-9-icon"
            alt=""
            src="/image-9@2x.png"
            onClick={onClickHome}
          />
          <div className="button-hover-line-parent">
            <div className="button-hover-line">
              <div
                className="twinmo"
                onClick={onClickPlatform}
                style={{ cursor: "pointer" }}
              >
                Platforms
              </div>
            </div>
            <div className="button-hover-line">
              <div
                className="twinmo"
                onClick={onClickUsecase}
                style={{ cursor: "pointer" }}
              >
                Use Cases
              </div>
            </div>
            <div className="button-hover-line">
              <div
                className="twinmo"
                onClick={onClickIndustries}
                style={{ cursor: "pointer" }}
              >
                Industries
              </div>
            </div>
            <div className="button-hover-line">
              <div
                className="twinmo"
                onClick={onClickServices}
                style={{ cursor: "pointer" }}
              >
                Service
              </div>
            </div>
            <div className="button-hover-line">
              <div
                className="digital-experimentation"
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
            </div>
          </div>
        </div>
      </div>
      <div className="frame-group">
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="group-parent">
            <div className="testrunz-provides-a-single-pla-parent">
              <div className="testrunz-provides-a">
                Testrunz provides a single platform to track, analyze, and
                report experiments throughout all phases of product development
                - discovery, compliance testing, and manufacturing testing.
              </div>
              <div className="unified-experimentation-platfo">
                Unified Experimentation Platform
              </div>
            </div>
            <div className="button-type-21">
              <div className="button">Get Started</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="group-container">
            <div className="testrunz-leverages-real-actio-parent">
              <div className="testrunz-leverages-real">
                Testrunz leverages real, actionable data for all your
                experimentation needs, enabling you to perform precise and
                efficient tests leading to informed decision-making.
              </div>
              <div className="data-driven-experimentation">
                Data-Driven Experimentation
              </div>
            </div>
            <div className="button-type-21">
              <div className="button">Get Started</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="group-container">
            <div className="testrunz-leverages-real-actio-parent">
              <div className="testrunz-leverages-real">
                Using AI technology to generate efficient Design of Experiments
                (DOE), Testrunz accelerates your innovation and discovery
                cycles, aiding you in bringing products to market faster.
              </div>
              <div className="data-driven-experimentation">
                Accelerated Innovation
              </div>
            </div>
            <div className="button-type-21">
              <div className="button">Get Started</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerdefault">
        <div className="footer">
          <div className="frame-container">
            <div className="twinmo-wrapper">
              <b className="twinmo">Twinmo</b>
            </div>
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
              <div className="home-wrapper" onClick={ onClickResource }>
                <div className="twinmo">Resource</div>
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="contact-wrapper">
              <b className="twinmo">Contact</b>
            </div>
            <div className="twinmo-wrapper">
              <div className="twinmo">Contact us</div>
            </div>
            {/* <div className="twinmo-wrapper">
              <div className="twinmo-ay-110">
                Twinmo ,ay 110 Plaza WestSan Jose, CA 95128 USA
              </div>
            </div> */}
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
      <b className="methods-and-tools">
        Methods and Tools for Experimentation and Analysis
      </b>
      <b className="some-captions">Some Captions</b>
    </div>
  );
};

export default Resource;

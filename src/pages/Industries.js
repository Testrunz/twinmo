import { useNavigate } from "react-router-dom";
import "./Industries.css";
const Industries = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const onClickPlatform = () => {
    navigate("/platforms");
  };

  const onClickUsecase = () => {
    navigate("/use-cases");
  };

  const onClickServices = () => {
    navigate("/services");
  };

  const onClickResource = () => {
    navigate("/resource");
  };
  const onPrivacyPolicyClick = () => {
    navigate("/privacy-policy");
  };

  const onCookiePolicyTextClick = () => {
    navigate("/cookie-policy");
  };

  return (
    <div className="industries2">
      <div className="vector-container">
        <img className="frame-child4" alt="" src="/rectangle-33.svg" />
        <img className="frame-child4" alt="" src="/rectangle-34.svg" />
        <div className="frame-parent14">
          <div className="bringing-the-power-of-experime-parent">
            <div className="bringing-the-power">
              Bringing the Power of Experimentation to All Industries
            </div>
            <div className="whether-youre-creating">
              Whether you're creating kitchen appliances, personal care
              appliances, or home furniture, Twinmo is here to ensure your
              product innovation, testing, and quality control processes are
              efficient, accurate, and compliant.
            </div>
            <div className="button-type-25">
              <div className="button16">Get Started</div>
            </div>
          </div>
          <img className="frame-child6" alt="" src="/group-182@2x.png" />
        </div>
      </div>
      <div className="industries-frame">
        <div className="industries3">Industries</div>
      </div>
      <div className="frame-parent15">
        <img className="frame-icon" alt="" src="/frame-137.svg" />
        <div className="personal-care-appliances-parent">
          <b className="personal-care-appliances">Personal care appliances</b>
          <div className="testrunz-helps-prepare">
            Testrunz helps prepare the scientists of tomorrow by enabling users
            to carry out their laboratory experiments using predefined test
            procedures and experiment libraries, thereby allowing them to gain
            practical experience and industry exposure.
          </div>
          <div className="button-type-25">
            <div className="button16">Get Started</div>
          </div>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="personal-care-appliances-parent">
          <b className="personal-care-appliances">Kitchen appliances</b>
          <div className="testrunz-helps-prepare">
            Testrunz helps prepare the scientists of tomorrow by enabling users
            to carry out their laboratory experiments using predefined test
            procedures and experiment libraries, thereby allowing them to gain
            practical experience and industry exposure.
          </div>
          <div className="button-type-25">
            <div className="button16">Get Started</div>
          </div>
        </div>
        <img className="frame-icon" alt="" src="/frame-138.svg" />
      </div>
      <div className="frame-parent17">
        <img className="frame-icon" alt="" src="/frame-139.svg" />
        <div className="personal-care-appliances-parent">
          <b className="personal-care-appliances">Home furnitures</b>
          <div className="testrunz-helps-prepare">
            Testrunz helps prepare the scientists of tomorrow by enabling users
            to carry out their laboratory experiments using predefined test
            procedures and experiment libraries, thereby allowing them to gain
            practical experience and industry exposure.
          </div>
          <div className="button-type-25">
            <div className="button16">Get Started</div>
          </div>
        </div>
      </div>
      <div className="frame-parent18">
        <div className="personal-care-appliances-parent">
          <b className="personal-care-appliances">{`Research & Education`}</b>
          <div className="testrunz-helps-prepare">
            Testrunz helps prepare the scientists of tomorrow by enabling users
            to carry out their laboratory experiments using predefined test
            procedures and experiment libraries, thereby allowing them to gain
            practical experience and industry exposure.
          </div>
          <div className="button-type-25">
            <div className="button16">Get Started</div>
          </div>
        </div>
        <img className="frame-icon" alt="" src="/frame-140.svg" />
      </div>
      <div className="footerdefault2">
        <div className="footer2">
          <div className="frame-parent19">
            <div className="twinmo-frame">
              <b className="twinmo2">Twinmo</b>
            </div>
            <div className="frame-parent20">
              <div className="home-frame" onClick={onClickHome}>
                <div className="twinmo2">Home</div>
              </div>
              <div className="home-frame" onClick={onClickPlatform}>
                <div className="twinmo2">Platforms</div>
              </div>
              <div className="home-frame" onClick={onClickUsecase}>
                <div className="twinmo2">Use Cases</div>
              </div>
              <div className="home-frame">
                <div className="twinmo2">Industries</div>
              </div>
              <div className="home-frame" onClick={onClickServices}>
                <div className="twinmo2">Services</div>
              </div>
              <div className="home-frame" onClick={onClickResource}>
                <div className="twinmo2">Resource</div>
              </div>
            </div>
          </div>
          <div className="frame-parent21">
            <div className="contact-frame">
              <b className="twinmo2">Contact</b>
            </div>
            <div className="twinmo-frame">
              <div className="twinmo2">Contact us</div>
            </div>
            <div className="twinmo-frame">
              <div className="twinmo-ay-1102">
                Twinmo ,ay 110 Plaza WestSan Jose, CA 95128 USA
              </div>
            </div>
          </div>
          <div className="image-19-container">
            <img className="image-19-icon2" alt="" src="/image-19@2x.png" />
            <img className="image-17-icon2" alt="" src="/image-17@2x.png" />
            <img className="image-18-icon2" alt="" src="/image-18@2x.png" />
            <img className="image-20-icon2" alt="" src="/image-20@2x.png" />
          </div>
          <div className="footer-inner" />
          <img className="image-9-icon4" alt="" src="/image-91@2x.png" />
          <div className="twinmo-inc-all2">
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className="privacy-policy-container">
          <div
            className="privacy-policy2"
            onClick={onPrivacyPolicyClick}
          >Privacy Policy | </div>
          <div className="terms-of-service2">Terms of Service |</div>
          <div className="cookie-policy2" onClick={onCookiePolicyTextClick}>
            Cookie Policy
          </div>
        </div>
      </div>
      <div className="header2">
        <div className="header-inner" />
        <div className="image-9-container">
          <img
            className="image-9-icon5"
            alt=""
            src="/image-9@2x.png"
            onClick={onClickHome}
          />
          <div className="button-hover-line-container">
            <div className="button-hover-line10">
              <div
                className="twinmo2"
                onClick={onClickPlatform}
                style={{ cursor: "pointer" }}
              >
                Platforms
              </div>
            </div>
            <div className="button-hover-line10">
              <div
                className="twinmo2"
                onClick={onClickUsecase}
                style={{ cursor: "pointer" }}
              >
                Use Cases
              </div>
            </div>
            <div className="button-hover-line10">
            <div
                className="digital-experimentation"
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Industries
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
            <div className="button-hover-line10">
              <div
                className="twinmo2"
                onClick={onClickServices}
                style={{ cursor: "pointer" }}
              >{`Service `}</div>
            </div>
            <div className="button-hover-line10">
              <div
                className="twinmo2"
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

export default Industries;

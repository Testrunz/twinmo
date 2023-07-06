import { useNavigate } from "react-router-dom";
import styles from "./Cookie.module.css";
const CookiePolicy = () => {
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
    <div className={styles.cookiePolicy}>
      <div className={styles.headerNew}>
        <img
          className={styles.image12Icon}
          alt=""
          src="/image-12@2x.png"
          onClick={onClickHome}
        />
        <div className={styles.buttonHoverLineParent}>
          <div className={styles.buttonHoverLine}>
            <div className={styles.button} onClick={onClickPlatform}>
              Platforms
            </div>
          </div>
          <div className={styles.buttonHoverLine}>
            <div className={styles.button} onClick={onClickUsecase}>
              Use Cases
            </div>
          </div>
          <div className={styles.buttonHoverLine}>
            <div
              className={styles.button}
              onClick={onClickServices}
            >Service</div>
          </div>
          <div className={styles.buttonHoverLine}>
            <div className={styles.button} onClick={onClickResource}>
              Resource
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerdefault}>
        <div className={styles.footer}>
          <div className={styles.frameParent}>
            <div className={styles.twinmoWrapper}>
              <b className={styles.button}>Twinmo</b>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.homeWrapper} onClick={onClickHome}>
                <div className={styles.button}>Home</div>
              </div>
              <div className={styles.homeWrapper} onClick={onClickPlatform}>
                <div className={styles.button}>Platforms</div>
              </div>
              <div className={styles.homeWrapper} onClick={onClickUsecase}>
                <div className={styles.button}>Use Cases</div>
              </div>
              <div className={styles.homeWrapper} onClick={onClickIndustries}>
                <div className={styles.button}>Industries</div>
              </div>
              <div className={styles.homeWrapper} onClick={onClickServices}>
                <div className={styles.button}>Services</div>
              </div>
              <div className={styles.homeWrapper} onClick={onClickResource}>
                <div className={styles.button}>Resource</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.contactWrapper}>
              <b className={styles.button}>Contact</b>
            </div>
            <div className={styles.twinmoWrapper}>
              <div className={styles.button}>Contact us</div>
            </div>
            {/* <div className={styles.twinmoWrapper}>
              <div className={styles.twinmoAy110}>
                Twinmo ,ay 110 Plaza WestSan Jose, CA 95128 USA
              </div>
            </div> */}
          </div>
          <div className={styles.image19Parent}>
            <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
            <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
          </div>
          <div className={styles.footerChild} />
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <div className={styles.twinmoIncAll}>
            © 2023 Twinmo, Inc. All rights reserved
          </div>
        </div>
        <div className={styles.privacyPolicyParent}>
          <div className={styles.privacyPolicy} onClick={onPrivacyPolicyClick}>
            Privacy Policy |
          </div>
          <div className={styles.termsOfService}>Terms of Service |</div>
          <div
            className={styles.cookiePolicy1}
            onClick={onCookiePolicyTextClick}
          >
            Cookie Policy
          </div>
        </div>
      </div>
      <div className={styles.cookiePolicyParent}>
        <div className={styles.cookiePolicy2}>Cookie Policy</div>
        <div className={styles.weUseCookies}>
          We use cookies and other technologies to make our website work, help
          us improve services and the user experience or to advertise. In
          visiting our site, you consent to the use of these cookies and other
          technologies.
        </div>
        <div className={styles.ourWebsiteUsesTheseKindsOParent}>
          <div className={styles.ourWebsiteUses}>
            Our website uses these kinds of cookies:
          </div>
          <div className={styles.theseCookiesAre}>
            These cookies are used to retain information for the duration of
            your visit, for example if you’re completing more than one form you
            only need to provide your information once.
          </div>
        </div>
        <div className={styles.twinmoAiTrackingCookieParent}>
          <div className={styles.ourWebsiteUses}>
            Twinmo AI tracking cookie:
          </div>
          <div className={styles.theseCookiesAre}>
            These cookies are used to recognize repeat visitors to the site and
            record specific browsing information (e.g. how you arrive, pages you
            view, options you select, information you enter and paths you take).
          </div>
        </div>
        <div className={styles.googleAnalyticsCookiesParent}>
          <div className={styles.ourWebsiteUses}>Google Analytics Cookies:</div>
          <div className={styles.twinmoUsesGoogleContainer}>
            {`Twinmo uses Google Analytics cookies to store information, such as what time a visit occurred, whether the visitor has been to the site before, and what site referred the visitor to the web page. The cookies report website trends. They do not identify individual visitors. A different set of cookies is used for each website, and visitors are not tracked across multiple sites. In addition to disabling cookies users can also install the Google Analytics Opt-out Add-on, which prevents Google Analytics from collecting information about website visits. To find out more visit `}
            <a
              className={styles.httpswwwgooglecomanalyti}
              href="https://www.google.com/analytics/learn/privacy.html"
              target="_blank"
            >
              <span className={styles.httpswwwgooglecomanalyti1}>
                https://www.google.com/analytics/learn/privacy.html
              </span>
            </a>
          </div>
        </div>
        <div className={styles.linkedinParent}>
          <div className={styles.ourWebsiteUses}>LinkedIn:</div>
          <div className={styles.twinmoUsesGoogleContainer}>
            {`Twinmo uses LinkedIn tags to monitor website behavior to collect and use information for online advertising, please visit: `}
            <a
              className={styles.httpswwwgooglecomanalyti}
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
            >
              <span className={styles.httpswwwgooglecomanalyti1}>
                https://www.linkedin.com/legal/privacy-policy
              </span>
            </a>{" "}
            if you are a LinkedIn member and wish to opt out of this tracking,
            you can opt out by login in to your account and going to your
            Privacy settings. This will opt you out from LinkedIn data
            collection and targeting cookies on any computers, mobile devices
            and browsers you use to visit third party sites, provided you have
            logged onto LinkedIn.
          </div>
        </div>
        <div className={styles.toOptOutParent}>
          <div className={styles.ourWebsiteUses}>To opt out:</div>
          <div className={styles.twinmoUsesGoogleContainer}>
            <p className={styles.youCanBlockOrDeleteCookie}>
              {`You can block or delete cookies by changing your browser settings – please refer to your browser’s ‘help’ functionality for advice, or to find out more you can visit `}
              <a
                className={styles.httpswwwgooglecomanalyti}
                href="https://www.allaboutcookies.org/manage-cookies/index.html"
                target="_blank"
              >
                <span className={styles.httpswwwgooglecomanalyti1}>
                  https://www.allaboutcookies.org/manage-cookies/index.html
                </span>
              </a>
              .
            </p>
            <p className={styles.youCanBlockOrDeleteCookie}>
              Please note that should you block all cookies, you may not be able
              to access all areas of our site. If you block our cookie, your use
              of our site during a session should not be adversely affected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

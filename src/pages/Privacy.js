import { useNavigate } from "react-router-dom";
import styles from "./Privacy.module.css";
const PrivacyAndPolicy = () => {
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
    <div className={styles.privacyAndPolicy}>
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
                className={styles.verticallyintegratedsolution}
                onClick={onClickPlatform}
                style={{ cursor: "pointer" }}
              >
                Platforms
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className={styles.verticallyintegratedsolution}
                onClick={onClickUsecase}
                style={{ cursor: "pointer" }}
              >
                Use Cases
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className={styles.verticallyintegratedsolution}
                onClick={onClickIndustries}
                style={{ cursor: "pointer" }}
              >
                Industries
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className={styles.verticallyintegratedsolution}
                onClick={onClickServices}
                style={{ cursor: "pointer" }}
              >
                Service
              </div>
            </div>
            <div className="button-hover-line25">
              <div
                className={styles.verticallyintegratedsolution}
                onClick={onClickResource}
                style={{ cursor: "pointer" }}
              >
                Resource
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerdefault}>
        <div className={styles.footer}>
          <div className={styles.frameParent}>
            <div className={styles.twinmoWrapper}>
              <b className={styles.buttonhead}>Twinmo</b>
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
              <b className={styles.buttonhead}>Contact</b>
            </div>
            <div className={styles.twinmoWrapper}>
              <div className={styles.button}>Contact us</div>
            </div>
            <div className={styles.twinmoWrapper}>
              <div className={styles.twinmoAy110}>
              No. 21, 1st Main Road, Ambal Nagar, Pondicherry 605009
              </div>
            </div>
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
            className={styles.cookiePolicy}
            onClick={onCookiePolicyTextClick}
          >
            Cookie Policy
          </div>
        </div>
      </div>
      <div className={styles.privacyPolicyGroup}>
        <div className={styles.privacyPolicy1}>Privacy policy</div>
        <div className={styles.atTwinmo}>
          At Twinmo , we respect your privacy and are committed to protecting
          the confidentiality of your personal information. Our aim is to be as
          clear and open as possible about what we do and why.
        </div>
        <div className={styles.whyWeCollectYourPersonalDParent}>
          <div className={styles.whyWeCollect}>
            Why we collect your personal data:
          </div>
          <div className={styles.weCollectYour}>
            We collect your personal data for our legitimate interests as a
            business but only if necessary for the purpose we collected it for.
            We will never share your personal information with any third party.
            Your personal data will only be seen and used by the  Twinmo  team.
          </div>
        </div>
        <div className={styles.theDataWeUseParent}>
          <div className={styles.whyWeCollect}>The data we use:</div>
          <div className={styles.weCollectYour}>
            We use a number of different categories of data about you, as part
            of our normal business processes, the categories include:
          </div>
        </div>
        <div className={styles.contactDetailsEmailsContainer}>
          <ul className={styles.contactDetailsEmailsAndRec}>
            <li className={styles.contactDetails}>Contact details</li>
            <li className={styles.contactDetails}>
              Emails and records of verbal conversations
            </li>
            <li className={styles.contactDetails}>
              Twinmo AI website and social media activity
            </li>
            <li className={styles.contactDetails}>
              Employment information (job title, responsibilities, position
              within the organization etc)
            </li>
            <li className={styles.contactDetails}>
              Your status relating to our organization, such as communication
              preferences and records of marketing activity that has been sent
              to you
            </li>
            <li>Information telling us how and where we obtained your data</li>
          </ul>
        </div>
        <div className={styles.weGatherThisDataInAVarieParent}>
          <div className={styles.whyWeCollect}>
            We gather this data in a variety of ways:
          </div>
          <div className={styles.fromFormsOnContainer}>
            <ul className={styles.contactDetailsEmailsAndRec}>
              <li className={styles.contactDetails}>From forms on Twinmo AI</li>
              <li className={styles.contactDetails}>
                From cookies: see our cookie policy
              </li>
              <li className={styles.contactDetails}>From social media</li>
              <li>From verbal and written communications</li>
            </ul>
          </div>
        </div>
        <div className={styles.yourRightsParent}>
          <div className={styles.whyWeCollect}>Your rights:</div>
          <div className={styles.fromFormsOnContainer}>
            <ul className={styles.contactDetailsEmailsAndRec}>
              <li className={styles.contactDetails}>
                The right to access your personal data
              </li>
              <li className={styles.contactDetails}>
                The right of rectification allows you to instruct an
                organization that is processing your personal data, to rectify
                any mistakes
              </li>
              <li className={styles.contactDetails}>
                The right to instruct an organization to erase your personal
                data
              </li>
              <li className={styles.contactDetails}>
                The right to stop the processing of your personal data
              </li>
              <li className={styles.contactDetails}>
                The right to object to the processing of your personal data for
                the purposes of direct marketing
              </li>
              <li>
                The right to object to profiling or automated decision making
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.pleaseContactUsContainer}>
          <p className={styles.pleaseContactUs}>
            Please contact us at hello@twinmo.ai  if you wish to exercise any of
            your rights or if you have any questions about the collection of
            your personal data by Twinmo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;

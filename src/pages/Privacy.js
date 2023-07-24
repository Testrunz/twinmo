// Importing necessary modules and styles
import "./Privacy.css";
import { Helmet } from "react-helmet-async";
import Footer from "../Component/Footer";

// Defining the LandingPage component
const PrivacyAndPolicy = () => {
  return (
    <div className="privacyAndPolicy">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Twinmo - Privacy Policy</title>
        <meta
          name="keyword"
          content="privacy policy, data protection, personal information"
        />
        <meta
          name="description"
          content="Read our privacy policy to understand how we protect your data and handle personal information."
        />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>

      {/* Privacy policy content */}
      <div>
        <h2 className="privacy-title">Privacy Policy</h2>
        <p>
          At Twinmo , we respect your privacy and are committed to protecting
          the confidentiality of your personal information. Our aim is to be as
          clear and open as possible about what we do and why.
        </p><br/>
        <b>Why we collect your personal data:</b>
        <p>
          We collect your personal data for our legitimate interests as a
          business but only if necessary for the purpose we collected it for. We
          will never share your personal information with any third party. Your
          personal data will only be seen and used by the Twinmo team.
        </p><br/>
        <b>The data we use:</b>
        <p>
          We use a number of different categories of data about you, as part of
          our normal business processes, the categories include:
        </p>
        <ul className="list">
          <li>Contact details </li>
          <li>Emails and records of verbal conversations</li>
          <li>Twinmo AI website and social media activity</li>
          <li>
            Employment information (job title, responsibilities, position within
            the organization etc)
          </li>
          <li>
            Your status relating to our organization, such as communication
            preferences and records of marketing activity that has been sent to
            you
          </li>
          <li>Information telling us how and where we obtained your data</li>
        </ul><br/>
        <b>We gather this data in a variety of ways:</b>
        <ul className="list">
          <li >From forms on Twinmo AI</li>
          <li >From cookies: see our cookie policy</li>
          <li >From social media</li>
          <li>From verbal and written communications</li>
        </ul><br/>
        <b>Your rights:</b>
        <ul className="list">
          <li>The right to access your personal data</li>
          <li>
            The right of rectification allows you to instruct an organization
            that is processing your personal data, to rectify any mistakes
          </li>
          <li>
            The right to instruct an organization to erase your personal data
          </li>
          <li>
            The right to instruct an organization to erase your personal data
          </li>
          <li>
            The right to object to the processing of your personal data for the
            purposes of direct marketing
          </li>
          <li>The right to object to profiling or automated decision making</li>
        </ul><br/>
        <p>Please contact us at hello@twinmo.ai  if you wish to exercise any of your rights or if you have any questions about the collection of your personal data by Twinmo.</p>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyAndPolicy;

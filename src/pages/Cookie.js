// Importing necessary modules and styles
import "./Cookie.css";
import { Helmet } from "react-helmet-async";
import Footer from "../Component/Footer";

// Defining the CookiePolicy component
const CookiePolicy = () => {
  return (
    <div className="cookieAndPolicy">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Twinmo - Cookie Policy</title>
        <meta
          name="keyword"
          content="cookie policy, privacy, data collection"
        />
        <meta
          name="description"
          content="Learn about our cookie policy, privacy practices, and data collection procedures."
        />
        <link rel="canonical" href="/cookie-policy" />
      </Helmet>

      {/* Cookie policy content */}
      <div>
        <h2 className="cookie-title">Cookie Policy</h2>
        <p>
          We use cookies and other technologies to make our website work, help
          us improve services and the user experience or to advertise. In
          visiting our site, you consent to the use of these cookies and other
          technologies.
        </p>
        <br/>
        <b>Our website uses these kinds of cookies:</b>
        <p>
          These cookies are used to retain information for the duration of your
          visit, for example if you’re completing more than one form you only
          need to provide your information once.
        </p><br/>
        <b>Twinmo AI tracking cookie:</b>
        <p>
          These cookies are used to recognize repeat visitors to the site and
          record specific browsing information (e.g. how you arrive, pages you
          view, options you select, information you enter and paths you take).
        </p><br/>
        <b>Google Analytics Cookies:</b>
        <p>
          Twinmo uses Google Analytics cookies to store information, such as
          what time a visit occurred, whether the visitor has been to the site
          before, and what site referred the visitor to the web page. The
          cookies report website trends. They do not identify individual
          visitors. A different set of cookies is used for each website, and
          visitors are not tracked across multiple sites. In addition to
          disabling cookies users can also install the Google Analytics Opt-out
          Add-on, which prevents Google Analytics from collecting information
          about website visits. To find out more visit
          https://www.google.com/analytics/learn/privacy.html
        </p><br/>
        <b>LinkedIn:</b>
        <p>
          Twinmo uses LinkedIn tags to monitor website behavior to collect and
          use information for online advertising, please visit:
          https://www.linkedin.com/legal/privacy-policy if you are a LinkedIn
          member and wish to opt out of this tracking, you can opt out by login
          in to your account and going to your Privacy settings. This will opt
          you out from LinkedIn data collection and targeting cookies on any
          computers, mobile devices and browsers you use to visit third party
          sites, provided you have logged onto LinkedIn.
        </p><br/>
        <b>To opt out:</b>
        <p>
          You can block or delete cookies by changing your browser settings –
          please refer to your browser’s ‘help’ functionality for advice, or to
          find out more you can visit
          https://www.allaboutcookies.org/manage-cookies/index.html.
        </p>
        <p>
          Please note that should you block all cookies, you may not be able to
          access all areas of our site. If you block our cookie, your use of our
          site during a session should not be adversely affected.
        </p>
      </div>
      <br/><br/><br/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CookiePolicy;

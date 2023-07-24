// Importing necessary modules and styles
import "./Industries.css";
import { Helmet } from "react-helmet-async";
import Footer from "../Component/Footer";

// Defining the Industries component
const Industries = () => {
  return (
    <div className="industriespage">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Industries Benefiting from Testrunz | Twinmo</title>
        <meta name="keyword" content="Testing for personal care appliances" />
        <meta
          name="description"
          content="From personal care appliances to home furniture quality, see how various industries are leveraging Testrunz for their product testing and development needs."
        />
        <link rel="canonical" href="/industries" />
      </Helmet>
      {/* Industries page content */}
      <div className="row-41">
        <div className="col-41">
          {/* <img className="bg-img" alt="" src="/rectangle-331.svg" />
          <img className="bg-img" alt="" src="/rectangle-341.svg" /> */}
          <h1>Bringing the Power of Experimentation to All Industries </h1>
          <h2>
            Whether you're creating kitchen appliances, personal care
            appliances, or home furniture, Twinmo is here to ensure your product
            innovation, testing, and quality control processes are efficient,
            accurate, and compliant.
          </h2>
        </div>
        <div className="col-42">
          <img className="product41" alt="" src="/group-182@2x.png" />
        </div>
      </div>
      <h3 className="industries-title">Industries</h3>
      <div className="row-42">
        <div className="col-44">
          <img className="product42" alt="" src="/personal.png" />
        </div>
        <div className="col-3">
          <h2>Personal care appliances</h2>
          <h3>
            Our world class testing facility ensures that your personal care
            products are safe, effective, and up to code. We use the latest
            equipment and testing methods to ensure that your products meet all
            applicable international standards.
          </h3>
        </div>
      </div>

      <div className="row-43">
        <div className="col-46">
          <h2>Kitchen appliances</h2>
          <h3>
            Our kitchen appliance testing facility is equipped to test for a
            variety of safety hazards, including electrical safety, heat output,
            mechanical strength tests, environmental testing, and functional
            tests to ensure that your products perform as expected.
          </h3>
        </div>
        <div className="col-45">
          <img className="product43" alt="" src="/kitchen.png" />
        </div>
      </div>

      <div className="row-44">
        <div className="col-48">
          <img className="product44" alt="" src="/furniture.png" />
        </div>
        <div className="col-47">
          <h2>Home furnitures</h2>
          <h3>
            We follow the highest safety and quality testing standards to give
            all your customers peace of mind, knowing that your furniture is
            safe and will last for years to come.
          </h3>
        </div>
      </div>

      <div className="row-45">
        <div className="col-49">
          <h2>Research & Education</h2>
          <h3>
            Testrunz could be used by researchers and students from different
            institutions to collaborate on experiments. This could help to break
            down barriers between different disciplines and to foster new ideas.
            Testrunz has the potential to be a valuable tool for both research
            and education. It could help to make scientific research more
            accessible and to prepare the next generation of scientists.
          </h3>
        </div>
        <div className="col-410">
          <img className="product45" alt="" src="/research.png" />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Industries;

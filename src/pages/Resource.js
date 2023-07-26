// Importing necessary modules and styles
import "./Resource.css";
import { Helmet } from "react-helmet-async";
import Footer from "../Component/Footer";
import ResourceHome from "../Asset/ResourceHome.png";
import ExpQuotes from "../Asset/ExpQuotes.png";
import ThoughtMaps from "../Asset/ThoughtMaps.png";
import System from "../Asset/System.png";
import CaseStudies from "../Asset/CaseStudies.png";
import Process from "../Asset/Process.png";
import Doe from "../Asset/DOE.png";

// Defining the Resource component
const Resource = () => {
  return (
    <div className="resourcepage">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>Resources for Advanced DOE and Systems Thinking | Twinmo</title>
        <meta
          name="keyword"
          content="Resources for advanced DOE and systems thinking"
        />
        <meta
          name="description"
          content="Explore our resources to learn more about advanced DOE and systems thinking. Dive into our case studies, methods, and tools for experimentation and analysis."
        />
        <link rel="canonical" href="/resource" />
      </Helmet>
      {/* Resource page content */}
      {/* Row 1 */}
      <div className="row-61">
        <div className="col-61">
          <h1>
            Experimentation and Beyond: Twinmo's Resource Collection for
            Next-Level Product Development
          </h1>
          <h2>
            Explore our resources to dive deeper into topics such as advanced
            DOE, systems thinking, thought maps, and process maps. Read our case
            studies to discover how other businesses have transformed their
            product development process with Twinmo.
          </h2>
          <h2>
            Transform your product development today. Get faster to market and
            stay ahead of the competition with Twinmo. Contact us now. Your
            success is our mission.
          </h2>
        </div>
        <div className="col-62">
          <img className="product61" alt="" src={ResourceHome} />
        </div>
      </div>
      {/* Row - 2 */}
      <h3 className="title-resource">
        Methods and Tools for Experimentation and Analysis
      </h3>
      <div className="row-62">
        <div className="col-63">
          <div className="huge-iconinterfacebulkshiel-wrapper">
            <img className="product62" alt="" src={ExpQuotes} />
            <h4>Experimentation Quotes </h4>
          </div>
          <div className="huge-iconinterfacebulkshiel-wrapper">
            <img className="product62" alt="" src={Process} />{" "}
            <h4>Systems thinking</h4>
          </div>

          <div className="huge-iconinterfacebulkshiel-wrapper">
            <img className="product62" alt="" src={System} />
            <h4>Process maps</h4>
          </div>
        </div>
        <div className="col-64">
          <div className="huge-iconinterfacebulkshiel-wrapper">
            <img className="product63" alt="" src={ThoughtMaps} />
            <h4>Thought maps - Track the work</h4>
          </div>

          <div className="huge-iconinterfacebulkshiel-wrapper">
            <img className="product63" alt="" src={CaseStudies} />
            <h4>Case studies</h4>
          </div>
          <div className="huge-iconinterfacebulkshiel-wrapper">
            <img className="product63" alt="" src={Doe} />
            <h4>DOE advanced</h4>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Resource;

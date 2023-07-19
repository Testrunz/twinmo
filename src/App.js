// Importing necessary modules from react-router-dom
import { Routes, Route } from "react-router-dom";

// Importing the required page components
import LandingPage from "./pages/LandingPage";
import Resource from "./pages/Resource";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import UseCases from "./pages/UseCases";
import Platforms from "./pages/Platforms";
import PrivacyAndPolicy from "./pages/Privacy";
import CookiePolicy from "./pages/Cookie";

// Defining the main App component
function App() {
  return (
    // Defining the routing configuration using Routes component
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/platforms" element={<Platforms />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
    </Routes>
  );
}
export default App;

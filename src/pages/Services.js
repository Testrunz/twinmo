// Importing necessary modules and styles
import "./Services.css";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Component/Footer";

// Importing Images and SVG from Asset
import ServiceHome from "../Asset/ServiceHome.png";
import Envelope from "../Asset/Envelope.svg";

// Defining the Service component
const Services = () => {
  const [isMessageSent, setMessageSent] = useState(false); // State to track if the message is sent
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault("");

    emailjs
      .sendForm(
        "service_zgvwjpe",
        "template_wstbxgm",
        form.current,
        "PpCBYhF138ELTjh3o"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    // Use a setTimeout to reset the isMessageSent state after 3 seconds
    if (isMessageSent) {
      const timeout = setTimeout(() => {
        setMessageSent(false);
      }, 3000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [isMessageSent]);


  return (
    <div className="servicepage">
      {/* Helmet component for setting document metadata */}
      <Helmet>
        <title>
          Tailored Support for Product Development | Twinmo Services
        </title>
        <meta name="keyword" content="Consultation for Innovation" />
        <meta
          name="description"
          content="At Twinmo, we offer tailored support for your product development journey. From consultation to quality control, discover our range of services."
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      {/* Service page content */}
      <div className="row-51">
        <div className="col-51">
          <h1>Customized Support for Your Product Needs</h1>
          <h2>
            We understand the uniqueness of every product, and we're ready to
            provide tailored support. Fill in our contact form and let us know
            whether your focus is Innovation, Testing, or Quality Control. Tell
            us about your problem or objective, and we'll schedule a
            consultation.
          </h2>
        </div>
        <div className="col-52">
          <img className="product51" alt="" src={ServiceHome} />
        </div>
      </div>
      <div className="container">
        <b className="contact-form-title">Contact form</b>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form">
            <div className="input-group">
              <div className="input-parent">
                <div className="input">
                  <div className="input-title-section">
                    <div className="input-section">
                      <input
                        className="base-input-rounded-not-sel"
                        placeholder="Name"
                        type="text"
                        name="user_name"
                        required
                      ></input>
                      <div className="mini-title-contaier">
                        <div className="input-title">First name</div>
                        <div className="star">*</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input1">
                  <div className="input-title-section">
                    <div className="input-section">
                      <input
                        className="base-input-rounded-not-sel"
                        placeholder="Last name"
                        required
                      ></input>
                      <div className="mini-title-contaier">
                        <div className="input-title">Last name</div>
                        <div className="star">*</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input2">
                <div className="input-title-section">
                  <div className="input-section">
                    <input
                      className="base-input-rounded-not-sel"
                      placeholder="yourmail@gmail.com"
                      type="email"
                      name="user_email"
                      required
                    ></input>
                    <div className="mini-title-contaier">
                      <div className="input-title">E-mail</div>
                      <div className="star">*</div>
                    </div>
                    <div className="input-right-section">
                      <img
                        className="icon-duotone-envelope"
                        alt=""
                        src={Envelope}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="input5">
                <div className="input-title-section">
                  <div className="input-section">
                    <textarea
                      className="base-input-rounded-not-sel"
                      placeholder="Your Message"
                      name="message"
                      required
                      style={{ height: "150px", fontFamily: "Poppins" }}
                    ></textarea>
                    <div className="mini-title-contaier1">
                      <div className="input-title">Message</div>
                      <div className="star">*</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
          {isMessageSent && <p style={{color:"#f1c232"}}>Message sent!</p>}
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;

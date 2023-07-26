// Importing necessary modules and styles
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Component/Footer";

// Defining the Service component
const Services = () => {
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
          alert("Message sent!!!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          {/* <img className="bg-img" alt="" src="/rectangle-331.svg" />
          <img className="bg-img" alt="" src="/rectangle-341.svg" /> */}
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
          {" "}
          <img className="product51" alt="" src="/group-181@2x.png" />
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
                        src="/icon--duotone--envelope.svg"
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
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;

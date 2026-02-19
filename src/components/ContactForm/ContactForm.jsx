import "./ContactForm.css";

import { MdOutlineArrowOutward } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-parallax-image-wrapper">
        <h1>BE BU</h1>
        {/* <img src="/contact-form/contact-parallax.png" alt="" /> */}
      </div>
      <div className="contact-form-container">
        <div className="cf-header">
          <h4>Join our private mailing list.</h4>
        </div>
        <div className="cf-copy">
          <p className="bodyCopy sm">
            You’ll Exclusive previews and first access to new collections. Reserved for our most valued clients.
          </p>
        </div>
        <div className="cf-input">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="cf-submit">
          <MdOutlineArrowOutward />
        </div>
        <div className="cf-footer">
          <div className="cf-divider"></div>
          <div className="cf-footer-copy">
            <p className="bodyCopy sm">
              No marketing cycles. Just rare, curated dispatches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

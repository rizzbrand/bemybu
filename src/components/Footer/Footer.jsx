import "./Footer.css";
import Link from "next/link";

import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <>
      <ContactForm />

      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Root</p>
              </div>
              <div className="footer-col-links">
                <Link href="/">Index</Link>
                <Link href="/wardrobe">Wardrobe</Link>
                <Link href="/genesis">Genesis</Link>
                <Link href="/contact">Touchpoint</Link>
                <Link href="/lookbook">Lookbook</Link>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Connect</p>
              </div>
              <div className="footer-col-links">
                <a
                  href="https://www.instagram.com/codegridweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@codegrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Atelier</p>
              </div>
              <div className="footer-col-links">
                <p>By appointment only</p>
                <p>Private viewings available</p>
                <p>Worldwide delivery</p>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-copyright">
              <h5>Be Bu</h5>
              <p className="bodyCopy">&copy;2025 All rights reserved.</p>
              {/* <p className="bodyCopy" id="copyright-text">
                Built by Codegrid
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

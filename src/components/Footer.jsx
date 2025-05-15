import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const Footer = ({ darkMode = false }) => {
  const bgColor = darkMode ? 'bg-dark' : 'bg-light';
  const textColor = darkMode ? 'text-light' : 'text-dark';
  const headingColor = darkMode ? 'text-warning' : 'text-primary';

  return (
    <footer className={`${bgColor} ${textColor} mt-auto border-top shadow-sm`}>
      <div className="container py-5">
        <div className="row">
          {/* About */}
          <div className="col-lg-3 col-md-6 mb-4 text-start">
            <h5 className={`text-uppercase fw-bold mb-3 ${headingColor}`}>
              African outfits{darkMode ? <FaMoon /> : <FaSun />}
            </h5>
            <p className="small">
              Your cozy, colorful spot for buying african clothing online. Fast delivery, friendly service, and delightful eats await!
            </p>
            <div className="d-flex gap-3 mt-3 fs-5">
              <a href="https://www.facebook.com/yourprofile" className={`${textColor} text-decoration-none`} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/yourprofile" className={`${textColor} text-decoration-none`} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/254795413318" className={`${textColor} text-decoration-none`} target="_blank" rel="noopener noreferrer">
                <FaPhone />
              </a>
            </div>
          </div>

          {/* Fresh Veggies Promo */}
          <div className="col-lg-3 col-md-6 mb-4 text-start">
            <h5 className={`text-uppercase fw-bold mb-3 ${headingColor}`}>Nice wears</h5>
            <p className="small text-success">
              Discover our best,  delivered to your doorstep. Support our culture with every colorful clothes
            </p>
            <p className="small">✅ Locally designed</p>
            <p className="small">✅ The best</p>
            <p className="small">✅ Choose Africa</p>
            <h5 className={`text-uppercase fw-bold mb-3 ${headingColor}`}>Get in Touch</h5>
            <p className="small mb-2"><FaPhone className="me-2" /> +254 707359545</p>
            <p className="small mb-2"><FaEnvelope className="me-2" /> info@sokogarden.com</p>
            <p className="small">📍 Nairobi, Kenya</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4 text-start">
            <h5 className={`text-uppercase fw-bold mb-3 ${headingColor}`}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className={`${textColor} text-decoration-none`}>🍹 Products</Link></li>
              <li className="mb-2"><Link to="/signup" className={`${textColor} text-decoration-none`}>📝 Sign Up</Link></li>
              <li className="mb-2"><Link to="/signin" className={`${textColor} text-decoration-none`}>🔐 Sign In</Link></li>
              <li className="mb-2"><Link to="/contact" className={`${textColor} text-decoration-none`}>📞 Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Sign-Up */}
          <div className="col-lg-3 col-md-6 mb-4 text-start">
            <h5 className={`text-uppercase fw-bold mb-3 ${headingColor}`}>Sign Up for Deals</h5>
            <p className="small">Lets be proud of our outfits as Africans.</p>
            <form className="needs-validation">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-sm w-100">Subscribe 💌</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`text-center p-3 ${darkMode ? 'bg-secondary text-light' : 'bg-secondary text-white'}`}>
        © {new Date().getFullYear()} <strong>African outfits</strong> | All Rights Reserved 💚
      </div>
    </footer>
  );
};

export default Footer;


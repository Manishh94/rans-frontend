import React from "react";
import "../assets/css/footer.css";
import logo from "../assets/images/rans.png";
import googlePlay from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column contact-column">
          <div className="logo-row">
            <img src={logo} alt="Rans Logo" className="logo-img" />
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone icon"></i>
              <div className="contact-text">
                <p className="label">Have a question?</p>
                <p className="value">+211 980 665 649</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="far fa-envelope icon"></i>
              <div className="contact-text">
                <p className="label">Contact us at</p>
                <p className="value">info@ransltd.com</p>
              </div>
            </div>
          </div>

          <div className="store-buttons">
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </div>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Rent</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>LOCATION</h4>
          <ul>
            <li>
              <a href="#">Gudele, Road,</a>
            </li>
            <li>
              <a href="#">Opposite Pity Oil,</a>
            </li>
            <li>
              <a href="#">Juba, South Sudan</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>DISCOVER</h4>
          <ul>
            <li>
              <a href="#">Juba</a>
            </li>
            <li>
              <a href="#">Kigali</a>
            </li>
            <li>
              <a href="#">Kampala</a>
            </li>
            <li>
              <a href="#">Nairobi</a>
            </li>
            <li>
              <a href="#">Dodoma</a>
            </li>
          </ul>
        </div>

        <div className="footer-column newsletter-column">
          <h4>Stay Updated</h4>
          <p>Sign up for property alerts and updates</p>
          <form className="newsletter-form">
            <div className="newsletter-input-wrapper">
              <input type="email" placeholder="Email" />
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2019-2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}

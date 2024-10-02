import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-contact">
          <div className="logo">
          
            <img src={require('../images/home.jpg')}  alt="HomeHaven Logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus eius repudiandae asperiores earum natus dolore repellat tenetur doloribus vitae!...</p>
          </div>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact</h4>
          <p>+91 8870344271</p>
          <p>maariraj302@gmail.com</p>
          <p>No 7 Upparu Road,kaliapuram Pollachi 642 129</p>
        </div>

        <div className="footer-section links">
          <h4>Page</h4>
          <ul>
            <li>About Us</li>
            <li>Property</li>
            <li>Blogs</li>
            <li>Service</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Quick links</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Support Center</li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h4>Subscribe</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Get product updates" />
            <button>&rarr;</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Copyright Dreamscape. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

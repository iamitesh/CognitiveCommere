import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Who are we</h4>
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Team</Link>
                </li>
                <li>
                  <Link to="#">Work With Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Commerce</h4>
              <ul>
                <li>
                  <Link to="#">Feature</Link>
                </li>
                <li>
                  <Link to="#">Payment</Link>
                </li>
                <li>
                  <Link to="#">Marketing</Link>
                </li>
                <li>
                  <Link to="#">Shipping</Link>
                </li>
                <li>
                  <Link to="#">Extension store</Link>
                </li>
                <li>
                  <Link to="#">Ecommerce blog</Link>
                </li>
                <li>
                  <Link to="#">Idea board</Link>
                </li>
                <li>
                  <Link to="#">Mobile App</Link>
                </li>
                <li>
                  <Link to="#">Community</Link>
                </li>
                <li>
                  <Link to="#">Style Guide</Link>
                </li>
                <li>
                  <Link to="#">Email Newsletter</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Other Products</h4>
              <ul>
                <li>
                  <Link to="#">Documentation</Link>
                </li>
                <li>
                  <Link to="#">Customization</Link>
                </li>
                <li>
                  <Link to="#">Support Policy</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#"> Covid 19 Resources</Link>
                </li>
                <li>
                  <Link to="#">Privacy Notice for</Link>
                </li>
                <li>
                  <Link to="#">California Users</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>We Recommend</h4>
              <ul>
                <li>
                  <Link to="#">Experts</Link>
                </li>
                <li>
                  <Link to="#">Hosting Solutions</Link>
                </li>
                <li>
                  <Link to="#">Pre-sales FAQ</Link>
                </li>
                <li>
                  <Link to="#">Success Stories</Link>
                </li>
                <li>
                  <Link to="#">Design feedback use</Link>
                </li>
              </ul>
            </div>
            {/* <div className="footer-col">
              <h4>We Recommend</h4>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

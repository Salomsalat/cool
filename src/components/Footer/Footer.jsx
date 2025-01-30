import React from "react";
import Services from "../Services/Services";
import Newsletter from "../Newsletter/Newsletter";
import Links from "../Links/Links";
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container">
    <div className="wow">
    <Services />
    <Newsletter />
    </div>
    <Links />
    </div>
  </footer>
);

export default Footer;

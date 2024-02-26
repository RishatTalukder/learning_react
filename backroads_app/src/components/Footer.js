import { pageLinks, socialLinks } from "../data";

import React from "react";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
        <li>
          <a href="#featured" className="footer-link">
            featured
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" className="footer-icon">
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

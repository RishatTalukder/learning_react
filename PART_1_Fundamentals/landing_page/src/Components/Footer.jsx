import React from "react";
import navData from "../data/navData";


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4"
    id="contact"
    >
      <div className="container">
        <div className="row">
          {/* Left Section - Developer Info */}
          <div className="col-md-6 text-center text-md-start">
            <h5
              className="fw-bold my-3"
              style={{
                color: "#cbc5bf",
              }}
            >
              {navData.brand}
            </h5>
            <p className="mb-1">
              Lower Mid Level Web Developer | Machine Learning Enthusiast
            </p>
            <p className="mb-0">📍 {navData.contactInfo.address}</p>
            <p className="mb-0">📧 {navData.contactInfo.email}</p>
          </div>

          {/* Right Section - Social Links */}
          <div className="col-md-6 text-center text-md-end">
            <h5
              className="fw-bold my-3"
              style={{
                color: "#cbc5bf",
              }}
            >
              Connect With Me
            </h5>
            <div className="d-flex justify-content-center justify-content-md-end">
              {navData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-light me-3 fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} {navData.brand}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

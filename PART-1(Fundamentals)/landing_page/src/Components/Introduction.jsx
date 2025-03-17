import React from "react";
import navData from "../data/navData";
const Introduction = () => {
  return (
    <div className="container col-xxl-8 px-4 py-4" id="introduction">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        {/* Image Section */}
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={navData.image} // Keep the avatar image path
            className="d-block mx-lg-auto img-fluid"
            alt="Profile Avatar"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {navData.brand} {/* Name from navData */}
          </h1>
          <p className="lead">{navData.Introduction}</p>

          {/* Contact Button */}
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

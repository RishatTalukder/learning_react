import React from "react";

const Hero = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Explore the Best Deals</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Dive into a wide range of products from top brands and popular categories.
            Experience seamless shopping with our intuitive and responsive interface.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
              Browse Categories
            </button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">
              View Brands
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from "react";
import av from "../avaters/av.svg";
const Introduction = () => {
  return (
    <div className="container col-xxl-8 px-4 py-4">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={av}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            [Your Name]
          </h1>
          <p className="lead">
            I am a [Skill Level] [Job Title] with a strong passion for [Primary
            Interest]. Even though [Mention a Challenge or Struggle], I stay
            committed to improving my skills and pushing forward. I graduated
            with a degree in [Your Degree], though my GPA was [GPA if relevant].
            I specialize in [Key Technologies or Skills] and actively solve
            problems on [Platform] with a rating of [Your Rating]. I love
            building [Types of Projects or Communities] and sharing my
            knowledge. Aside from development, I run a [YouTube Channel/Discord
            Server/Other Initiative] where I [Explain What You Do There]. My
            goal is to [Biggest Goal or Mission], and I'm determined to make a
            lasting impact in the [Relevant Industry or Community].
          </p>
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

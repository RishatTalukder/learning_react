import React from "react";
import projectData from "../data/projectData";

const Projects = () => {
  return (
    <div className="container px-4 py-5" id="projects">
      <h2 className="pb-2 border-bottom">Projects</h2>

      {projectData.map((project, index) => (
        <div
          key={index}
          className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5"
        >
          {/* Left Side: Project Info */}
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">{project.title}</h2>
            <p className="text-body-secondary">{project.description}</p>
            <a
              href={project.link}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Right Side: Features */}
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="col d-flex flex-column gap-2 align-items-start"
                >
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <i
                      className={`${feature.icon} p-3`}
                      width="1em"
                      height="1em"
                    ></i>
                  </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis">
                    {feature.title}
                  </h4>
                  <p className="text-body-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

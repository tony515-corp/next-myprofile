import Image from "next/image";
import { projectFilters, projects } from "../data/projects";

export default function ProjectArea() {
  return (
    <div id="work" className="project-area bg de-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="site-title mb-60 text-center">
              <h5 className="about-sub-title def">Gallery</h5>
              <h2 className="mb-0">My Gallery Projects</h2>
            </div>
          </div>
        </div>
        <div className="project-wpr">
          <div id="filters" className="toolbar text-center mb-40">
            {projectFilters.map((filter, index) => (
              <button
                key={filter.rel}
                className={`btn fil-cat filter${index === 0 ? " active" : ""}`}
                data-rel={filter.rel}
                data-filter={filter.filter}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div id="portfolio" className="magnific-mix-gallery">
            <div className="portfolio-grid grid-3">
              {projects.map((project) => (
                <div
                  className={`project-box tile scale-anm ${project.classes}`}
                  key={project.id}
                >
                  <div className="port-pic">
                    <Image
                      src={project.image}
                      layout="fixed"
                      width={370}
                      height={188}
                      alt={project.title}
                    />
                    <div className="port-overlay">
                      <div className="port-content">
                        <h5>
                          {String(project.id).padStart(2, "0")}. {project.title}
                        </h5>
                        <span>{project.caption}</span>
                        <a href={project.image} className="item popup-link">
                          <i className="fas fa-eye" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

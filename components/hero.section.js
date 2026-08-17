import Portrait from "./portrait";
import { site } from "../data/site";

export default function HeroSection() {
  return (
    <div id="home" className="hero-section">
      <div
        className="hero-single-2 clippath-circle jarallax d-flex"
        data-jarallax='{"speed": 0.2}'
        style={{
          backgroundImage: "url('/img/tony/02.header.jpg')",
        }}
      >
        <canvas className="canvasParticles-two" />
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8">
              <div
                className="hero-content-2 wow fadeInLeft"
                data-wow-duration="4s"
                data-wow-delay=".2s"
              >
                <div className="hero-desc">
                  <h5 className="hero-sub-title">{site.name}</h5>
                  <h2 className="hero-title">
                    I’m a{" "}
                    <span className="typed-strings">
                      {site.typedRoles.map((role) => (
                        <span className="type_color" key={role}>
                          {role}
                        </span>
                      ))}
                    </span>
                    <span className="typed" />
                  </h2>
                  <div className="header-description">
                    <p>
                      I think outside the box and come up with creative
                      solutions in order to help our web application stand out
                      from the competition.
                    </p>
                  </div>
                  <div className="hero-btn">
                    <a
                      href={site.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="tm-btn-1 demo2"
                    >
                      Download CV <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="hero-2-img wow fadeInRight"
                data-wow-duration="4s"
                data-wow-delay=".2s"
              >
                <Portrait className="portrait-circle--hero" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

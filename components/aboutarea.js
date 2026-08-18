import Portrait from "./portrait";
import { story } from "../data/story";

export default function AboutArea() {
  return (
    <div id="about" className="about-area de-padding">
      <div className="container">
        <div className="about-wpr">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-left wow fadeInLeft"
                data-wow-duration="4s"
                data-wow-delay=".2s"
              >
                <div className="about-pic">
                  <Portrait className="portrait-circle--about" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-right wow fadeInRight"
                data-wow-duration="4s"
                data-wow-delay=".2s"
              >
                <div className="about-right-content">
                  <h2 className="story-heading">
                    <span className="story-heading-kicker">{story.eyebrow}</span>
                    <span className="story-heading-rule" aria-hidden="true" />
                    <span className="story-heading-title">{story.title}</span>
                  </h2>
                  <div className="about-txt mb-30">
                    {story.paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className={index === story.paragraphs.length - 1 ? "mb-0" : undefined}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="about-btns">
                    <a href="#contact" className="tm-btn-2 smooth-menu">
                      Get in Touch
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

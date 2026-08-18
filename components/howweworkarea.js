import { howWeWork } from "../data/how-we-work";

export default function HowWeWorkArea() {
  return (
    <div id="how-we-work" className="how-we-work-area de-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <h2 className="story-heading career-heading">
              <span className="story-heading-kicker">{howWeWork.eyebrow}</span>
              <span className="story-heading-rule" aria-hidden="true" />
              <span className="story-heading-title">{howWeWork.title}</span>
            </h2>
            <div className="career-copy">
              {howWeWork.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>{howWeWork.stepsIntro}</p>
            </div>
            <div className="work-steps">
              {howWeWork.steps.map((step) => (
                <article className="work-step-card" key={step.number}>
                  <span className="work-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <p className="career-closing mb-0">{howWeWork.closing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

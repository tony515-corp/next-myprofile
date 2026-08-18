import { career } from "../data/careers";

export default function CareerArea() {
  return (
    <div id="career" className="career-area de-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <h2 className="story-heading career-heading">
              <span className="story-heading-kicker">{career.eyebrow}</span>
              <span className="story-heading-rule" aria-hidden="true" />
              <span className="story-heading-title">{career.title}</span>
            </h2>
            <div className="career-copy">
              {career.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>{career.requirementsIntro}</p>
            </div>
            <div className="career-reqs">
              {career.requirements.map((item) => (
                <div className="career-req-card" key={item.title}>
                  <div className="career-req-icon">
                    <i className={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <p className="career-closing">{career.closing}</p>
            <div className="career-positions">
              <h3 className="career-positions-title">Open Positions</h3>
              {career.positions.length > 0 ? (
                <div className="career-position-list">
                  {career.positions.map((role) => (
                    <article className="career-position-card" key={role.id}>
                      <div>
                        <h4>{role.title}</h4>
                        {role.type ? <span>{role.type}</span> : null}
                        {role.summary ? <p>{role.summary}</p> : null}
                      </div>
                      <a href={role.applyHref || "#contact"} className="tm-btn-2 smooth-menu">
                        Apply
                        <i className="fas fa-chevron-right" />
                      </a>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="career-positions-soon">
                  Open roles will be listed here shortly.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

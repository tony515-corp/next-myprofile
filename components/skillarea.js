import { skills } from "../data/skills";
import {
  education,
  hobbies,
  jobs,
  languages,
  salaryExpectation,
} from "../data/employment";

function JobBlock({ job }) {
  return (
    <>
      <h4 className={job === jobs[0] ? undefined : "mt-30"}>{job.title}</h4>
      <h5 className="mb-0">
        <small>{job.dates}</small>
      </h5>
      <ul className="ml-20">
        {job.bullets.map((bullet) => (
          <li className="emp-history" key={bullet}>
            {bullet}
          </li>
        ))}
        <li className="emp-history">
          <strong>Key Achievements</strong>
          <br />
          {job.achievement}
        </li>
      </ul>
    </>
  );
}

export default function SkillArea() {
  return (
    <div
      id="skill"
      className="video-area vid-ov de-padding"
      style={{ backgroundImage: "url(/img/tony/parallax-skill.jpg)" }}
    >
      <div className="container">
        <div className="video-wpr">
          <div className="row">
            <div className="col-xl-6">
              <div className="my-service">
                <h5>My Employment History</h5>
                {jobs.map((job) => (
                  <JobBlock key={job.title} job={job} />
                ))}
              </div>
              <div className="my-service mt-50">
                <h5>My Education</h5>
                <ul className="ml-20">
                  {education.map((item) => (
                    <li className="emp-history" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <h5 className="mt-30">My Language</h5>
                <ul className="ml-20">
                  {languages.map((item) => (
                    <li className="emp-history" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <h5 className="mt-30 mb-10">My Hobby</h5>
                <ul className="ml-20">
                  {hobbies.map((item) => (
                    <li className="emp-history" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <h5 className="mt-30 mb-0">My Salary Expectation</h5>
                <ul className="ml-20">
                  <p>{salaryExpectation}</p>
                </ul>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1">
              <div className="video-box fl-wrap pl" />
            </div>
            <div className="col-xl-5">
              <div className="my-service">
                <h5>My Skill</h5>
              </div>
              <div className="skills-section">
                {skills.map((skill) => (
                  <div className="progress-box" key={skill.name}>
                    <h5>
                      {skill.name}{" "}
                      <span className="pull-right">{skill.percent}%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width={skill.percent}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Portrait from "../../portrait";
import { site } from "../../../data/site";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <div className="menu-tab">
        <div id="one" />
        <div id="two" />
        <div id="three" />
      </div>
      <div className="menu-hide">
        <div className="side-about">
          <Portrait
            className="portrait-circle--side"
            alt={`${site.name} is open to new roles`}
          />
          <h5 className="about-sub-title mt-30">Finding New Position</h5>
          <p className=" mb-0">
            Hey, My schedule is flexible, and I would be available to work at
            your convenience. I hope to schedule an interview at a mutually
            convenient time. I look forward to speaking with you. Thank you for
            your consideration.
          </p>
        </div>
        <div className="side-social-content mt-30">
          <div className="side-address mb-30">
            <div className="side-addr-box">
              <div className="side-addr-icon">
                <i className="fas fa-phone" />
              </div>
              <div className="side-addr-desc">
                <span>{site.phone}</span>
              </div>
            </div>
            <div className="side-addr-box">
              <div className="side-addr-icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="contact-addr-desc">
                <span>{site.emails[0]}</span>
              </div>
            </div>
          </div>
          <ul className="side-social">
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                <i className="fab fa-git" />
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

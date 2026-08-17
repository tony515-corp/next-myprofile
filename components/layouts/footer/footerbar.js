import { useEffect } from "react";
import { site } from "../../../data/site";
import { initTemplate } from "../../../lib/init-template";

export default function FooterBar() {
  useEffect(() => {
    return initTemplate();
  }, []);

  return (
    <footer>
      <div className="footer-widget">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <p>
                  © {new Date().getFullYear()} {site.name}. All rights reserved
                </p>
              </div>
              <div className="col-xl-4">
                <ul className="footer-menu" />
              </div>
              <div className="col-xl-4">
                <ul className="footer-social">
                  <li>
                    <a href={site.github} target="_blank" rel="noreferrer">
                      <i className="fab fa-github" />
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
        </div>
      </div>
    </footer>
  );
}

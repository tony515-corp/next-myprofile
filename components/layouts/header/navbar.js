import { site } from "../../../data/site";

export default function Navbar() {
  return (
    <div className="collapse navbar-collapse justify-content-center" id="main_nav">
      <ul id="top-menu" className="navbar-nav v-card-menu">
        {site.nav.map((item) => (
          <li className="nav-item" key={item.href}>
            <a className="nav-link smooth-menu" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

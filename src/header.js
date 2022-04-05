import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container">
      <a href="/crypto-market-share" className="navbar-brand">
        TOP 10 CRYPTO MARKET SHARE
      </a>
      <button
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler collapsed"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse">
        <div className="mr-auto navbar-nav">
          <a href="/crypto-market-share" className="nav-link">
            <FontAwesomeIcon icon={faHome} /> <span> </span>
            Home
          </a>

          <a
            href="https://github.com/Laurent34000/crypto-market-share"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span> </span>
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
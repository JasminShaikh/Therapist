import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toastDark } from "../Common/Toast";

const Navbar = () => {
  const pathArray = ["/login", "/register"];
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    toastDark("Logout successfull");
  };

  return pathArray.includes(window.location.pathname) ? null : (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">
          <img
            src="https://www.intromaker.net/img/icons/11.png"
            alt="Logo"
            height="40"
            width="40"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/add-client">
                Add Client
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Display Client
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

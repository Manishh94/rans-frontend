import { Link } from "react-router-dom";
import CommenButton from "../buttonComponent";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rans
          </Link>

          {/* Login button goes before hamburger */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links container */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              {["Home", "Rent", "Buy", "Sell", "Services", "Help"].map(
                (value, index) => {
                  return (
                    <Link
                      key={index}
                      className="nav-link active m-2"
                      aria-current="page"
                      to="#"
                    >
                      {value}
                    </Link>
                  );
                }
              )}
            </div>
            <div className="d-flex order-sm-0 p-2">
              <CommenButton
                buttonText={"Login"}
                buttonStyle={"navLoginButton"}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

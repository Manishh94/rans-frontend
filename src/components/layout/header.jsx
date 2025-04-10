import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rans
          </Link>
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
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
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
          </div>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-primary"
              // onClick={}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default function LoginContainer() {
  return (
    <>
      <div className="container-fluid p-5 ">
        <div className="row login-container-row">
          
          <div className="col-lg-6 col-md-6 col-sm-12 order-md-2">
            <img
              className="logincontainer-image img-fluid"
              src="./logincontainer-image.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex order-md-1 justify-content-md-end">
            <div className="login-text-div mt-4 pt-5">
              <h4 className="fw-bolder me-4">
                Search Properti,
                <br />
                List Your Property
              </h4>
              <p>Get Started Now</p>
              <button type="button" class="btn btn-outline-primary w-50">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

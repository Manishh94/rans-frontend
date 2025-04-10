export default function LoginContainer() {
  return (
    <>
      <div className="container-fluid p-5 ">
        <div className="row login-container-div ps-3">
          <div className="col-6 d-flex justify-content-end">
            <div className="login-text-div mt-4 ">
              <h3 className="fw-bolder me-4">Search Properti,</h3>
              <h3 className="fw-bolder">List Your Property</h3>
              <p>Get Started Now</p>
            </div>
          </div>
          <div className="col-6 ">
            <img className="logincontainer-imag" src="/logincontainer-imag.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

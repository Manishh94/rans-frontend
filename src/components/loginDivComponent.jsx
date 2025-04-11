import CommenButton from "./buttonComponent";
export default function LoginContainer() {
  return (
    <>
      <div className="container-fluid p-5 login-container my-5">
        <div className="row login-container-row pt-5 ">
          <div className="col-lg-6 col-md-6 col-sm-12 order-md-2 pt-md-3 d-flex justify-content-center  justify-content-md-start ">
            <div className="position-relative d-flex justify-content-center">
              <img
                className=" Component3-image img-fluid "
                src="./images/Component3.png"
                alt=""
                data-aos="fade-up"
              />
              <img
                className="img-fluid logincontainer-image position-absolute translate-middle img-fluid h-75"
                src="./images/agent1.png"
                alt=""
                data-aos="fade-down"
              />

              <img
                className="position-absolute Group8  img-fluid"
                src="./images/Group8.png"
                alt=""
                data-aos="fade-up"
              />

              <img
                className="position-absolute Group9 img-fluid"
                src="./images/Group9.png"
                alt=""
                data-aos="fade-up"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 d-flex order-md-1 my-sm-5  order-sm-2 justify-content-center pe-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="login-text-div mt-4 pt-md-5">
              <h4 className="fw-bolder me-4">
                Search Property,
                <br />
                List Your Property
              </h4>
              <p className="text-muted">Get Started Now</p>
              <CommenButton
                buttonText={"Login"}
                buttonStyle={"btn-outline-primary w-50"}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import NavBar from "./layout/header";
import Button from "./buttonComponent";
import SearctBar from "./searchComponent";
export default function HeroCompoment() {
  return (
    <>
      <div className="container-fluid main-container p-5">
        <div className="row p-5  d-flex justify-content-center">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-7 ps-5">
            <h1 className="hero-div-h1 fw-bolder">
              Find Your Perfect Property .Rent, Buy, or Sell With Ease
            </h1>
            <p className="text-white fs-6">
              Discover thousent of properties, tailored to your needs, with
              expert support every step of your way
            </p>
            <SearctBar/>
          </div>
        </div>
      </div>
    </>
  );
}

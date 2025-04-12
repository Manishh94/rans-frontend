import NavBar from "./layout/header";
import Button from "./buttonComponent";
import SearchBar from "./searchComponent";
export default function HeroCompoment() {
  return (
    <>
      <div className='header-content'>
      <div className="container main-container p-5">
        <div className="row p-5  d-flex justify-content-center">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ps-5">
            <h1 className="hero-div-h1 ">
              Find Your Perfect <br/>Property. Rent, Buy,<br/> or Sell With Ease
            </h1>
            <p className="text-white fs-6">
              Discover thousent of properties, tailored to your <br /> needs, with
              expert support every step of your way
            </p>
            <SearchBar/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

import React from "react";
import Slider from "react-slick";
import "../assets/css/property-management-ui.css";
import propertyUi1 from "../assets/images/property-ui-1.png";
import propertyUi2 from "../assets/images/property-ui-2.png";
import propertyUi3 from "../assets/images/property-ui-3.png";
import pinImg from "../assets/images/pin.png";
import useIsMobile from "../hooks/useIsMobile"; 

const steps = [
  {
    img: propertyUi1,
    label: "1",
    title: "Search and Find Your Property",
    desc: "Users browse the listings.",
    ml: "-114px",
  },
  {
    img: propertyUi2,
    label: "2",
    title: "Schedule a Viewing or Virtual Tour",
    desc: "Book viewings directly on the platform.",
    ml: "-40px",
  },
  {
    img: propertyUi3,
    label: "3",
    title: "Secure and Manage Your Transaction",
    desc: "Automated payments, smart contracts, and more.",
    ml: "0px",
  },
];

const PropertyManagementUI = () => {
  const isMobile = useIsMobile();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderStep = (step, i) => (
    <div key={i} className="single-box">
      <div className="pin-label" style={{ marginLeft: isMobile ? "0" : "-205px" }}>
        <img src={pinImg} alt="Pin" className="pin-img" />
        <span>{step.label}</span>
      </div>
      <img src={step.img} alt={`Step ${step.label}`} className="property-img" />
      <h3>{step.title}</h3>
      <p style={{ marginLeft: isMobile ? "0" : step.ml }}>{step.desc}</p>
    </div>
  );

  return (
    <div className="property-container">
      <h2>
        How Rans Solutions Makes Property <br />
        Management Simple
      </h2>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {steps.map(renderStep)}
        </Slider>
      ) : (
        <div className="image-boxes">
          {steps.map(renderStep)}
        </div>
      )}
      <button className="cta-button">
        Get Started Today! <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
      </button>
    </div>
  );
};

export default PropertyManagementUI;

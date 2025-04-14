import React from "react";
import Slider from "react-slick";
import "../assets/css/property-management.css";
import propertyImg1 from "../assets/images/property-1.jpeg";
import propertyImg2 from "../assets/images/property-2.jpg";
import propertyImg3 from "../assets/images/property-3.png";

const services = [
  {
    title: (
      <h6>
        Tenant <br /> Management
      </h6>
    ),
    image: "./images/object1.png",
    style: "mamagment-image-one",
  },
  {
    title: <h6>Rent Collection & <br/>Lease Agreements</h6>,
    image: "./images/managmentImage3.png",
    style: "mamagment-image-second",
  },
  {
    title: (
      <h6>
        Maintenance
        <br /> Requests
      </h6>
    ),
    image: "./images/managmentImage4.png",
    style: "mamagment-image-third",
  },
];

const PropertyManagement = () => {
  const isMobile = window.innerWidth <= 768;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="property-management container">
      <div className="row ps-5">
        <h2 className="pm-title">
          Full-Service Property <br />
          Management
        </h2>
        <p className="pm-subtitle">
          Let us manage your property with our comprehensive services, from rent{" "}
          <br />
          collection to maintenance.
        </p>
      </div>

      {isMobile ? (
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index}>
              <div className="pm-card">
                <div className="pm-card-title">{service.title}</div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="pm-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="pm-services row d-flex justify-content-around">
          {services.map((service, index) => (
            <div className="pm-card col-md-3 col-sm-12" key={index}>
              <div className="pm-card-title ">{service.title}</div>
              <div className="pm-image-div d-flex justify-content-center ">
                <img
                  src={service.image}
                  alt={service.title}
                  className={service.style}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyManagement;

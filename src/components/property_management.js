import React from "react";
import Slider from "react-slick";
import "../assets/css/property-management.css";
import propertyImg1 from "../assets/images/property-1.jpeg";
import propertyImg2 from "../assets/images/property-2.jpg";
import propertyImg3 from "../assets/images/property-3.png";

const services = [
  {
    title: "Tenant Management",
    image: propertyImg1,
  },
  {
    title: "Rent Collection & Lease Agreements",
    image: propertyImg2,
  },
  {
    title: "Maintenance Requests",
    image: propertyImg3,
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
    <div className="property-management">
      <h2 className="pm-title">
        Full-Service Property <br />
        Management
      </h2>
      <p className="pm-subtitle">
        Let us manage your property with our comprehensive services, from rent{" "}
        <br />
        collection to maintenance.
      </p>

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
        <div className="pm-services">
          {services.map((service, index) => (
            <div className="pm-card" key={index}>
              <div className="pm-card-title">{service.title}</div>
              <img
                src={service.image}
                alt={service.title}
                className="pm-image"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyManagement;

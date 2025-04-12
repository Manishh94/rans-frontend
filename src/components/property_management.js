import React from "react";
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
      <div className="pm-services">
        {services.map((service, index) => (
          <div className="pm-card" key={index}>
            <div className="pm-card-title">{service.title}</div>
            <img src={service.image} alt={service.title} className="pm-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;

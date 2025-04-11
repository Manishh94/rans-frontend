import React, { useEffect, useState } from "react";
import "../assets/css/property-management-ui.css";
import propertyUi1 from "../assets/images/property-ui-1.png";
import propertyUi2 from "../assets/images/property-ui-2.png";
import propertyUi3 from "../assets/images/property-ui-3.png";
import pinImg from "../assets/images/pin.png"

const PropertyManagementUI = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="property-container">
      <h2>
        How Rans Solutions Makes Property <br />
        Management Simple
      </h2>
      <div className={`image-boxes ${animate ? "slide-up-group" : ""}`}>
        <div className="single-box">
          <div className="pin-label">
            <img src={pinImg} alt="Pin" className="pin-img" />
            <span>1</span>
          </div>
          <img src={propertyUi1} alt="Step 1" className="property-img" />
          <h3>Search and Find Your Property</h3>
          <p>Users browse the listings.</p>
       </div>
        <div className="single-box">
          <div className="pin-label">
            <img src={pinImg} alt="Pin" className="pin-img" />
            <span>2</span>
          </div>          <img src={propertyUi2} alt="Step 2" className="property-img"/>
          <h3>Schedule a Viewing or Virtual Tour</h3>
          <p>Book viewings directly on the platform.</p>
        </div>
        <div className="single-box">
          <div className="pin-label">
            <img src={pinImg} alt="Pin" className="pin-img" />
            <span>3</span>
          </div>          <img src={propertyUi3} alt="Step 3" className="property-img"/>
          <h3>Secure and Manage Your Transaction</h3>
          <p>Automated payments, smart contracts, and more.</p>
        </div>
      </div>
      <button className="cta-button">Get Started Today !</button>
    </div>
  );
};

export default PropertyManagementUI;

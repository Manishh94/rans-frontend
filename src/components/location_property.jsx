import React from 'react';
import Slider from "react-slick"; 
import useIsMobile from '../hooks/useIsMobile'; 
import "../assets/css/location-property.css";
import locationImg1 from "../assets/images/location-1.jpg";
import locationImg2 from "../assets/images/location-2.jpg";
import locationImg3 from "../assets/images/location-3.png";

const locations = [
  { city: 'Nairobi', image: locationImg1 },
  { city: 'Kampala', image: locationImg2 },
  { city: 'Juba', image: locationImg3 },
];

const LocationProperty = () => {
  const isMobile = useIsMobile(); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="browse-container">
      <h2 className="browse-title">
        Browse Properties by <br />Location
      </h2>

      {isMobile ? (
        <Slider {...settings} className="card-grid">
          {locations.map((loc) => (
            <div className="location-card" key={loc.city}>
              <img src={loc.image} alt={loc.city} className="card-image" />
              <span className="badge">Location</span>
              <h3 className="card-city">{loc.city.toUpperCase()}</h3>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="card-grid static">
          {locations.map((loc) => (
            <div className="location-card" key={loc.city}>
              <img src={loc.image} alt={loc.city} className="card-image" />
              <span className="badge">Location</span>
              <h3 className="card-city">{loc.city.toUpperCase()}</h3>
            </div>
          ))}
        </div>
      )}

      <div className="button-container">
        <button className="discover-button">
          Discover more Locations <span className="arrow">&#8250;</span>
        </button>
      </div>
    </section>
  );
};

export default LocationProperty;

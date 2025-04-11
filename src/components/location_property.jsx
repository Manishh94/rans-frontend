import React from 'react';
import "../assets/css/location-property.css"
import locationImg1 from "../assets/images/location-1.jpg"
import locationImg2 from "../assets/images/location-2.jpg"
import locationImg3 from "../assets/images/location-3.jpeg"

const locations = [
  {
    city: 'Nairobi',
    image: locationImg1
  },
  {
    city: 'Kampala',
    image: locationImg2
  },
  {
    city: 'Juba',
    image: locationImg3
  },
];

const LocationProperty = () => {
  return (
    <section className="browse-container">
      <h2 className="browse-title">
        Browse Properties by <br/>Location
      </h2>
      <div className="card-grid">
        {locations.map((loc) => (
          <div className="location-card" key={loc.city}>
            <img src={loc.image} alt={loc.city} className="card-image" />
            <span className="badge">Location</span>
            <h3 className="card-city">{loc.city.toUpperCase()}</h3>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="discover-button">
          Discover more Locations <span className="arrow">&#8250;</span>
        </button>
      </div>
    </section>
  );
};

export default LocationProperty;

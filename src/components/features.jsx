import React from 'react';
import { FaStar, FaBath, FaBed, FaHome } from 'react-icons/fa';
import Slider from "react-slick"; 
import "../assets/css/feature.css";
import featureImg1 from "../assets/images/feature-1.avif";
import featureImg2 from "../assets/images/feature-2.avif";
import featureImg3 from "../assets/images/feature-3.jpeg";
import useIsMobile from '../hooks/useIsMobile';

const properties = [
  {
    id: 1,
    title: 'DREAM APARTMENTS',
    location: 'Juba , South Sudan',
    price: '$300',
    rating: '4.6',
    image: featureImg1,
  },
  {
    id: 2,
    title: 'DREAM APARTMENTS',
    location: 'Juba , South Sudan',
    price: '$300',
    rating: '4.6',
    image: featureImg2,
  },
  {
    id: 3,
    title: 'DREAM APARTMENTS',
    location: 'Juba , South Sudan',
    price: '$300',
    rating: '4.6',
    image: featureImg3,
  },
];

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <div className="property-image-container">
      <img src={property.image} alt={property.title} className="property-image" />
      
      <div className="property-tags">
        <span className="tag rent">For Rent</span>
        <span className="tag featured">Featured</span>
      </div>

      <div className="property-details overlay">
        <div className="property-header">
          <span className="property-title">{property.title}</span>
          <span className="property-rating">
            <FaStar className="star-icon" />
            <span className="rating-outof">{property.rating}/5</span>
          </span>
        </div>
        <div className="property-location">
          <i className="fa-solid fa-location-dot" style={{ color: "black" }}></i>
          {property.location}
        </div>

        <div className="price-and-icons">
          <div className="property-price">{property.price}</div>
          <div className="property-icons">
            <div className="icon-text"><FaHome /> 1</div>
            <div className="icon-text"><FaBed /> 2</div>
            <div className="icon-text"><FaBath /> 1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProperties = () => {
  const isMobile = useIsMobile();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="featured-properties">
        <h2 className="title">Featured Properties</h2>

        {isMobile ? (
          <Slider {...sliderSettings} className="property-list">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </Slider>
        ) : (
          <div className="property-list grid-view">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="more-btn-container">
          <button className="more-btn">
            Discover more properties <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

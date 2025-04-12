import React from "react";
import Slider from "react-slick";
import useIsMobile from "../hooks/useIsMobile"; // update path as needed
import "../assets/css/testimonials.css";

const TestimonialCard = () => {
  const isMobile = useIsMobile();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [1, 2];

  const Card = ({ id }) => (
    <div key={id} className="testimonial-card">
      <div className="testimonial-avatar">S</div>
      <div className="testimonial-content">
        <div className="testimonial-header">
          <span className="testimonial-name">Sarah M</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="testimonial-company"
          />
        </div>
        <div className="testimonial-rating">
          ★ ★ ★ ★ ☆ <span className="testimonial-score">4.6</span>
          <span className="testimonial-outof">/5</span>
        </div>
        <p className="testimonial-text">
          Rans Solutions made renting out my property completely stress-free!
          They handled everything from finding tenants to maintenance, and I
          couldn't be happier with their service.
        </p>
      </div>
    </div>
  );

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">
        What Our Clients Are <br /> Saying
      </h2>

      {isMobile ? (
        <Slider {...settings}>
          {cards.map((card) => (
            <Card key={card} id={card} />
          ))}
        </Slider>
      ) : (
        <div className="testimonial-cards">
          {cards.map((card) => (
            <Card key={card} id={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;

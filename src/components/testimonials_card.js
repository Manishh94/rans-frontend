import React from "react";
import "../assets/css/testimonials.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">
        What Our Clients Are <br /> Saying
      </h2>

      <div className="testimonial-cards">
        {[1, 2].map((card) => (
          <div key={card} className="testimonial-card">
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
                Rans Solutions made renting out my property completely
                stress-free! They handled everything from finding tenants to
                maintenance, and I couldn't be happier with their service.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;

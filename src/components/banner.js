import React from "react";
import BannerImage from "../assets/images/banner.webp";
import "../assets/css/banner.css";
import userImg from "../assets/images/banner-user.png";

const Banner = () => {
  return (
    <>
      <div className="white-user-container"></div>
      <div className="hero-container position-relative">
        <img src="./images/Rectangle4.png" alt="Property Manager" className="hero-image position-absolute t-0 " />
        <img src="./images/board2.png" alt="Property Manager" className="hero-image " />
        <img src={userImg} alt="user" className="user-image" />

        <div className="hero-content">
          <h1>
            Simplify Your Property
            <br />
            Management
          </h1>
          <button className="hero-button">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;

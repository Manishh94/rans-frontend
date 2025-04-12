import "../assets/css/review-section.css";
import agentImg from "../assets/images/agent2.png";

const ReviewSection = () => {
  return (
    <>
      <div className="footer-wrapper">
        <img src={agentImg} alt="Review Girl" className="img-footer-unique" />

        <div className="top-white-section"></div>

        <div className="bottom-orange-section">
          <div className="footer-content-unique">
            <div className="left-unique-card star-card">⭐ ⭐ ⭐ ⭐ ⭐ 4.8</div>

            <div className="review-text-unique">
              <h2>Read More Reviews</h2>
              <button className="btn-read-unique">Read More ➤</button>
            </div>

            <div className="right-unique-card star-card">
              ⭐ ⭐ ⭐ ⭐ ⭐ 4.8
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;

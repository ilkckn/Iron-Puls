import { useNavigate } from "react-router-dom";
import "./Landing.css";
import Metrics from "./Metrics";
import Services from "./Services";
import UserFeedback from "./UserFeedback";
import JoinPuls from "./JoinPuls";

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <section className="landing">
      <div className="hero">
        <img src="/landing/hero.png" alt="" />
        <div className="content">
          <div className="header">
            <span>
              <span></span> ENGINEERED FOR PERFORMANCE
            </span>
            <div className="main-header">
              <h1>limitless</h1>
              <h1>energy</h1>
            </div>
            <p>
              Break through your physical thresholds with industrial-grade
              training protocols. Iron Pulse is not just a gym; it's a
              high-performance ecosystem for the elite athlete.
            </p>
          </div>
          <div className="btns">
            <button onClick={() => navigate("/about")}>start training</button>
            <button>view plans</button>
          </div>
        </div>
      </div>

      <div className="metrics-component">
        <Metrics />
      </div>
      <div className="services-component">
        <Services />
      </div>
      <div className="user-feedback-component">
        <UserFeedback />
      </div>
      <div className="join-component">
        <JoinPuls />
      </div>
    </section>
  );
};

export default Landing;

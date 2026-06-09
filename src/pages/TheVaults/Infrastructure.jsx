import "./Infrastructure.css";
import { FaSnowflake } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { RiMedal2Fill } from "react-icons/ri";

const Infrastructure = () => {
  return (
    <section className="infrastructure-container">
      <h1>infrastructure</h1>
      <div className="infrastructure">
        <div className="box">
          <FaSnowflake />
          <h2>cryotherapy</h2>
          <p>
            Precision sub-zero recovery chambers engineered to accelerate
            cellular repair and systemic inflammation reduction. Peak
            performance through metabolic shock.
          </p>
        </div>
        <div className="box">
          <GoGraph />
          <h2>biometric tracking</h2>
          <p>
            Real-time data telemetry integrated into every platform. Track force
            output, velocity, and neurological fatigue metrics instantly via the
            Iron Pulse network.
          </p>
        </div>
        <div className="box">
          <RiMedal2Fill />
          <h2>elite coaching</h2>
          <p>
            Tier 1 certified performance experts with background in specialized
            strength protocols. Data-driven mentorship for the 1% who refuse to
            plateau.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

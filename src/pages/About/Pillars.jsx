import "./Pillars.css";

const Pillars = () => {
  return (
    <section className="pillars-container">
      <div className="content-pillars">
        <div className="box">
          <span>01 / CALIBRATION</span>
          <h2>precision</h2>
          <p>
            Every movement is measured. Every rep is a data point. We utilize
            biometric tracking and biomechanical analysis to ensure your output
            is optimized for maximum mechanical advantage.
          </p>
        </div>
        <div className="box">
          <span>02 / KINETICS</span>
          <h2>power</h2>
          <p>
            Raw energy refined. We focus on explosive force and structural
            integrity. Our training protocols are engineered to transition
            potential energy into devastating kinetic reality.
          </p>
        </div>
        <div className="box">
          <span>03 / METRICS</span>
          <h2>PERFORMANCE</h2>
          <p>
            The standard is excellence. Beyond aesthetics lies the realm of
            functional peak capacity. We train for the theater of life, sport,
            and relentless progression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pillars;

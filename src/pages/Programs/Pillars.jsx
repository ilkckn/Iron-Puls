import "./Pillars.css";

const Pillars = () => {
  return (
    <section className="pillars-container">
      <div className="header">
        <h1>the pillars</h1>
        <span></span>
      </div>
      <div className="boxes">
        <div className="box">
          <h1>kinetic power</h1>
          <p>
            Unleash explosive force through plyometric integration and
            velocity-based loading protocols.
          </p>
          <button>
            <p>explore module</p>
          </button>
          <span>01</span>
        </div>
        <div className="box">
          <h1>industrial endurance</h1>
          <p>
            High-volume metabolic conditioning forged for athletes who never
            quit.
          </p>
          <button>
            <p>engage system</p>
          </button>
          <span>02</span>
        </div>
        <div className="box">
          <div className="left">
            <h1>metabolic forge</h1>
            <p>
              A high-intensity incinerator protocol designed for absolute body
              composition transformation and raw grit development.
            </p>
          </div>
          <div className="right">
            <button>access forge</button>
          </div>
          <span>03</span>
        </div>
      </div>
    </section>
  );
};

export default Pillars;

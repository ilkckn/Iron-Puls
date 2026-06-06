import "./Protocol.css";

const Protocol = () => {
  return (
    <section className="protocol-container">
      <div className="image">
        <img src="/programs/protocol.png" alt="" />
      </div>
      <div className="protocol">
        <span>spotlight protocol</span>
        <div className="main-header">
          <h1>strength</h1>
          <h1>hypertrophy</h1>
        </div>
        <div className="duration-intensity-focus">
          <div className="duration">
            <span>duration</span>
            <p>12 weeks</p>
          </div>
          <div className="intensity">
            <span>intensity</span>
            <p>elite</p>
          </div>
          <div className="focus">
            <span>focus</span>
            <p>mass & power</p>
          </div>
        </div>
        <div className="sequence">
          <div className="image">
            <img src="/programs/protocol-icon.png" alt="" />
          </div>
          <p>
            Proprietary overload sequencing designed for maximum fiber
            recruitment and CNS resilience.
          </p>
        </div>
        <div className="btn">
          <button>start protocol</button>
        </div>
      </div>
    </section>
  );
};

export default Protocol;

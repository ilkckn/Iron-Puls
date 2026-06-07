import "./MacroCycle.css";

const MacroCycle = () => {
  return (
    <section className="macro-cycle-container">
      <h1>the macrocycle</h1>
      <div className="cycle">
        <div className="cycle-top">
          <div className="box">
            <span>01</span>
            <p>accumulation</p>
          </div>
          <div className="box">
            <span>02</span>
            <p>intensification</p>
          </div>
          <div className="box">
            <span>03</span>
            <p>realization</p>
          </div>
        </div>
        <div className="cycle-bottom">
          <div className="box">
            <p>weeks 1 - 4</p>
            <p>
              Building the structural foundation. High volume, moderate
              intensity. Hypertrophic adaptation focus.
            </p>
          </div>
          <div className="box">
            <p>weeks 5 - 8</p>
            <p>
              Transitioning to heavy loads. Reducing volume, increasing
              intensity. Neurological recruitment focus.
            </p>
          </div>
          <div className="box">
            <p>weeks 9 - 12</p>
            <p>
              The peaking phase. Maximum intensity, minimal volume. Testing
              absolute power and PRs.
            </p>
          </div>
        </div>
        <div className="ready-to-evolve">
          <div className="content">
            <h1>ready to evolve</h1>
            <p>
              THE ONLY LIMIT IS THE ONE YOU CHOOSE TO ACCEPT. JOIN THE ELITE
              RANKS OF THE IRON PULSE.
            </p>
            <div className="btns">
              <button>start trial</button>
              <button>consult a coach</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacroCycle;

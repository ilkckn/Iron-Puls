import "./Programs.css";
import Protocol from "./Protocol";
import Pillars from "./Pillars";
import MacroCycle from "./MacroCycle";

const Programs = () => {
  return (
    <section className="programs-container">
      <div className="hero">
        <div className="top-header">
          <span className="line"></span>
          <span>established protocols</span>
        </div>
        <div className="main-header">
          <h1>the</h1>
          <h1>arsenal</h1>
          <p>
            ELITE TRAINING PROTOCOLS ENGINEERED FOR PEAK PERFORMANCE AND RAW
            PHYSICAL DOMINANCE.
          </p>
        </div>
        <div className="btns">
          <button>explore weaponry</button>
          <button>squad intel</button>
        </div>
      </div>

      <div className="protocol-component">
        <Protocol />
      </div>
      <div className="pillars-component">
        <Pillars />
      </div>
      <div className="macro-cycle-component">
        <MacroCycle />
      </div>
    </section>
  );
};

export default Programs;

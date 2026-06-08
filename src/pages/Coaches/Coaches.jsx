import Coach from "./Coach";
import "./Coaches.css";
import Rebuilt from "./Rebuilt";
import Roster from "./Roster";

const Coaches = () => {
  return (
    <section className="coaches-container">
      <div className="hero">
        <span>engineering peak humanity</span>
        <div className="main-header">
          <h1>the architects</h1>
          <h1>of performance</h1>
        </div>
        <div className="btns">
          <button>consult a coach</button>
          <button>book evaluation</button>
        </div>
      </div>

      <div className="coach-component">
        <Coach />
      </div>
      <div className="roster-component">
        <Roster />
      </div>
      <div className="rebuilt-component">
        <Rebuilt />
      </div>
    </section>
  );
};

export default Coaches;

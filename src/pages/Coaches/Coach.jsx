import "./Coach.css";
import { FaChevronRight } from "react-icons/fa";

const Coach = () => {
  return (
    <section className="coach-container">
      <div className="image">
        <img src="/coaches/coach1.png" alt="" />
      </div>
      <div className="infos">
        <h1>marcus vaughn</h1>
        <p>"WE DON'T BUILD ATHLETES. WE FORGE LEGENDS."</p>
        <div className="info">
          <p>
            Marcus Vaughn is the strategic mind behind the Iron Pulse
            methodology. With over two decades of experience training Tier 1
            operators and Olympic sprinters, he focuses on the intersection of
            raw force and physiological longevity.
          </p>
          <div className="sub-info">
            <div className="sub1">
              <span>core domain</span>
              <p>strength mechanics</p>
            </div>
            <div className="sub2">
              <span>specialization</span>
              <p>bio-energetics</p>
            </div>
          </div>
        </div>
        <button>
          read full profile <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Coach;

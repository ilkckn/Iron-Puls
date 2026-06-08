import { useState } from "react";
import "./Roster.css";
import coaches from "./RosterCoachParagraph.js";
import CoachCard from "./CoachCard.jsx";

const Roster = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="roster-container">
      <div className="header">
        <div className="left">
          <span>the elite</span>
          <h2>the roster</h2>
        </div>
        <div className="line"></div>
        <div className="right">
          <span>select protocols below</span>
        </div>
      </div>

      <div className="coaches">
        {coaches.map((coach, index) => (
          <CoachCard key={index} {...coach} />
        ))}
      </div>
    </section>
  );
};

export default Roster;

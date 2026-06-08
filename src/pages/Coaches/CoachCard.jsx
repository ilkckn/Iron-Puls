import { useState } from "react";

const CoachCard = ({ role, name, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="box">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <span>{role}</span>
        <h2>{name}</h2>
        <p
          onClick={() => setExpanded(!expanded)}
          className={expanded ? "expanded" : ""}
        >
          {description}
        </p>
        <button>view protocol</button>
      </div>
    </div>
  );
};

export default CoachCard;

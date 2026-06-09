import TacticalMap from "../../components/TacticMap/TacticalMap";
import Infrastructure from "./Infrastructure";
import NodePanel from "./NodePanel";
import "./TheVaults.css";
import Threshold from "./Threshold";

const TheVaults = () => {
  return (
    <section className="the-vaults-container">
      <div className="hero">
        <span>sector: global logistics</span>
        <div className="main-header">
          <h1>the</h1>
          <h1>vaults</h1>
        </div>
        <div className="paragraphs">
          <p>ELITE NODES AUTHORIZED FOR PROTOCOL</p>
          <p>EXECUTION.</p>
        </div>
      </div>

      <div className="node-panel-component">
        <NodePanel />
      </div>
      <div className="tactic-map-component">
        <TacticalMap />
      </div>
      <div className="infrastructure-component">
        <Infrastructure />
      </div>
      <div className="threshold-component">
        <Threshold />
      </div>
    </section>
  );
};

export default TheVaults;

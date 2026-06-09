import "./NodePanel.css";
import { HiOutlineSignal } from "react-icons/hi2";

const NodePanel = () => {
  return (
    <section className="node-panel-container">
      <p>locations</p>
      <div className="nodes">
        <div className="background">
          <div className="node">
            <div className="info">
              <div className="number-icon">
                <span>node 001</span>
                <span>
                  <HiOutlineSignal />
                </span>
              </div>
              <div className="header">
                <h2>downtown hq</h2>
                <p>FLAGSHIP FACILITY</p>
              </div>
              <div className="line"></div>
              <div className="footprint-system">
                <div className="footprint">
                  <span>footprint</span>
                  <span>12,500 sqft</span>
                </div>
                <div className="system">
                  <span>system</span>
                  <span>roque monolift</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background">
          <div className="node">
            <div className="info">
              <div className="number-icon">
                <span>node 002</span>
                <span>
                  <HiOutlineSignal />
                </span>
              </div>
              <div className="header">
                <h2>brooklyn node</h2>
                <p>INDUSTRIAL RECLAIM</p>
              </div>
              <div className="line"></div>
              <div className="footprint-system">
                <div className="footprint">
                  <span>footprint</span>
                  <span>9,800 sqft</span>
                </div>
                <div className="system">
                  <span>system</span>
                  <span>eleiko platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background">
          <div className="node">
            <div className="info">
              <div className="number-icon">
                <span>node 001</span>
                <span>
                  <HiOutlineSignal />
                </span>
              </div>
              <div className="header">
                <h2>the arsenal</h2>
                <p>INDUSTRIAL RECLAIM</p>
              </div>
              <div className="line"></div>
              <div className="footprint-system">
                <div className="footprint">
                  <span>footprint</span>
                  <span>15,000 sqft</span>
                </div>
                <div className="system">
                  <span>system</span>
                  <span>hammer strength</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NodePanel;

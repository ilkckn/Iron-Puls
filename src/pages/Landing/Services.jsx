import "./Services.css";

const Services = () => {
  return (
    <section className="services-container">
      <div className="container">
        <div className="header">
          <h1>engineered services</h1>
          <div className="par-line">
            <p>
              We provide the tools. You provide the grit. Our facility is
              partitioned into high-intensity zones designed for specific
              athletic outcomes.
            </p>
            <span></span>
          </div>
        </div>
        <div className="services">
          <div className="box">
            <img src="/landing/services-icon.png" alt="" />
            <h2>strength rig</h2>
            <p>
              Heavy-duty power racks and Olympic lifting platforms engineered
              for maximum load and safety.
            </p>
            <ul>
              <li>OLYMPIC PLATES</li>
              <li>CUSTOM RIGS</li>
              <li>CHALK STATIONS</li>
            </ul>
          </div>

          <div className="box">
            <img src="/landing/services-icon.png" alt="" />
            <h2>metco zone</h2>
            <p>
              High-intensity metabolic conditioning circuits to push your
              cardiovascular ceiling to new heights.
            </p>
            <ul>
              <li>ROWERS & SKIERGS</li>
              <li>KETTLEBELLS</li>
              <li>PLYO BOXES</li>
            </ul>
          </div>

          <div className="box">
            <img src="/landing/services-icon.png" alt="" />
            <h2>recovery lab</h2>
            <p>
              Data-driven recovery protocols including cryotherapy and
              compression to keep you in the fight.
            </p>
            <ul>
              <li>ICE BATHS</li>
              <li>SAUNA</li>
              <li>MASSAGE TOOLS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

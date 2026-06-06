import "./About.css";
import Cta from "./Cta";
import Pillars from "./Pillars";
import ShowCase from "./Showcase";

const About = () => {
  return (
    <section className="about-container">
      <div className="hero">
        <span>ESTABLISHED 2024</span>
        <h1>the pulse behind</h1>
        <h1>the iron</h1>
        <div className="paragraphs">
          <p>
            We don't just build muscle; we forge identity. Iron Pulse was born
            from a singular vision: to create a high-performance environment
            where industrial grit meets elite science.
          </p>
          <p>
            Our facility is an ecosystem designed for those who measure progress
            in sweat, seconds, and sheer willpower. Welcome to the engine room
            of human potential.
          </p>
        </div>
        <p className="bg-text">pulse</p>
      </div>

      <div className="pillars-component">
        <Pillars />
      </div>
      <div className="show-case-component">
        <ShowCase />
      </div>
      <div className="cta-component">
        <Cta />
      </div>
    </section>
  );
};

export default About;

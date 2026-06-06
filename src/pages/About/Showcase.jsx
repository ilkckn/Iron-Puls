import "./ShowCase.css";
import { LuLink2 } from "react-icons/lu";
import { HiShare } from "react-icons/hi";

const ShowCase = () => {
  return (
    <section className="show-case-container">
      <div className="content-show-case">
        <div className="header">
          <span>
            <span></span> the engine room
          </span>
          <h1>A SANCTUARY FOR THE</h1>
          <h1>relentless</h1>
        </div>
      </div>
      <div className="ceo-quote">
        <div className="image">
          <img src="/about/ceo.png" alt="" />
        </div>
        <div className="quote">
          <p>99</p>
          <h1>
            "WE DIDN'T SET OUT TO BUILD A GYM. WE BUILT A SYSTEM TO OVERCOME THE
            MEDIOCRE."
          </h1>
          <span></span>
          <p className="quote-text">
            Marcus Vaughn spent a decade in elite sports conditioning before
            realizing that the 'commercial' fitness world lacked the raw soul of
            true performance. Iron Pulse is his answer—a no-compromise
            environment where technology and grit coexist.
          </p>
          <div className="btns">
            <LuLink2 />
            <HiShare />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;

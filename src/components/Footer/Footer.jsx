import "./Footer.css";
import { NavLink } from "react-router-dom";
import { IoShareSocialSharp,IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container">
        <div className="content-footer">
          <div className="logo">
            <h2>iron puls</h2>
            <span>© 2024 IRON PULSE. ENGINEERED FOR PEAK PERFORMANCE.</span>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/programs">Programs</NavLink>
              </li>
              <li>
                <NavLink to="/coaches">Coaches</NavLink>
              </li>
              <li>
                <NavLink to="/locations">Locations</NavLink>
              </li>
            </ul>
          </div>
          <div className="btns">
            <IoShareSocialSharp />
            <IoMailOutline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false)
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="mobile-overlay" onClick={handleClose}></div>
      <section className="navbar">
        <div className="container">
          <div className="content">
            <div
              className="logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="/logo/logo1.png" alt="" />
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
            <div className="join-burgerMenu">
              <RxHamburgerMenu onClick={handleToggleMenuOpen} />
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </section>
      <div className="mobile-container">
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="logo">
              <img src="/logo/logo1.png" alt="" />
              <p>
                <span>I</span>ron <span>P</span>uls
              </p>
            </div>
            <div className="links">
              <ul>
                <li>
                  <NavLink to="/" onClick={handleClose}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleClose}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/programs" onClick={handleClose}>
                    Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/coaches" onClick={handleClose}>
                    Coaches
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/locations" onClick={handleClose}>
                    Locations
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="join-burgerMenu">
              <button onClick={handleClose}>Join Now</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

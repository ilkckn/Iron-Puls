import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMenuOpen) return;

    const menu = document.querySelector(".mobile-menu");
    if (!menu) return;

    const focusableElements = menu.querySelectorAll(
      'a, button, input, [tabindex]:not([tabindex="-1"])',
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift+Tab: ilk elementteyse sona atla
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab: son elementteyse başa atla
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    firstEl?.focus(); // menü açılınca ilk elemana odaklan

    return () => document.removeEventListener("keydown", handleTab);
  }, [isMenuOpen]);

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector(".footer-container");
    const navbar = document.querySelector(".navbar");
    if (main) main.inert = isMenuOpen;
    if (footer) footer.inert = isMenuOpen;
    if (navbar) navbar.inert = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .navbar {
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
        }

        .mobile-container .mobile-menu {
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        }
      `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleToggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`mobile-overlay ${isMenuOpen ? "visibility" : ""}`}
        onClick={handleClose}
      ></div>
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
                <span>I</span>ron <span>P</span>ulse
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

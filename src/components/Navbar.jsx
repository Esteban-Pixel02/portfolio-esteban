import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
   
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h1>Mon Portfolio "Esteban" Développeur Web</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                goToSection("hero");
              }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                goToSection("about");
              }}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                goToSection("skills");
              }}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                goToSection("projects");
              }}
            >
              Projets
            </a>
          </li>

          {/* Page Contact : vraie route */}
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Burger button */}
        <button
          className={`burger ${isOpen ? "toggle" : ""}`}
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

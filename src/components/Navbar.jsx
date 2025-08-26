import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h1>Mon Portfolio "Esteban" Développeur Web </h1>

        {/* Menu desktop */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Compétences</a></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Burger button */}
        <button className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

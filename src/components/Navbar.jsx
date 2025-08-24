import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h1>Mon Portfolio "Esteban"</h1>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><HashLink smooth to="/#about">À propos</HashLink></li>
          <li><HashLink smooth to="/#skills">Compétences</HashLink></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

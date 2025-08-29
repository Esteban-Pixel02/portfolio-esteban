import devIllustration from "../assets/dev_illustration.png";
import { useNavigate, useLocation } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSkills = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "skills" } });
    } else {
      const el = document.getElementById("skills");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div>
        <h2>
          Bienvenu sur mon portfolio{" "}
          <span className="wave" aria-hidden="true">👋</span>
        </h2>
        <p>Développeur web</p>
        <button className="btn-cta" onClick={goToSkills}>
          Voir mes compétences
        </button>
      </div>

      <div className="hero-art">
        <img
          src={devIllustration}
          alt="Illustration développeur"
          className="dev-img"
        />
      </div>
    </section>
  );
}

export default Hero;

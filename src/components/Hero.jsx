import devIllustration from "../assets/dev_illustration.png"; // 👉 ajoute une image dev dans ton dossier assets

function Hero() {
  return (
    <section id="hero" className="hero">
      <div>
        <h2>
          Bienvenu sur mon portfolio  <span className="wave" aria-hidden="true">👋</span>
        </h2>
        <p>Développeur web</p>
        <a className="btn-cta" href="#skills">Voir mes compétences</a>
      </div>

      <div className="hero-art">
        <img src={devIllustration} alt="Illustration développeur" className="dev-img" />
      </div>
    </section>
  );
}
export default Hero;

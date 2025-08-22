import photoProfil from "../assets/Photo_profil.jpg";

function About() {
  return (
    <section id="about" className="about">
      <img src={photoProfil} alt="Photo de profil de Esteban" className="profile-pic" />

      <div className="speech">
        <h3>À propos</h3>
        <p>
          Je suis un développeur web en fin de formation, animé par une passion pour la technologie et le design.
          Mon ambition est de concevoir des sites modernes, performants et accessibles à tous.
        </p>
      </div>
    </section>
  );
}
export default About;

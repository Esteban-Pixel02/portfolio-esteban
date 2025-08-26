import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "../Styles/ProjectPage.css"; 

function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="project-page">
        <p>Projet introuvable.</p>
        <Link to="/projects" className="back-link">← Retour à la liste des projets</Link>
      </main>
    );
  }

  return (
    <main className="project-page">
      <Link to="/projects" className="back-link">← Retour à la liste des projets</Link>

      <h2>{project.title}</h2>
      <p>{project.shortDesc}</p>

      <h3>Problématiques rencontrées</h3>
      <ul>
        {project.problems.map((pb, i) => <li key={i}>{pb}</li>)}
      </ul>

      <h3>Solutions apportées</h3>
      <ul>
        {project.solutions.map((sol, i) => <li key={i}>{sol}</li>)}
      </ul>

      <h3>Compétences développées</h3>
      <ul>
        {project.skillsLearned.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>

      <div className="project-links">
        <a href={project.site} target="_blank" rel="noreferrer">Voir le site</a>
      </div>
    </main>
  );
}

export default ProjectPage;

// src/pages/Projects.jsx
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((p) => (
          <Link to={`/projects/${p.id}`} key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.shortDesc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;

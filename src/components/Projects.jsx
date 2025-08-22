function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet Optimisation",
      description: "Optimisation SEO et performance d’un site web.",
      link: "https://esteban-pixel02.github.io/Projet-4/",
    },
    {
      id: 2,
      title: "Projet React",
      description: "Application web réalisée avec React.",
      link: "https://esteban-pixel02.github.io/Projet-React/",
    },
    {
      id: 3,
      title: "Projet HTML & CSS",
      description: "Intégration complète d’un site en HTML & CSS.",
      link: "https://esteban-pixel02.github.io/Projet-2/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>

      <div className="projects-container">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;

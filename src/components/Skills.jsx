import { useState } from "react";
import { skillsData } from "../data/skillsData.jsx";
import "../Styles/Skills.css";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (id) => {
    setActiveSkill((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); 
      toggleSkill(id);
    }
  };

  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>

      <div className="skills-container">
        {skillsData.map((skill) => {
          const isActive = activeSkill === skill.id;
          return (
            <div
              key={skill.id}
              className={`skill-card ${isActive ? "active" : ""}`}
              onClick={() => toggleSkill(skill.id)}
              onKeyDown={(e) => handleKeyDown(e, skill.id)}
              tabIndex="0"
              role="button"
              aria-expanded={isActive}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
              </div>

              <ul
                className="skill-details"
                style={{
                  maxHeight: isActive ? "500px" : "0px",
                  opacity: isActive ? 1 : 0,
                }}
              >
                {skill.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

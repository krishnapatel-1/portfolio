import "./Skill.css"

export default function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "React",
    "HTML/CSS",
    "JavaScript",
    "SQL",
    "Git & GitHub",
    "NumPy / Pandas",
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

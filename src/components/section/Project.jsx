import "./Project.css";

export default function Projects() {
  // ✅ You can replace these with your real projects later
  const projects = [
    {
      title: "Machine Learning Model",
      description: "A supervised ML model using Python, Pandas, and Scikit-Learn.",
      tech: ["Python", "Scikit-Learn", "Pandas"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React and CSS.",
      tech: ["React", "CSS", "Vite"],
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive charts using Matplotlib, Plotly, and Pandas.",
      tech: ["Python", "Plotly", "Pandas"],
      link: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <a href={project.link} className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

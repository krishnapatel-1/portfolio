import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Krishna Patel</h1>

        <p className="hero-subtitle">AIML Student & Web Developer</p>

        <p className="hero-description">
          I build modern web applications and machine learning projects.
          Passionate about AI, problem-solving, and creating clean user experiences.
        </p>

        <a href="#project" className="hero-btn">
          View Projects
        </a>
      </div>
    </section>
  );
}

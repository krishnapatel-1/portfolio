import "./About.css";
import logo from "@/assets/logo.jpg"

 
export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE — IMAGE */}
        <div className="about-image">
          <img src={logo} alt="Profile" />
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Hi, I'm <strong>Krishna Patel</strong>, a passionate
            <strong> AIML student</strong> and aspiring developer. I love 
            creating clean user interfaces, building machine learning models,
            and exploring modern web technologies.
          </p>

          <p className="about-text">
            I specialize in Python, Data Science, React, and ML algorithms.
            I enjoy solving problems and constantly learning new things.
          </p>

          <p className="about-text">
            My goal is to build intelligent applications and contribute 
            to real-world AI solutions.
          </p>
        </div>

      </div>
    </section>
  );
}

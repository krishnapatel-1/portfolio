import "./Hero.css";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
         
          <img id="profile-img" src={logo} alt="krishna patel" />
        

        <h1 className="hero-title">Hi, I'm Krishna Patel</h1>

        <p className="hero-subtitle">AIML Student & Web Developer</p>

        <p className="hero-description">
          I build modern web applications and machine learning projects.
          Passionate about AI, problem-solving, and creating clean user
          experiences.
        </p>

        <NavLink to="/project" className="hero-btn">
          View Projects{" "}
        </NavLink>
      </div>
    </section>
  );
}

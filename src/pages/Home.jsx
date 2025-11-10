import Hero from "@/components/section/Hero";
import React from "react";
import "./Home.css";
import Skills from "@/components/section/Skill";
import { Projector } from "lucide-react";
import Projects from "@/components/section/Project";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;

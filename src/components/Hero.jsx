import "./Hero.css";
import profileImage from "../assets/images/profile.jpeg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">Available for Internships</div>

        <p>Hello, I'm</p>

        <h1>Deepak</h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          I build scalable web applications using Java, Spring Boot, React, and
          MySQL.
        </p>

        <div className="hero-buttons">
          <button>View Projects</button>
          <button>Download Resume</button>
        </div>

        <div className="hero-socials">
          <a href="/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            <SiLeetcode />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Deepak" />
      </div>
    </section>
  );
}

export default Hero;

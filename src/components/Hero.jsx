import "./Hero.css";
// import profileImage from "../assets/images/profile.jpeg";
import profileImage from "../assets/images/profile_pic.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">Available for Internships</div>

        <p class="greeting">Hello, I'm</p>

        <h1 className="hero-name">Deepak</h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "Backend Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p>
          I build scalable web applications using Java, Spring Boot, React, and
          MySQL.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Projects
          </button>
          <button
  onClick={() => window.open("https://drive.google.com/file/d/1og-xh0_0_0DvD_RXmu5iqCJx8xjEcHzx/view?usp=sharing", "_blank")}
>
  Download Resume
</button>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/CodeByDeepak01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deepak-18b74a310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/CodeByDeepak/"
            target="_blank"
            rel="noopener noreferrer"
          >
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

import "./Projects.css";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import leetmatricImage from "../assets/images/leetmatric.png";
import PortfolioImage from "../assets/images/portfolio.png";
import authifyImage from "../assets/images/authify.png";

const projects = [
  {
    name: "LeetMatric",
    description: "Track LeetCode profile statistics and visualize progress.",
    techStack: ["HTML", "CSS", "JavaScript", "LeetCode GraphQL API"],
    status: "Completed",
    image: leetmatricImage,
    githubUrl: "https://github.com/CodeByDeepak01/LeetMatric",
    demoUrl: "https://leetmatric.com/",
  },
  {
    name: "Portfolio Website",
    description: "Modern portfolio website showcasing skills and projects.",
    techStack: ["React", "CSS", "Vite"],
    status: "Completed",
    image: PortfolioImage,
    githubUrl: "https://github.com/CodeByDeepak01/Portfolio",
    demoUrl: "https://deepak-portfolio-zcj5.onrender.com",
  },
  {
    name: "Authify",
    description: "Secure Authentication System.",
    techStack: ["Java", "Spring Boot", "MySQL", "React", "Spring Security", "JWT", "REST API"],
    status: "In Progress",
    image: authifyImage,
    githubUrl: "https://github.com/CodeByDeepak01/Authify",
    demoUrl: "https://authify.com/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <p className="projects-subtitle">
          Some of the projects I'm working on and building.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>

              <div className="project-content">
                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-status">{project.status}</div>

                <div className="project-buttons">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

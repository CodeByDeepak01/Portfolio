import "./Projects.css";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "LeetCode Stats Tracker",
    description: "Track LeetCode profile statistics and visualize progress.",
    techStack: ["React", "JavaScript", "REST API", "CSS"],
    status: "Completed",
    image: "/projects/leetcode.png",
  },
  {
    name: "Portfolio Website",
    description: "Modern portfolio website showcasing skills and projects.",
    techStack: ["React", "CSS", "Vite"],
    status: "Completed",
    image: "/projects/portfolio.png",
  },
  {
    name: "Student Management System",
    description: "Manage student records using Spring Boot and MySQL.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    status: "In Progress",
    image: "/projects/student-management.png",
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
                  <button className="github-btn">
                    <FaGithub />
                    GitHub
                  </button>

                  <button className="demo-btn">
                    <FiExternalLink />
                    Live Demo
                  </button>
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

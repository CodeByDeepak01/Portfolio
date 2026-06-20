import "./Skills.css";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import { SiJavascript, SiSpringboot, SiMysql, SiC } from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { BsCodeSlash } from "react-icons/bs";

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
    level: "Proficient",
    description: "OOP, Collections, Exception Handling, DSA",
  },
  {
    name: "Problem Solving",
    icon: <BsCodeSlash />,
    level: "Working Knowledge",
    description: "Data Structures, Algorithms, LeetCode",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: "Proficient",
    description: "Semantic HTML, Forms, Accessibility",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: "Proficient",
    description: "Flexbox, Grid, Responsive Design",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: "Proficient",
    description: "ES6+, DOM, Async Programming",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: "Working Knowledge",
    description: "Components, Hooks, State Management",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    level: "Working Knowledge",
    description: "REST APIs, Hibernate, JPA, MVC",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    level: "Working Knowledge",
    description: "Queries, Joins, Database Design",
  },
  {
    name: "REST APIs",
    icon: <TbApi />,
    level: "Working Knowledge",
    description: "CRUD Operations, API Integration",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    level: "Working Knowledge",
    description: "Version Control, Collaboration",
  },
  {
    name: "C Language",
    icon: <SiC />,
    level: "Working Knowledge",
    description: "Pointers, Functions, Problem Solving",
  },
  {
    name: "Python",
    icon: <FaPython />,
    level: "Basic",
    description: "Core Python, Fundamentals",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.name}</h3>

              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

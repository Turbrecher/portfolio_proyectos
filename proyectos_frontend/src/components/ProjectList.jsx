import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";
import { getProjects } from "../api/projects.api";
import { Nav } from "../components/Nav";
import "./styles/ProjectList.css";

export function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const res = await getProjects();
      setProjects(res.data);
      document.title = "PROJECTS - VICTOR'S PORTFOLIO";
    }

    loadProjects();
  }, []);

  return (
    projects && (
      <div className="project-list">
        <Nav />
        <h1 id="page-title">MY PROJECTS</h1>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )
  );
}

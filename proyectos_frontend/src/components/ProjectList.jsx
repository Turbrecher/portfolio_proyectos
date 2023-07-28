import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";
import { getProjects } from "../api/projects.api";

export function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const res = await getProjects();
      setProjects(res.data);
    }

    loadProjects();
  }, []);

  return (
    projects && (
      <div className="project-list">
        <h1>PROJECT LIST</h1>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )
  );
}

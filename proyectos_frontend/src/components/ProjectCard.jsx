import { useNavigate } from "react-router-dom";
import { deleteProject } from "../api/projects.api";

export function ProjectCard({project}) {
  const navigate = useNavigate();

  return (
    <div
      className="project-card"
      onClick={() => {
        deleteProject(project.id, project)
        navigate("/home");
      }}
    >
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
}

import { useNavigate, redirect, Link } from "react-router-dom";
import "./styles/ProjectCard.css";

export function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Link className="project-link" to={project.website_url} target="_blank">
      <div
        className="project-card"
      >
        <div className="title">
          <h1>{project.name.toUpperCase()}</h1>
        </div>
        <div className="description">
          <h2>{project.description}</h2>
        </div>
      </div>
    </Link>
  );
}

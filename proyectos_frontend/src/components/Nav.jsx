import { Link } from "react-router-dom";
import "./styles/Nav.css";

export function Nav() {
  return (
    <div className="nav">
      <Link className="link" to="/home">
        HOME
      </Link>
      <Link className="link" to="/Projects">
        PROJECTS
      </Link>
    </div>
  );
}

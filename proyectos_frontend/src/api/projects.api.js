import axios from "axios";

const projectApi = axios.create({
  baseURL: "http://localhost:8000/api/projects/projects/",
});

export const getProjects = () => projectApi.get("/");

export const getProject = (id) => projectApi.get("/"+id)

/*export const createProject = (project) => projectApi.post("/", project);

export const updateProject = (id, project) =>
  projectApi.delete("/" + id + "/", project);*/

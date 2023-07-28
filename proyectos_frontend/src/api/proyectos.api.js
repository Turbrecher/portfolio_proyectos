import axios from "axios";

const projectApi = axios.create({
  baseURL: "http://localhost:8000/projects/api/projects",
});

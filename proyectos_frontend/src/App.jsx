import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { ProjectList } from "./components/ProjectList";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

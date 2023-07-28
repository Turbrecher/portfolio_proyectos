import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={<Home />} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

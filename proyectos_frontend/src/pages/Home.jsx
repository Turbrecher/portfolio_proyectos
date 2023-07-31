import { Nav } from "../components/Nav";
import { useEffect } from "react";
import "../components/styles/Home.css";
import logo from "../assets/Squirtle.png";

export function Home() {
  useEffect(() => {
    document.title = "HOME - VICTOR'S PORTFOLIO";
  }, []);

  return (
    <div className="home">
      <Nav />
      <h1 id="page-title">WHO AM I?</h1>
      <div className="img">
        <img id="my-photo" src={logo} />
      </div>
      <div className="my-info">
        <h1>I'm Victor Vera Coronel, a Junior Developer who has just ended his formal studies.</h1>
        <h2>I'm spanish</h2>
      </div>
    </div>
  );
}

export default Home;

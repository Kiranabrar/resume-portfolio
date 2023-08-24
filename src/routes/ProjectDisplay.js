import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProjectList } from "../components/ProjectList";
/*import GitHubIcon from "react-icons/fa";*/
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div>
    <Navbar/>
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt=""/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
    </div>
    <Footer/>
    </div>
  );
}

export default ProjectDisplay;

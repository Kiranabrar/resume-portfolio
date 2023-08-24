import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimg2 from '../components/Heroimg2'
import ProjectItem from "../components/ProjectItem";
import {ProjectList} from "../components/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div>
    <Navbar/>
    <Heroimg2  heading="  PROJECTS." text="Lets visit some of my recent projects"/>
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Projects;

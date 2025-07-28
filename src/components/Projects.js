import React from "react";
import project1 from "../assets/start.bg.gif"; // ensure this is in your assets
import project2 from "../assets/start.bg.gif";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        <div className="card">
          <img src={project1} className="project-image" alt="Project 1" />
          <div className="card-content">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio site built with React and hosted on GitHub Pages.</p>
            <div className="tags">React, CSS, GitHub Pages</div>
          </div>
        </div>
        <div className="card">
          <img src={project2} className="project-image" alt="Project 2" />
          <div className="card-content">
            <h3>Task Manager App</h3>
            <p>A full-stack to-do list app using Node.js, Express, and MongoDB.</p>
            <div className="tags">Node.js, Express, MongoDB</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

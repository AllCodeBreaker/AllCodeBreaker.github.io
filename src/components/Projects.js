// import React from "react";
import project1 from "../assets/start.bg.gif"; // ensure this is in your assets
import project2 from "../assets/start.bg.gif";

      const projects = [
  {
    image: project1,
    title: "Portfolio Website",
    description: "A personal portfolio site built with React and hosted on GitHub Pages.",
    tags: "React, GitHub Pages",
    
  },
  {
    image: project2,
    title: "AJ Studio",
    description: "A portfolio Website for my senior friend using HTML, CSS, JavaScript.",
    tags: "HTML, CSS, JavaScript, Netlify",
  },
];



const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

    <div className="projects">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <img src={project.image} className="project-image" alt={project.title} />
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">{project.tags}</div>
          </div>
        </div>
      ))}
    </div>

    </section>
  );
};

export default Projects;

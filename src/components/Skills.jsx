import React from "react";

import "./css/skills.css";


const Skills = ({ myskills }) => {
  const programming = myskills.Programming.content || [];
  const frameworks = myskills.Frameworks.content || [];
  const tools = myskills.Tools.content || [];
  const softSkills = myskills.soft.content || [];

  return (
    <div id="skills" className="animate__animated animate__backInDown">
      <h2>Skills</h2>
      <center>
      <div id="myskills">

<div className="skill-container">
  <h2>{myskills.Programming.title}</h2>
  <div>
    {programming.map((language, index) => (
      <span key={index}>{language}</span>
    ))}
  </div>
</div>
<div className="skill-container">
  <h2>{myskills.Frameworks.title}</h2>
  <div>
    {frameworks.map((framework, index) => (
      <span key={index}>{framework}</span>
    ))}
  </div>
</div>

<div className="skill-container">
  <h2>{myskills.Tools.title}</h2>
  <div>
    {tools.map((tool, index) => (
      <span key={index}>{tool}</span>
    ))}
  </div>
</div>

<div className="skill-container">
  <h2>{myskills.soft.title}</h2>
  <div>
    {softSkills.map((skill, index) => (
      <span key={index}>{skill}</span>
    ))}
  </div>
</div>
          
          </div>

      </center>
    </div>
  );
};

export default Skills;

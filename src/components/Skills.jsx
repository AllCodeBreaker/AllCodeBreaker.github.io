
const skills = [
  { label: "Python", percentage: 80 },
  { label: "Java", percentage: 70 },
  { label: "C", percentage: 60 },
  { label: "JavaScript", percentage: 90 },
  { label: "Version Control", percentage: 75 },
  { label: "React", percentage: 70 },
  { label: "Secure Coding", percentage: 60 },
];

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <div className="skills">
      {skills.map((skill, i) => (
        <div className="skill" key={i}>
          <div className="flex-r">
            <div className="skill-label">{skill.label}</div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

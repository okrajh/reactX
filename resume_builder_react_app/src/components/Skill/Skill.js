import "./Skill.css";
export default function Skill({ skills }) {
  let skillList = [];
  for (let t in skills) {
    skillList.push(
      <ul>
        <li>
          <h3>{skills[t]["skillType"]}</h3>
        </li>
        <li>
          <div className="skill-item">
            {skills[t]["skillsList"].map((x) => (
              <span>{x}</span>
            ))}
          </div>
        </li>
      </ul>
    );
  }
  return (
    <div className="skill-container">
      <h2>Skills</h2>
      {skillList}
    </div>
  );
}

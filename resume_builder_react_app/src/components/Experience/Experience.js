import "./Experience.css";
export default function Experience({ exp }) {
  const expArray = [];
  for (let rec in exp) {
    expArray.push(
      <ul>
        <li>
          <h3>{exp[rec]["companyName"]}</h3>
        </li>
        <li>
          <h4>
            From {exp[rec]["dateFrom"]}To {exp[rec]["dateTo"]}
          </h4>
        </li>
        <li>
          <h5>{exp[rec]["profile"]}</h5>
        </li>
        <li>{exp[rec]["achievement"]}</li>
        <li>{exp[rec]["description"]}</li>
      </ul>
    );
  }

  return (
    <div className="exprience-container">
      <h2>Work Experience</h2>
      {expArray}
    </div>
  );
}

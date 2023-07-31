import "./Education.css";
export default function Education({ edu }) {
  const recordArray = [];
  for (let eKeys in edu) {
    recordArray.push(
      <ul>
        <li>
          <h3>{edu[eKeys]["universityName"]}</h3>
        </li>
        <li>
          <h4>{edu[eKeys]["collegeName"]}</h4>
        </li>
        <li>
          {edu[eKeys]["fromDate"]} To {edu[eKeys]["toDate"]}
        </li>
        <li>{edu[eKeys]["percentage"]} %</li>
      </ul>
    );
  }
  return (
    <div className="education-container">
      <h2>Education</h2>
      {recordArray}
    </div>
  );
}

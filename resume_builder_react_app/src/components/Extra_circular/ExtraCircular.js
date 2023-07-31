import "./ExtraCircular.css";
export default function ExtraCircular({ extracurricularActivities }) {
  let extraList = [];
  for (let i in extracurricularActivities) {
    extraList.push(<span>- {extracurricularActivities[i]}</span>);
  }
  return (
    <div className="ec-container">
      <h2>Extra Circular</h2>
      <div>{extraList}</div>
    </div>
  );
}

import "./Hobby.css";
export default function Hobby({ hobby }) {
  let hobbyList = [];
  for (let i in hobby) {
    hobbyList.push(<span>- {hobby[i]}</span>);
    console.log();
  }
  return (
    <div className="hobby-container">
      <h2>Hobby</h2>
      <div>{hobbyList}</div>
    </div>
  );
}

import "./Introduction.css";
export default function Introduction({ image, name, title, introduction }) {
  return (
    <div className="intro-container">
      <div className="left">
        <img src={image} />
      </div>

      <div className="right">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{introduction}</p>
      </div>
    </div>
  );
}

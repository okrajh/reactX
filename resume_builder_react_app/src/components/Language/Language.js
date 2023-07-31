import "./Language.css";
export default function Language({ lang }) {
  let langList = [];
  for (let i in lang) {
    langList.push(<span>- {lang[i]}</span>);
  }
  return (
    <>
      <div className="lang-conatainer">
        <h2>Language</h2>
        <div>{langList}</div>
      </div>
    </>
  );
}

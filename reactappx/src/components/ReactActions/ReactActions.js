import "./ReactActions.css";
export default function ReactActions({}) {
  function onmouseoverHandle(ev) {
    let img = ev.target;
    img.setAttribute("width", "400px");
  }
  function onmouseoutHandle(ev) {
    let img = ev.target;
    img.setAttribute("width", 200);
  }
  return (
    <div className="react-actions-div">
      <img
        src="https://picsum.photos/id/26/200/300"
        className="dynamicImage"
        alt="Test Image"
        onMouseOver={(ev) => onmouseoverHandle(ev)}
        onMouseOut={(ev) => onmouseoutHandle(ev)}
        style={{ animationDuration: "4s" }}
      />
      <button onMouseOver={() => console.log("Hello Test !")}>
        Test Button
      </button>
      <input type="text" name="name" />
    </div>
  );
}

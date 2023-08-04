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
  function onDubleClickHandler(ev) {
    alert("Double click event");
  }
  function onFocusHandler(ev) {
    console.log("Focus in the input field.");
  }
  function onBlurHandler(ev) {
    console.log("On Blur Evnet is occur");
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
      <button
        onDoubleClick={(ev) => onDubleClickHandler(ev)}
        onClick={() => console.log("On CLick Event")}
      >
        Test Button
      </button>
      <input
        type="text"
        name="name"
        onFocus={(ev) => onFocusHandler(ev)}
        onBlur={(ev) => onBlurHandler(ev)}
        onPaste={() => window.alert("On Paste is not allowed.")}
      />
      <p
        onCopy={() => window.alert("Copy is not allowed")}
        onCut={() => window.alert("Cut is not allowed")}
      >
        Hello this pragraph....
      </p>
    </div>
  );
}

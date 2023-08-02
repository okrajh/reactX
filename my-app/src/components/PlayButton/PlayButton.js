import "./PlayButton.css";
function PlayButton() {
  function handleClick(ev, name, age) {
    alert(ev.type + name + age);
    console.log(ev, name, age);
    return 0;
  }
  return (
    <button onClick={(ev) => handleClick(ev, "Himanshu Raj", "age")}>
      Click Me!
    </button>
  );
}

export default PlayButton;
